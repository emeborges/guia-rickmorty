'use client'

import { CharacterProps } from '@/utils/types/character'
import { EpisodesInfoBox } from './styles'

import { useState } from 'react'
import { Episode } from './BoxEpisode'

interface Props {
  character: CharacterProps | undefined
}

export function EpisodesInfo({ character }: Props) {
  const [qtde, setQtde] = useState(5)
  const selecionados = character?.episode.slice(0, qtde)

  console.log(character?.episode ? qtde > character?.episode?.length : false)

  return (
    <EpisodesInfoBox
      seeMoreDisabled={
        character?.episode ? qtde > character?.episode?.length : false
      }
    >
      <h2>Episodes:</h2>
      <div className={'episodes'}>
        {selecionados?.map((selec) => (
          <Episode url={selec} key={selec} />
        ))}
      </div>
      <div className={'more'}>
        <button onClick={() => setQtde(qtde + 5)}>See more</button>
      </div>
    </EpisodesInfoBox>
  )
}
