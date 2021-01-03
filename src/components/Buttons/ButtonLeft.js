import React from 'react';
import {Button}  from '../../assets/';
import styled from 'styled-components';

export const ContentLeft = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ButtonLeft = (props) => {
  return (
    <ContentLeft>
      <Button {...props} />
    </ContentLeft>
  );
}

export default ButtonLeft;