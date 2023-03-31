import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding-top: 80px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
`
