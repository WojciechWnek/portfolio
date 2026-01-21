type Props = {
  fullname: string;
  email: string;
  message: string;
};

const EmailTemplate = ({ fullname, email, message }: Props) => {
  return (
    <main>
      <div style={{ backgroundColor: "#f6f9fc", padding: "20px" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "8px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h1>📩 New contact message</h1>

          <p>
            <strong>Name:</strong> {fullname}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>

          <hr />

          <p>{message}</p>

          <hr />

          <p style={{ fontSize: "12px", color: "#888" }}>Sent from portfolio contact form</p>
        </div>
      </div>
    </main>
  );
};

export default EmailTemplate;
