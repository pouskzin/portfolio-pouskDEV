import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/hooks/useLanguage"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Kaio Freire | Engenharia de Software & Back-end",
  description: "Portfólio de Kaio Freire. Desenvolvedor especializado na construção de arquiteturas sólidas e ecossistema Back-end (Java, Spring Boot, PostgreSQL).",
  keywords: ["Kaio Freire", "Engenharia de Software", "Back-end", "Java", "Spring Boot", "PostgreSQL", "Desenvolvedor de Software"],
  authors: [{ name: "Kaio Freire" }],
  creator: "Kaio Freire",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kaio Freire | Engenharia de Software & Back-end",
    description: "Desenvolvedor especializado na construção de arquiteturas sólidas e ecossistema Back-end (Java, Spring Boot, PostgreSQL).",
    url: "https://kaiofreire.dev",
    siteName: "Kaio Freire Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaio Freire | Engenharia de Software & Back-end",
    description: "Desenvolvedor especializado na construção de arquiteturas sólidas e ecossistema Back-end (Java, Spring Boot, PostgreSQL).",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-text`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>

  );
}
