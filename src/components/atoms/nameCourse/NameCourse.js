import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(176, 190, 197, 0.8);
  border-radius: 8px;
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.coolGray};
    opacity: 0.4;
  }
`;

export const NameCourse = () => {
  return (
    <>
      <Input placeholder="Nazwa kursu" />
    </>
  );
};
