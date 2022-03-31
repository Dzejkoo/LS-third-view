import styled from 'styled-components';

export const PathWrapper = styled.div`
  max-width: 1064px;
  color: ${({ theme }) => theme.colors.grayDark};
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 50px 0px;
  font-size: ${({ theme }) => theme.fontSize.m};
  svg {
    margin: 0 20px;
  }
`;
