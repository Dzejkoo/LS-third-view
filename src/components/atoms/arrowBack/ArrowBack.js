import styled from 'styled-components';
import React from 'react';
import { ReactComponent as ArrowBackIcon } from '../../../assets/image/icon/arrow.svg';

const ArrowBackWrapper = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.grayDark};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

export const ArrowBack = () => {
  return (
    <ArrowBackWrapper>
      <ArrowBackIcon />
    </ArrowBackWrapper>
  );
};
