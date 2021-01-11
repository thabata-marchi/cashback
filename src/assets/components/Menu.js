import styled from 'styled-components';
import { colors, linearColor } from '../../theme';

export const Menu = styled.div`
  background: ${linearColor.green};
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: -40px 0 20px -20px;
  padding: 0 10px 0 30px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

`

export const Plinks = styled.p`
  color: ${colors.green_dark};
  font-size: 0.8em;
  margin: 10px 0 10px 3px;
  text-align: right;
  font-weight: bold;
  cursor: pointer;
`