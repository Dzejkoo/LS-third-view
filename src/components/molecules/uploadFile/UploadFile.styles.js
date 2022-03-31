import styled from 'styled-components';

export const UploadFileWrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;
export const DragFile = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.coolGrayLight};
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%233333334A' stroke-width='2' stroke-dasharray='9' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 8px;
  p {
    width: 70%;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.grayDark};
    font-weight: 600;
    margin: 20px 0 0 0;
    text-transform: uppercase;
    text-align: center;
    span {
      color: ${({ theme }) => theme.colors.turkis};
      font-weight: 600;
    }
  }
`;

export const UploadInfo = styled.div`
  width: 317px;
  height: 129px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
  margin-left: 24px;
  background-color: ${({ theme }) => theme.colors.coolGrayLight};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.portgae};
  p {
    width: 70%;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.grayDark};
  }
`;
