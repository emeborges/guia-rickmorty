import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 90vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 80px 0 1rem;
  margin: 0 auto;

  @media (max-width: 650px) {
    padding: 80px 1rem;
  }

  .back {
    margin: 1rem 0;
    cursor: pointer;
    width: 20px;
    font-size: 0.8rem;
  }
`
