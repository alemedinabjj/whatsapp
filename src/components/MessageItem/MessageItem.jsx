import * as S from './styles'
import { useState, useEffect } from 'react'

export default ({ data, user }) => {
  const [time, setTime] = useState('')

  useEffect(() => {
    if (data.date > 0) {
      let d = new Date(data.date.seconds * 1000)
      let hours = d.getHours()
      let minutes = d.getMinutes()
      hours = hours < 10 ? '0' + hours : hours
      minutes = minutes < 10 ? '0' + minutes : minutes
      setTime(`${hours}:${minutes}`)
    }
  }, [data])

  return (
    <S.MessageLine
      style={{
        justifyContent: user.id === data.author ? 'flex-end' : 'flex-start' // Se o id do usuário for igual ao id do autor, a mensagem fica alinhada à direita
      }}
    >
      <S.MessageItem
        style={{
          backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF' // Se o id do usuário for igual ao id do autor, a mensagem fica com um fundo verde
        }}
      >
        <S.TextMessage>{data.body}</S.TextMessage>
        <S.MessageDate>{time}</S.MessageDate>
      </S.MessageItem>
    </S.MessageLine>
  )
}
