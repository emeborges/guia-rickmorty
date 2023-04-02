'use client'

import { useRouter } from 'next/navigation'
import Centralizer from '../Centralizer'
import { FooterBox } from './styles'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export function Footer() {
  const router = useRouter()
  return (
    <FooterBox>
      <Centralizer>
        <div className={'textos'}>
          <div className={'agrad'}>
            <p>Thanks for the opportunity!</p>
            <p>Marcelo Borges</p>
          </div>
          <div className={'social'}>
            <AiFillLinkedin
              className={'icon'}
              size={50}
              onClick={() =>
                router.push('https://www.linkedin.com/in/marcelofborges/')
              }
            />
            <AiFillGithub
              className={'icon'}
              onClick={() => router.push('https://github.com/emeborges')}
              size={50}
            />
          </div>
        </div>
      </Centralizer>
    </FooterBox>
  )
}
