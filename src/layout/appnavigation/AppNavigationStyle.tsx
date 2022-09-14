import styled from 'styled-components'
import { IconButton } from "../../components";

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
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-14rem)'};

  background-color: white;
  border-right: 1px solid #ccc;
`;

export const NavCloseButton = styled(IconButton)`
    position: absolute;
    right: -1.5rem;
    margin-top: 2rem;
`;

export const NavList = styled.ul``;

export const NavListItem = styled.li``;

export const NavLink = styled.a`
  
`;

