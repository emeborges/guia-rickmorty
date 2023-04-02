'use client'

import { useEffect, useState } from 'react'
import TabelaPersonagens from '../TabelaPersonagens'
import { Box } from './style'
import {
  CharacterProps,
  InfosResponse,
  ResponseCharacter,
} from '@/utils/types/character'
import axios from 'axios'
import { Loader } from '../Loader'

export interface Request {
  url: string
  proxPagina: number
  parametros: any
}

export default function BoxPersonagens() {
  const [info, setInfos] = useState<InfosResponse>()
  const [characters, setCharacters] = useState<CharacterProps[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState<string>(
    'https://rickandmortyapi.com/api/character',
  )

  async function resp(
    url: string,
    proxPagina: number,
    parametros: any | undefined,
  ) {
    setLoading(true)

    const { data } = await axios.get<ResponseCharacter>(url, {
      params: parametros,
    })

    if (proxPagina) {
      setPage(proxPagina)
    }

    setCharacters(data.results)
    setInfos(data.info)

    setTimeout(() => setLoading(false), 2000)
  }

  useEffect(() => {
    resp(url, 1, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function clearFilters() {
    setUrl(`https://rickandmortyapi.com/api/character`)

    setTimeout(
      () => resp('https://rickandmortyapi.com/api/character', 1, {}),
      1500,
    )
  }

  function searchCharacterName(value: string) {
    const nome = value
    const qtde = nome.length

    if (qtde > 1) {
      setLoading(true)
      setUrl(`https://rickandmortyapi.com/api/character/?name=${nome}`)
      setTimeout(() => resp(url, 1, { name: nome }), 1500)
    }

    if (nome === '') {
      clearFilters()
    }
  }

  return (
    <Box>
      <div className="titleTable">
        <div>
          <h3> Personagens </h3>
          <p className="descricao">
            Confira abaixo a lista de personagens, com a possibilidade de
            gerenciar itens.
          </p>
        </div>
        <input
          type="text"
          className={'characterPesquisa'}
          placeholder="Search Character Name"
          onChange={(e) => searchCharacterName(e.target.value)}
        />
      </div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <TabelaPersonagens
            characters={characters}
            page={page}
            info={info}
            resp={resp}
            url={url}
          />
        )}
      </div>
    </Box>
  )
}
