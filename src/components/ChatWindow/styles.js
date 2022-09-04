import styled from '@emotion/styled'

export const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
    flex: 1;
    z-index: 5;
    transition: all 0.1s ease-in-out;
  }

`

export const ChatWindowHeader = styled.div`
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .buttonMobileBack {
      display: none;
    }

  @media (max-width: 900px) {
    .buttonMobileBack {
      display: flex;
      height: 100%;
      width: 60px;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      span {
        font-size: 50px;
        color: #ccc;
        font-weight: bold;

      }
    }

  }
`

export const ChatWindowBody = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: #e5ddd5;
  padding: 20px 30px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`

export const ChatWindowFooter = styled.div`
  height: 62px;
  display: flex;
  align-items: center;
`

export const ChatWindowHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: 15px;
    margin-right: 15px;

  }
  @media (max-width: 900px) {
      img {
        margin-left: 0;
      }
    }
`

export const ChatWindowHeaderInfoName = styled.div`
  font-size: 17px;
  color: #000;
`

export const ChatWindowHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  
`

export const ChatWindowPre = styled.div`
  display: flex;
  margin: 0 15px;
`

export const ChatWindowInputArea = styled.div`
  flex: 1;

  input {
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    font-size: 16px;
    background: transparent;
    border-radius: 20px;
    color: #4a4a4a;
    padding-left: 15px;
  }
`

export const ChatWindowPos = styled.div`
  display: flex;
  margin: 0 15px;
`
export const ChatWindowBodyMessage = styled.div``;

export const ChatWindowEmojiArea = styled.div`
  height: 200px;
  overflow-y: hidden;

  transition: all ease 0.3s;

`;

