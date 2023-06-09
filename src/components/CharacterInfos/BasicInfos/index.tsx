'use client'

import { CharacterProps } from '@/utils/types/character'
import Image from 'next/image'
import { BasicInfosBox } from './styles'

interface Props {
  character: CharacterProps | undefined
}
export function BasicInfos({ character }: Props) {
  return (
    <BasicInfosBox>
      <div className={'avatar'}>
        <Image
          src={character ? character?.image : '/rm.svg'}
          width={200}
          height={200}
          alt={'avatar'}
          className={'avatarImg'}
        />
      </div>
      <div className="infos">
        <div className="dadosBasicos">
          <h1>{character?.name}</h1>
          <div className={'status'}>
            <div>
              <span>Gender</span>
              <p>{character?.gender}</p>
            </div>
            <div>
              <span>Status</span>
              <p>{character?.status}</p>
            </div>
            <div>
              <span>Species</span>
              <p>{character?.species}</p>
            </div>
          </div>
        </div>
        <div className="dadosSecund">
          <div className="localizacoes">
            <div className={'status'}>
              <p className={'title'}>Origin:</p>
              <p>{character?.origin.name}</p>
            </div>
            <div className={'status'}>
              <p className={'title'}>Location:</p>
              <p>{character?.location.name}</p>
            </div>
          </div>
          <div className="episodios">
            <p className={'title'}> Total Episode:</p>
            <p>{character?.episode.length}</p>
          </div>
        </div>
      </div>
    </BasicInfosBox>
  )
}
