"use server";

import { Resend } from "resend";
import * as z from "zod";
import { headers } from "next/headers";

import { ratelimit } from "@/lib/rate-limit";
import EmailTemplate from "@/emails/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  fullname: z.string().min(1),
  email: z.email().min(1),
  message: z.string().min(1),
});

const getClientIp = async () => {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
};

export async function sendEmail(data: z.infer<typeof ContactFormSchema>) {
  const ip = await getClientIp();
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return {
      success: false,
      message: "Too many messages. Please try again later.",
    };
  }

  const parsed = ContactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data",
    };
  }

  const { fullname, email, message } = parsed.data;

  try {
    await resend.emails.send({
      from: "Portfolio <wojciechwnek@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      subject: `New message from ${fullname}`,
      replyTo: email,
      react: EmailTemplate({
        fullname,
        email,
        message,
      }),
    });

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
