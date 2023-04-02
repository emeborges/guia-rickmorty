import InformacaoPersonagem from './InformacaoPersonagem'
import { Icon, Paginacao, Tabela } from './style'
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md'

import { Character, InfosResponse } from '@/utils/types/character'

interface Props {
  characters: Character[]
  page: number
  info: InfosResponse | undefined
  url: string
  resp(
    url: string,
    proxPagina: number,
    parametros: any | undefined,
  ): Promise<void>
}

export default function TabelaPersonagens({
  characters,
  page,
  info,
  url,
  resp,
}: Props) {
  console.log(url)
  return (
    <Tabela>
      <thead>
        <tr className={'cabecalho'}>
          <th className={'avatarContainer'}>Avatar</th>
          <th className={'md'}>Name</th>
          <th className={'md noMobile'}>Location</th>
          <th className={'sm noMobile'}>Specie</th>
          <th className={'sm noMobile'}>Episodes</th>
          <th className={'sm noMobile'}>Status</th>
        </tr>
      </thead>
      <tbody>
        {characters &&
          characters.map((char) => (
            <InformacaoPersonagem
              key={char.id}
              Avatar={char.image}
              Name={char.name}
              Location={char.location.name}
              Specie={char.species}
              Episodes={char.episode.length}
              Status={char.status}
            />
          ))}
      </tbody>
      <tr>
        <td></td>
        <td className={'noMobile'}></td>
        <td className={'noMobile'}></td>
        <td className={'noMobile'}></td>
        <td className={'noMobile'}></td>
        <td style={{ maxWidth: '4rem' }}>
          <Paginacao>
            <Icon
              disable={info?.prev === null}
              onClick={() => {
                if (info?.prev) {
                  resp(url, 1, {})
                }
              }}
            >
              <MdOutlineKeyboardDoubleArrowLeft size={'1.2rem'} />
            </Icon>

            <Icon
              disable={info?.prev === null}
              onClick={() => {
                if (info?.prev) {
                  resp(info?.prev, page - 1, {})
                }
              }}
            >
              <MdKeyboardArrowLeft size={'1.2rem'} />
            </Icon>

            <div className="txt">
              {page > 1 && (
                <p
                  onClick={() => {
                    if (info?.next) {
                      resp(info?.next, page + 1, {})
                    }
                  }}
                >
                  {page - 1}{' '}
                </p>
              )}{' '}
              {<p className={'atual'}>{page}</p>}{' '}
              {
                <p
                  onClick={() => {
                    if (info?.next) {
                      resp(info?.next, page + 1, {})
                    }
                  }}
                >
                  {page !== info?.pages && page + 1}{' '}
                </p>
              }
            </div>
            <Icon
              disable={info?.next === null}
              onClick={() => {
                if (info?.next) {
                  resp(info?.next, page + 1, {})
                }
              }}
            >
              <MdKeyboardArrowRight size={'1.2rem'} />
            </Icon>

            <Icon
              disable={info?.next === null}
              onClick={() => {
                if (info?.next) {
                  resp(url, info.pages, { page: info.pages })
                }
              }}
            >
              <MdOutlineKeyboardDoubleArrowRight size={'1.2rem'} />
            </Icon>
          </Paginacao>
        </td>
      </tr>
    </Tabela>
  )
}
