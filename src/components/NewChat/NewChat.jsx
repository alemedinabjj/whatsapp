import react, { useState, useEffect } from 'react'
import * as S from './styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Api from '../../Api'

export default ({ user, chatlist, show, setShow }) => {
  const [list, setList] = useState([])

  const handleClose = () => {
    setShow(false)
  }

  const addNewChat = async user2 => {
    await Api.addNewChat(user, user2)
    handleClose()
  }
  

  useEffect(() => {
    const getList = async () => {
      if (user !== null) {
        let results = await Api.getContactList(user.id)
        setList(results)
      }
    }
    getList()
  }, [user])

  return (
    <S.NewChat style={{ left: show ? 0 : -415 }} >
      <S.NewChatHeader>
        <S.BackButton onClick={handleClose}>
          <ArrowBackIcon style={{ color: '#FFF' }} />
        </S.BackButton>
        <S.NewChatHeaderTitle>Nova Conversa</S.NewChatHeaderTitle>
      </S.NewChatHeader>
      <S.NewChatList>
        {list.map((item, key) => {
          return (
            <S.NewChatListItem key={key} onClick={() => addNewChat(item)}>
              <img className="avatar" src={item.avatar} alt={item.name} />

              <div className="name">{item.name}</div>
            </S.NewChatListItem>
          )
        })}
      </S.NewChatList>
    </S.NewChat>
  )
}
