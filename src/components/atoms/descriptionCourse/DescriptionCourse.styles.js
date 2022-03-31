import styled from 'styled-components';

export const DescriptionCourseWrapper = styled.div`
  width: 100%;
  height: 168px;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  span {
    margin-left: auto;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-top: 5px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.coolGray};
  }
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: 1px solid rgba(176, 190, 197, 0.8);
    border-radius: 8px;
    padding: 20px;
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.l};
      color: ${({ theme }) => theme.colors.coolGray};
      opacity: 0.4;
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
    }
  }
`;
