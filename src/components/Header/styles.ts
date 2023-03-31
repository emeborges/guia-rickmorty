import styled from 'styled-components'

export const HeaderBox = styled.header`
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 1px 1px 0 0 ${(props) => props.theme.colors.shadowPrimary};
  z-index: 10;
  position: absolute;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
`

export const ButtonTheme = styled.button`
  border: none;
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`
