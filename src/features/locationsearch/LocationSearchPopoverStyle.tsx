import styled from 'styled-components'
import { Button } from '../../components';

export const InputForm = styled.form`
  display: flex;
  height: 100%;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
   &:after {
    content:' *';
    color: red;
  }
`;

export const Input = styled.input`
  height: 3rem;
  padding-left: 1rem;
`;

export const OkButton = styled(Button)`
  right: 1rem;
  bottom: 1rem;
  position: absolute;
  padding-left: 1rem;
  padding-right: 1rem;
`;