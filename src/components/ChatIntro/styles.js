import styled from '@emotion/styled';


export const ChatIntro = styled.div`

  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  border-bottom: 6px solid #4adf83;

  h1 {
    font-size: 32px;
    color: #525252;
    font-weight: normal;
    margin-top: 30px;
  }

  h2 {
    font-size: 14px;
    color: #777;
    font-weight: normal;
    margin-top: 20px;
    line-height: 20px;
    text-align: center;
  }


  @media (max-width: 900px) {
    display: none;
  }
`;