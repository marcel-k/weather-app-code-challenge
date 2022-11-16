import styled from 'styled-components';


export const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h3<{ size?: 'medium' | 'larger' }>`
  color: #fff;
  font-weight: 700;
  padding-bottom: 0.5rem;
  font-size: ${({ size = 'medium' }) => size === 'larger' ? '1.25rem' : '1rem'};
`;