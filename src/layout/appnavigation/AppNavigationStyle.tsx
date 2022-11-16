import styled from 'styled-components'
import { IconButton } from '../../components';
import { Link } from 'react-router-dom';

interface NavProps {
  /**
   * if the nav sidebar is opened or not
   */
  open?: boolean;
}

export const Nav = styled.nav<NavProps>`
  top: 0;
  left:0;
  z-index: 3;
  height: 100%;
  width: 12.5rem;
  position: fixed;
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

export const NavList = styled.ul`
padding-top: 7rem;
`;

export const NavListItem = styled.li`
  min-height: 3rem;
  padding: 1rem 2rem;
  border-top: 1px solid #ccc;

  &:last-child {
    border-bottom: 1px solid #ccc;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

