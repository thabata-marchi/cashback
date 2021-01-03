import styled from 'styled-components';
import { colors, linearColor } from '../../theme';

export const Button = styled.button`
  background: ${props => props.colorButton || linearColor.green};
  border-radius: 5px;
  height: 25px;
  padding: 0 10px;
  color: ${props => props.colorText || colors.green_dark};
  margin: 5px 0;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
`