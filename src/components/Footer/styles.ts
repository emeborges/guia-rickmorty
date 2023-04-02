import styled from 'styled-components'

export const FooterBox = styled.header`
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 1px 1px 0 0 ${(props) => props.theme.colors.shadowPrimary};
  z-index: 10;
  position: absolute;
  border-top: 1px solid ${(props) => props.theme.colors.shadowPrimary};
  padding: 0 0.5rem 2rem;

  .textos {
    padding: 1rem 0;
    text-align: right;

    .agrad {
      margin-bottom: 0.35rem;
    }

    .social {
      font-size: 0.8rem;

      .icon {
        cursor: pointer;
      }
    }
  }
`
