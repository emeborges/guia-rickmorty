'use client'

import { Container } from './style'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Image
        src={'/rm.svg'}
        width={400}
        height={200}
        alt={'logo rick and morty'}
      />
      <div>Testeasdfasdfadsf</div>
    </Container>
  )
}
