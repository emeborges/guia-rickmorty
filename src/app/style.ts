import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 80px 0 1rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  .imageContainer {
    width: 100%;
    min-height: 60vh;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;

    h3 {
      text-shadow: 1px 1px ${(props) => props.theme.colors.shadowPrimary};
    }

    img {
      max-width: 100vw;
    }
  }
`
