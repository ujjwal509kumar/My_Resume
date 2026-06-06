import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ujjwal Kumar — Full Stack Developer",
  description:
    "Ujjwal Kumar is a full stack developer from Bengaluru, India, turning complex problems into simple, beautiful and intuitive web experiences.",
};

// Runs before first paint to apply the saved theme (avoids a flash of the
// wrong theme). The theme-switch character (Shigure Ui) is set in CSS.
const themeScript = `
(function () {
  try {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme') || 'dark'
    );
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
