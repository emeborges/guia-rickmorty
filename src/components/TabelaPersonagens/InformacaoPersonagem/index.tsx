import Image from 'next/image'

interface Props {
  Avatar: string
  Name: string
  Location: string
  Specie: string
  Episodes: number
  Status: string
}

export default function InformacaoPersonagem({
  Avatar,
  Name,
  Location,
  Specie,
  Episodes,
  Status,
}: Props) {
  return (
    <tr className={'conteudo'}>
      <td className={'avatarContainer'}>
        <Image
          src={Avatar}
          height={55}
          width={55}
          alt={'Avatar'}
          className="avatar"
        />
      </td>
      <td className={'md'}>{Name}</td>
      <td className={'md noMobile'}>{Location}</td>
      <td className={'sm noMobile'}>{Specie}</td>
      <td className={'sm noMobile'}>{Episodes}</td>
      <td className={'sm noMobile'}>{Status}</td>
    </tr>
  )
}
