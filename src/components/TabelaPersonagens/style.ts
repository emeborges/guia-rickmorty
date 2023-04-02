import styled, { css } from 'styled-components'

interface IconProps {
  disable: boolean
}

export const Tabela = styled.table`
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.shadowPrimary};
  border-radius: 10px;

  tbody tr {
    &:nth-child(even) {
      background: ${(props) => props.theme.colors.bgTable};
    }

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme.colors.tableHover};
    }
  }

  .cabecalho {
    th {
      padding: 12px 0;
      background: ${(props) => props.theme.colors.tertiary};
      color: #eee;
    }
  }

  .noMobile {
    @media (max-width: 680px) {
      display: none;
    }
  }

  .conteudo {
    .avatarContainer {
      max-width: 1.5rem;
      text-align: center;
    }

    .avatar {
      border-radius: 100px;
    }

    .sm {
      max-width: 1.5rem;
      text-align: center;
    }

    .md {
      max-width: 4rem;
      text-align: center;
    }
  }

  tfoot {
    display: flex;
    justify-content: right;
  }
`

export const Paginacao = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    font-size: 10px;
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.125rem;
    gap: 0.5rem;
  }

  .atual {
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 4px;
    padding: 8px;
  }
`

export const Icon = styled.div<IconProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 4px;

  ${(props) =>
    props.theme.title === 'dark'
      ? css`
          border: 1px solid ${(props) => props.theme.colors.hover};
        `
      : css`
          border: 1px solid ${(props) => props.theme.colors.text};
        `}

  ${(props) =>
    props.disable
      ? css`
          background: transparent;
          cursor: not-allowed;
          border: none;
        `
      : css`
          background: ${(props) => props.theme.colors.text}
          cursor: pointer;
        `}
`
