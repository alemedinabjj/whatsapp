import styled from '@emotion/styled'

export const ChatItem = styled.div`

  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 70px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-left: 15px;
  }

  &:hover {
    background: #f5f5f5;
  }
 
  &.active {
    background: #f5f5f5;
  }

`;

export const ChatItemLines = styled.div`

  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  padding-right: 15px;
  margin-left: 15px;
  

  flex-wrap: wrap;
  min-width: 0;


`;

export const ChatItemLine = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;



`;

export const ChatItemName = styled.div`

  font-size: 17px;
  color: #000;

`;

export const ChatItemDate = styled.div`

  font-size: 12px;
  color: #999;

`;

export const ChatItemPreview = styled.div`

  font-size: 14px;
  color: #999;
  display: flex;
  width: 100%;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
  }

`;
