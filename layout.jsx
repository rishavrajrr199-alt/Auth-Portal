import "./globals.css";

export const metadata = {
  title: "Auth Portal",
  description: "Next.js Authentication Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}