'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ButtonTheme, HeaderBox } from './styles'
import { dark, light } from '@/themes/theme'
import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

interface Props {
  toggleTheme(): void
  theme: string
}
export function Header({ toggleTheme, theme }: Props) {
  const router = useRouter()
  return (
    <HeaderBox>
      <div>
        <Image
          src={theme === 'dark' ? '/rmblack.png' : '/rm.png'}
          alt={'logo'}
          width={80}
          height={80}
          onClick={() => router.push('/')}
          className={'icon'}
        />
        <ButtonTheme onClick={toggleTheme}>
          {theme === 'dark' ? (
            <BsSunFill size={'1.5rem'} color={light.colors.textSecoundary} />
          ) : (
            <FaMoon size={'1.5rem'} color={dark.colors.textSecoundary} />
          )}
        </ButtonTheme>
      </div>
    </HeaderBox>
  )
}
