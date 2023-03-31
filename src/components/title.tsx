'use client'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export const TitleComponent = ({ children }: { children: ReactNode }) => {
  return <Title>{children}</Title>
}
