import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid ${({theme}) => theme.backgroundLight};

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${(props) => props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;
    
    &:hover {
      color: ${(props) => props.isActive ? lighten(0.2, props.theme.primary) : lighten(0.2, props.theme.textHighlight)};
    }
  }
`

