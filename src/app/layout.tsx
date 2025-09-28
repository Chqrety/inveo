import type { Metadata } from "next"
import "./globals.css"
import { poppins } from "./fonts"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata: Metadata = {
  title: "Inveo",
  description: "Undangan Digital by Chqrety",
  icons: "./favicon.ico",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
      </body>
    </html>
  )
}
