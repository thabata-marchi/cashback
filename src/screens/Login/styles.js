import styled from 'styled-components';
import { colors, linearColor } from '../../theme';

export const Content = styled.div`
  background: ${linearColor.orange};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  min-height: 100vh;

  @media (max-width: 610px) {
    justify-content: center;
  } 
`