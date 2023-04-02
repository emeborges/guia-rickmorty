'use client'

import axios from 'axios'
import { BoxEpisode } from './styles'
import { useEffect, useState } from 'react'
import { EpisodeProps } from '@/utils/types/episodes'

interface Props {
  url: string
}

export function Episode({ url }: Props) {
  const [ep, setEp] = useState<EpisodeProps>()
  async function buscarEp(url: string) {
    const { data } = await axios.get<EpisodeProps>(url)

    setEp(data)
  }

  useEffect(() => {
    buscarEp(url)
  }, [url])

  return (
    <BoxEpisode>
      <h4 className="episode">{ep?.name}</h4>
      <p className="episode">{ep?.episode}</p>
      <p className="episode">{ep?.air_date}</p>
    </BoxEpisode>
  )
}
