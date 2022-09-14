import styled from 'styled-components'

interface NavProps {
  /**
   * if the nav sidebar is opened or not
   */
  open?: boolean;
}

export const Nav = styled.nav<NavProps>`
  top: 0;
  left:0;
  height: 100%;
  width: 12.5rem;
  position: absolute;
  transition: transform 0.3s linear;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-12.5rem)'};

  background-color: white;
  border-right: 1px solid #ccc;

  @media only screen and (min-width: 600px) {
    display: block;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-8.5rem)'};
  }
`;

export const NavList = styled.ul``;

export const NavListItem = styled.li``;

export const NavLink = styled.a`
  
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0.75rem;
`;
