"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Mail, MailCheck } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    window.location.href = `mailto:${email}`;
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={handleCopy} variant={"toggle"} className="px-7 py-5">
          <div className="flex items-center gap-5">
            {copied ? <MailCheck /> : <Mail />}
            <p>{email}</p>
          </div>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy email</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default CopyEmail;
