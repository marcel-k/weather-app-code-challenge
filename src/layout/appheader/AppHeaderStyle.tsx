import styled from 'styled-components'

export const Header = styled.header`
  height: 80px;
  display: flex;
  gap: 12px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1``;

export const LogoLink = styled.a``;

export const Logo = styled.span`
  &:before {
    content: "";
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: black;
    background-repeat: no-repeat;
    background-size: 40px;
    background-image: url(/assets/icons/Cloud.svg);
    background-position: center center;
  }
`;
