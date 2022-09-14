import styled from 'styled-components'

export const Toolbar = styled.div`
  gap: 12px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: end;

  @media only screen and (min-width: 600px) {
    margin-left: auto;
  } 
`;
