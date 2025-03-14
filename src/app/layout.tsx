import type { Metadata } from "next"
import "./globals.css"
import { poppins } from "./fonts"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata: Metadata = {
  title: "Jamsyar Invitation",
  description: "Undangan Digital Acara Nuzulul Qur'an dan Buka Bersama Jamsyar",
  icons: "./favicon.ico",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
      </body>
    </html>
  )
}
