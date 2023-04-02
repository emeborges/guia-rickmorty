import { createGlobalStyle } from 'styled-components'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${inter.style.fontFamily};
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background}
    min-height: 100vh;
 }`
