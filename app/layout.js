import { Fugaz_One, Open_Sans } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import Link from 'next/link'
import "./globals.css";
import Head from "./head";


const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Moodl",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {

  const header = (
    <header className='p-4 sm:p-8 flex items-center justify-between gap-4 '>
      <Link href='/'>
      <h1 className={'text-base sm:text-xl textGradient '+fugaz.className}>Moodl</h1>
      </Link>
      <div className='flex items-center justify-between'>
        PLACEHOLDER CTA || STAT
      </div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center ">
      <p className={'text-indigo-500 '+fugaz.className}>Create with 💛</p>
    </footer>
  )

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + opensans.className}>
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
