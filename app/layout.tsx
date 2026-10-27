import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arvind Nataraj | Developer Portfolio",
  description: "Arvind Nataraj's software developer portfolio.",
};

// Restore the saved preference before paint; dark is the first-visit default.
const initializeTheme = `(() => {
  let theme = "dark";
  try {
    if (localStorage.getItem("portfolio-theme") === "light") theme = "light";
  } catch {}
  document.documentElement.dataset.theme = theme;
})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="flex justify-end p-4 sm:p-6">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
