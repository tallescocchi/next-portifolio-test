import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  > section {
    margin-top: 8rem;
    width: 100%;
    display: flex;
    align-items: flex;
    justify-content: center;
    gap: 8rem;

    @media (max-width: 1000px) {
      gap: 5rem;
    }

    @media (max-width: 700px) {
      gap: 3rem;
      flex-wrap: wrap;
      margin-top: 5rem;
    }
  }
`

export const KnowledgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem 1rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({theme}) => theme.primary};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({theme}) => theme.secondary};
    transition: .3s;
  }

  &:hover {
    svg {
      color: ${({theme}) => theme.primary};
      transform: scale(.95);
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
    }
  }

`
