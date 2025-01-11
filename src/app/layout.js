import "./globals.css";

export const metadata = {
  title: "Dnipro",
  description: "Hor Dnipro",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
