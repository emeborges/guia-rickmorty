import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secoundary: string
      tertiary: string
      background: string
      pink: string
      text: string
      hover: string
      textSecoundary: string
      shadowPrimary: string
      bgTable: string
      tableHover: string
    }
  }
}
