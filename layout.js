import "./globals.css";

export const metadata = {
  title: "Hair & Henna Fusion",
  description: "Empowering women through hair and henna artistry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
