import './globals.css'
import { Inter, Raleway, Poppins } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Arctic CicaDa',
  description: 'Blog Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes='32x32' href="/favicon.svg" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          <AuthProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
