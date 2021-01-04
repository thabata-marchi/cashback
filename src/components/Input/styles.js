import styled from 'styled-components';
import { colors } from '../../theme';

export const InputCSS = styled.input`
  background: ${colors.gray_light};
  border-radius: 5px;
  border: 1px solid ${colors.gray_light2};
  height: 20px;
  padding: 5px;
  color: ${colors.gray};
  margin: 0 0 5px 0;  
  font-size: 12px;
`

export const TextError = styled.p`
  color: ${colors.red};
  font-size: 11px;
  text-align: left;
  margin: 0 0 15px 5px;
  font-style: italic;
`