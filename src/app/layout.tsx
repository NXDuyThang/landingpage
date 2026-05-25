import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyễn Xuân Duy Thắng | Full Stack Engineer",
  description: "Trang thông tin cá nhân và dự án của Nguyễn Xuân Duy Thắng - Chuyên gia kỹ thuật phát triển ứng dụng Full Stack và tích hợp Trí tuệ nhân tạo (AI/LLMs).",
  keywords: [
    "Nguyễn Xuân Duy Thắng",
    "Full Stack Engineer",
    "Full Stack Developer",
    "AI Integration",
    "Enterprise Backend",
    "Next.js Portfolio",
    "Gemini API",
    "Node.js",
    "TypeScript",
    "TDMU"
  ],
  authors: [{ name: "Nguyễn Xuân Duy Thắng" }],
  creator: "Nguyễn Xuân Duy Thắng",
  openGraph: {
    title: "Nguyễn Xuân Duy Thắng | Full Stack Engineer",
    description: "Kỹ sư phát triển ứng dụng Full Stack & Tích hợp Giải pháp Trí tuệ nhân tạo (AI/LLMs). Sinh viên CNTT trường Đại học Thủ Dầu Một.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var activeTheme = theme || systemTheme;
                  if (activeTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="bg-theme-bg text-theme-fg antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
