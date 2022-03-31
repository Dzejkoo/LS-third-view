import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.grayDark};
  padding-left: 20px;
`;

export const Title = () => {
  return (
    <>
      <TitleWrapper>Dodaj nowy kurs</TitleWrapper>
    </>
  );
};
