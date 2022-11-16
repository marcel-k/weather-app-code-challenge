import styled from 'styled-components'
import { IconButton } from '../../../components';

export const Toolbar = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: end;
`;

export const AnimatedButton = styled(IconButton) <{ animate: boolean }>`
  animation: ${({ animate }) => animate ? '4s ease 0s infinite beat' : null};
  
  @keyframes beat {
    0%, 50%, 100% { transform: scale(1, 1); }
    30%, 80% { transform: scale(2, 2); }
  }
`;
