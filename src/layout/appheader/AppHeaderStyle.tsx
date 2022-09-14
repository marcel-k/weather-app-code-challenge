import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 600px) {
    gap: 0.75rem;
    min-height: 5rem;
    flex-direction: row;
  }
`;

export const Title = styled.h1``;

export const LogoLink = styled.a``;

export const Logo = styled.span`
  &:before {
    content: "";
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    background-color: black;
    background-repeat: no-repeat;
    background-size: 2.5rem;
    background-image: url(/assets/icons/Cloud.svg);
    background-position: center center;
  }
`;
