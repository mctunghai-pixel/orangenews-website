// =============================================================================
// Subscribe confirmation email — React Email template (Phase 7.2.1)
// =============================================================================
// Rendered server-side via @react-email/components and handed to Resend's
// emails.send. Mongolian Cyrillic copy. No images, no tracking pixels —
// keeps deliverability clean for a fresh sender domain.
// =============================================================================

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";

interface Props {
  verifyUrl: string;
}

export function SubscribeConfirmEmail({ verifyUrl }: Props) {
  return (
    <Html lang="mn">
      <Head />
      <Preview>Orange News товхимолд бүртгэлээ баталгаажуулна уу</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Heading as="h1" style={headingStyle}>
            Orange News Товхимол
          </Heading>
          <Text style={textStyle}>
            Та манай өдөр тутмын товхимолд бүртгүүлэх хүсэлт илгээлээ. Доорх
            товчийг дарж бүртгэлээ баталгаажуулна уу.
          </Text>
          <Link href={verifyUrl} style={buttonStyle}>
            Бүртгэлээ баталгаажуулах
          </Link>
          <Text style={smallTextStyle}>
            Эсвэл энэ холбоосыг хуулж браузерт нээнэ үү:
            <br />
            <span style={{ wordBreak: "break-all" }}>{verifyUrl}</span>
          </Text>
          <Hr style={hrStyle} />
          <Text style={fineprintStyle}>
            Хэрвээ та энэ товхимолд бүртгүүлэх хүсэлт гаргаагүй бол энэ имэйлийг
            үл хайхран болно. Бүртгэл идэвхждэггүй бөгөөд таны хаяг манай
            жагсаалтад нэмэгдэхгүй. Холбоос 7 хоногийн дотор хүчинтэй.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyle = {
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  backgroundColor: "#f6f6f6",
  margin: 0,
  padding: "24px 0",
};

const containerStyle = {
  maxWidth: 560,
  margin: "0 auto",
  padding: 32,
  backgroundColor: "#ffffff",
};

const headingStyle = {
  fontSize: 22,
  fontWeight: 700 as const,
  color: "#111111",
  marginTop: 0,
  marginBottom: 20,
};

const textStyle = {
  fontSize: 15,
  lineHeight: "1.6" as const,
  color: "#333333",
  marginBottom: 24,
};

const buttonStyle = {
  display: "inline-block",
  padding: "12px 28px",
  backgroundColor: "#111111",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 600 as const,
  fontSize: 14,
};

const smallTextStyle = {
  fontSize: 12,
  color: "#666666",
  marginTop: 24,
  lineHeight: "1.5" as const,
};

const hrStyle = {
  borderColor: "#eeeeee",
  margin: "32px 0 20px",
};

const fineprintStyle = {
  fontSize: 11,
  color: "#999999",
  lineHeight: "1.5" as const,
};
