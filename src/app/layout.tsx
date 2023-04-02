'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Globalstyles from '@/themes/globalstyles'
import StyledComponentsRegistry from '@/themes/registry'
import { dark, light } from '@/themes/theme'
import usePeristedState from '@/utils/usePersistedState'
import { Inter } from 'next/font/google'

import { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <html lang="en">
        <header>
          <title>Rick & Morty Guide</title>
        </header>
        <body className={inter.className}>
          <Header toggleTheme={toggleTheme} theme={theme.title} />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
        <footer>
          <Footer />
        </footer>
      </html>
    </ThemeProvider>
  )
}
