import styled from 'styled-components'
import { IconButton } from '../iconbutton/IconButton';

export const Popover = styled.dialog`
  top: 9rem;
  border: none;
  width: 20rem;
  height: 20rem;
  padding: 1rem;
  margin: 0 auto;
  position: absolute;
  border-radius: 2.5rem;
  background-color: #fff;
  box-shadow:  rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const Backdrop = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.4);
`;

export const PopoverContent = styled.div`
  height: 100%;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: -.5rem;
  right: -.5rem;
`