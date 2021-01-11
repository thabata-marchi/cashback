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
export const Text = styled.h1`
  color: ${colors.gray_555};
  font-size: 16px;
  margin-bottom: 20px;
  text-align: left;
`

export const DataPurchase = styled.div`
  margin-bottom: 20px;
`

export const UlDataPurchase = styled.li`
  text-align: left;
`

export const LiDataPurchase = styled.li`
  color: ${colors.gray_555};
  font-size: 12px;
`