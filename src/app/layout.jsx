import './globals.css'
import { Inter, Raleway, Poppins } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Blog with NextJs',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
