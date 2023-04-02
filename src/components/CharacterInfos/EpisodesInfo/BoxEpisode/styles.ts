import styled from 'styled-components'

export const BoxEpisode = styled.div`
  border: 1px solid ${(props) => props.theme.colors.shadowPrimary};
  max-width: 13.7rem;
  width: 100%;
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  height: 8rem;
  transition: 0.2s all;

  &:hover {
    box-shadow: 0px 0px 2px 2px ${(props) => props.theme.colors.shadowPrimary};
  }

  @media (max-width: 650px) {
    max-width: 100%;
  }
`
