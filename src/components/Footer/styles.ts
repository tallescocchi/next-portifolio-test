import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  border-top: 1px solid ${({theme}) => theme.backgroundLight};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      color: ${({theme}) => theme.secondary};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.5rem;
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({theme}) => theme.text};
        cursor: pointer;
        transition: .5s;
        
        &:hover {
          color: ${({theme}) => theme.primary};
        }
      }
    }

    @media(max-width: 450px) {
      button {
        font-size: .9rem;
      }

      >section {
        gap: .5rem;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`
