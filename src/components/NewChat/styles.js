import styled from '@emotion/styled'

export const NewChat = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  transition: all 0.3s ease-in-out;

  &.newChat--hide {
    left: -415px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const NewChatHeader = styled.div`
  display: flex;
  background: #00bfa5;
  align-items: center;
  padding: 60px 15px 15px 15px;
`

export const NewChatHeaderTitle = styled.h1`
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  flex: 1;
  font-weight: bold;
  color: #fff;
  margin-left: 20px;
`

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const NewChatList = styled.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`


export const NewChatListItem = styled.div`

  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background: #f6f6f6;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .name {
    font-size: 16px;
    color: #000;
  }

`;
