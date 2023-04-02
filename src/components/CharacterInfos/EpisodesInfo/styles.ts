import styled, { css } from 'styled-components'

interface ComponentProps {
  seeMoreDisabled: boolean
}

export const EpisodesInfoBox = styled.div<ComponentProps>`
  width: 100%;
  margin: 1rem auto;
  padding: 2rem 2rem;
  gap: 1rem;
  border: 1px solid ${(props) => props.theme.colors.shadowPrimary};
  border-radius: 8px;

  @media (max-width: 650px) {
    flex-direction: column;
    padding: 1rem 1rem;
  }

  .episodes {
    padding: 1rem 0;
    display: flex;
    gap: 0.5rem;
    width: 100%;
    flex-flow: wrap;
  }

  .more {
    justify-content: right;
    width: 100%;

    ${(props) =>
      props.seeMoreDisabled
        ? css`
            display: none;
            background: red;
          `
        : css`
            display: flex;
          `}

    button {
      background: transparent;
      padding: 0.5rem 1rem;
      border: 1px solid ${(props) => props.theme.colors.shadowPrimary};
      color: ${(props) => props.theme.colors.shadowPrimary};
      border-radius: 8px;
      transition: 0.2s all;
      cursor: pointer;

      &:hover {
        border-color: ${(props) => props.theme.colors.text};
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`
