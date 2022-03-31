import styled from 'styled-components';

export const TrainersWrapper = styled.div`
  border: 1px solid rgba(176, 190, 197, 0.8);
  width: 100%;
  height: 56px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  margin: 40px 0;
  span:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.coolGray};
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    top: -7px;
    padding: 0 5px;
    left: 20px;
  }
`;

export const Trainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 144px;
  height: 32px;
  margin-left: 15px;
  border-radius: 33px;
  background-color: ${({ theme }) => theme.colors.coolGrayLight};
  font-size: ${({ theme }) => theme.fontSize.m};
  span {
    color: ${({ theme }) => theme.colors.grayDark};
  }
`;
