import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  margin-top: 50px;
  button {
    cursor: pointer;
    height: 40px;
    width: 138px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.turkis};
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 20px;
  }
  button:nth-child(2) {
    cursor: pointer;
    height: 40px;
    width: 138px;
    text-transform: uppercase;
    background: non;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 40px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.turkis};
    border: none;
  }
`;
