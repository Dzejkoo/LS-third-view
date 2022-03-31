import React from 'react';
import styled from 'styled-components';
import { ArrowBack } from '../../atoms/arrowBack/ArrowBack';
import { Title } from '../../atoms/title/Title';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TopBar = () => {
  return (
    <Wrapper>
      <ArrowBack />
      <Title />
    </Wrapper>
  );
};
