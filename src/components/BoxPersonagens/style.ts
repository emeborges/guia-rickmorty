import styled from 'styled-components'

export const Box = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.shadowPrimary};
  border-radius: 10px;

  .titleTable {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .descricao {
      padding-top: 0.5rem;
      font-style: italic;
      font-size: 0.8rem;
    }

    .characterPesquisa {
      background: ${(props) => props.theme.colors.background};
      border: 1px solid ${(props) => props.theme.colors.shadowPrimary};
      padding: 8px;
      border-radius: 8px;

      &:focus {
        outline: 1px solid ${(props) => props.theme.colors.text};
      }
    }
  }
`
