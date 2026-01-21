import { ContactForm } from "../contact/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Contact = () => {
  return (
    <section id="contact" className="2xs:px-8 px-5 py-20 md:px-16">
      <h2 className="2xs:px-8 mt-10 mb-20 w-full px-5 text-3xl leading-tight font-black tracking-tight md:px-0 md:text-4xl xl:text-5xl">
        Let’s work together
      </h2>
      <Card className="mx-auto max-w-2xl shadow-xl">
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
