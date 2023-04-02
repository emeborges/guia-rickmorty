'use client'

import Centralizer from '@/components/Centralizer'
import { Container } from './style'
import Image from 'next/image'
import BoxPersonagens from '@/components/BoxPersonagens'

export default function Home() {
  return (
    <Container>
      <Centralizer>
        <div className="imageContainer">
          <h3>O guia definitivo de</h3>
          <Image
            src={'/rm.svg'}
            width={600}
            height={200}
            alt={'logo rick and morty'}
          />
        </div>
        <BoxPersonagens />
      </Centralizer>
    </Container>
  )
}
