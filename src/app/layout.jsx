import "./globals.css";

export const metadata = {
  title: "My-App Docker",
  description: "Evaluation docker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
