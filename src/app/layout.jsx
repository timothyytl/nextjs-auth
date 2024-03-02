import { Inter, Manrope } from "next/font/google"
import "@/src/app/globals.css"
import { cx } from "@/src/utils"
import Header from "@/src/components/header/Header"
import Footer from "@/src/components/footer/Footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
})
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
})

export const metadata = {
  title: "Tim's Nextjs Boilerplate",
  description: "Tim's Nextjs Boilerplate Code",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, "font-mr")}>
        <main className="container">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
