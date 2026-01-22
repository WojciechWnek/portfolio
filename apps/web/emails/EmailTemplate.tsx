import { Html, Head, Body, Container, Text, Heading } from "@react-email/components";

type Props = {
  fullname: string;
  email: string;
  message: string;
};

export default function ContactEmail({ fullname, email, message }: Props) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f6f9fc" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: 24 }}>
          <Heading>New contact message</Heading>
          <Text>
            <strong>Name:</strong> {fullname}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
