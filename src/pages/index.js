import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/geist-logo.svg"
          alt="Geist Logo"
          width={100}
          height={100}
          className="w-24 h-24"
        />
        <h1 className="text-4xl font-bold">Welcome to Geist</h1>
        <p className="text-lg text-center">
          A modern design system for your Next.js applications.
        </p>
      </div>
    </div>
  );
}
