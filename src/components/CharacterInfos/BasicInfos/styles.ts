import styled from 'styled-components'

export const BasicInfosBox = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-around;
  padding: 2rem 2rem;
  gap: 1rem;
  border: 1px solid ${(props) => props.theme.colors.shadowPrimary};
  border-radius: 8px;

  @media (max-width: 650px) {
    flex-direction: column;
    padding: 1rem 1rem;
  }

  .avatar {
    border-radius: 8px;

    .avatarImg {
      border-radius: 8px;
      box-shadow: 0px 0px 5px 2px ${(props) => props.theme.colors.shadowPrimary};
    }

    @media (max-width: 650px) {
      margin: 0 auto;
    }
  }

  .infos {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.125rem;

    @media (max-width: 650px) {
      max-width: 100%;
    }

    .dadosBasicos {
      max-width: 400px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 650px) {
        max-width: 100%;
      }

      .status {
        font-style: italic;
        max-width: 250px;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }

    .dadosSecund {
      max-width: 400px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
      padding-top: 1rem;

      @media (max-width: 650px) {
        max-width: 100%;
      }

      .localizacoes {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media (max-width: 650px) {
          max-width: 45%;
        }
      }

      .episodios {
        text-align: center;
      }
    }
  }
`
