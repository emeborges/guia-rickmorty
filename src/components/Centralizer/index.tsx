'use client'

import styled from 'styled-components'
import { ReactNode } from 'react'

export const CentralizerComponent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

interface Props {
  children: ReactNode
}

export default function Centralizer({ children }: Props) {
  return <CentralizerComponent>{children}</CentralizerComponent>
}
