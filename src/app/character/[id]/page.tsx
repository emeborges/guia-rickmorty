'use client'

import Centralizer from '@/components/Centralizer'
import { Container } from './style'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CharacterProps } from '@/utils/types/character'
import { Loader } from '@/components/Loader'
import { BasicInfos } from '@/components/CharacterInfos/BasicInfos'
import { EpisodesInfo } from '@/components/CharacterInfos/EpisodesInfo'
import { useRouter } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

export default function Home({ params }: Props) {
  const [character, setCharacter] = useState<CharacterProps>()
  const [loading, setLoading] = useState(false)
  const id = params.id
  const routes = useRouter()

  async function characterApi(id: string) {
    setLoading(true)

    const { data } = await axios.get<CharacterProps>(
      `https://rickandmortyapi.com/api/character/${id}`,
    )

    setCharacter(data)

    setTimeout(() => setLoading(false), 1000)
  }

  useEffect(() => {
    characterApi(id)
  }, [id])

  return (
    <>
      <Container>
        <Centralizer>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="back" onClick={() => routes.back()}>
                Return
              </div>
              <BasicInfos character={character} />{' '}
              <EpisodesInfo character={character} />
            </>
          )}
        </Centralizer>
      </Container>
    </>
  )
}
