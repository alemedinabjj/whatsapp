import React, { useState, useEffect } from 'react';
import  * as S from './styles';

export default ({ onClick, active, data}) => {

  const [time, setTime] = useState('');

  useEffect(() => {
    if(data.lastMessageDate > 0) {
      let d = new Date(data.lastMessageDate.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();
      hours = hours < 10 ? '0'+hours : hours;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      setTime(`${hours}:${minutes}`);
    }
  }, [data])

  return (
    <S.ChatItem className={active ? 'active' : ''} onClick={onClick} >
      <img src={data.image} alt="" />
      <S.ChatItemLines>
        <S.ChatItemLine>
          <S.ChatItemName>{data.title}</S.ChatItemName>
          <S.ChatItemDate>{time}</S.ChatItemDate>
        </S.ChatItemLine>
        <S.ChatItemLine>
          <S.ChatItemPreview>
            <p>{data.lastMessage}</p>
          </S.ChatItemPreview>
        </S.ChatItemLine>
      </S.ChatItemLines>
    </S.ChatItem>
  );
}