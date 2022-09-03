import React, { useState, useEffect } from 'react'
import * as S from './styles/App'
import { Global, css } from '@emotion/react'
import { GlobalStyles } from './styles/App'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import ChatListItem from './components/ChatListItem/ChatListItem'
import ChatIntro from './components/ChatIntro/ChatIntro'
import ChatWindow from './components/ChatWindow/ChatWindow'
import NewChat from './components/NewChat/NewChat'
import Login from './components/Login/Login'
import Api from './Api'

import { useAuthState } from 'react-firebase-hooks/auth'


export default () => {
  const [chatlist, setChatList] = useState([]) // Lista de contatos
  const [activeChat, setActiveChat] = useState({}) // Contato ativo
  

  const [user, setUser] = useState(null)

  const [mobileOpen, setMobileOpen] = useState(false)

  

  const [showNewChat, setShowNewChat] = useState(false) // Mostrar ou não o componente NewChat

  useEffect(() => {
    if (user !== null) {
      let unsub = Api.onChatList(user.id, setChatList)
      return unsub
    }
  }, [user])

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  const handleClickChat = () => {
    setActiveChat(chatlist[key])
  }

  const handleLoginData = async u => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    await Api.addUser(newUser)
    setUser(newUser)
    console.log(newUser)
  }

  if (!user) {
    return <Login onReceive={handleLoginData} />
  }

  return (
    <>
      <Global styles={GlobalStyles} />
      <S.AppWindow>
        <S.Sidebar display={mobileOpen ? 'none' : 'flex'} >
          <NewChat
            chatlist={chatlist}
            user={user}
            show={showNewChat}
            setShow={setShowNewChat}
          />
          <S.Header>
            <img src={user.avatar} alt="" />
            <p>{user.name}</p>
            <S.ButtonGroup>
              <S.Button>
                <DonutLargeIcon style={{ color: '#919191' }} />
              </S.Button>
              <S.Button>
                <ChatIcon
                  onClick={handleNewChat}
                  style={{ color: '#919191' }}
                />
              </S.Button>
              <S.Button>
                <MoreVertIcon style={{ color: '#919191' }} />
              </S.Button>
            </S.ButtonGroup>
          </S.Header>
          <S.Search>
            <S.SearchInput>
              <SearchIcon fontSize="small" style={{ color: '#919191' }} />
              <input type="search" placeholder="Search or start new chat" />
            </S.SearchInput>
          </S.Search>
          <S.ChatList>
            {chatlist.map((item, key) => (
              <ChatListItem
                key={key}
                data={item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() => setActiveChat(chatlist[key])}
                onMobileClick={() => setMobileOpen(true)}
              />
            ))}
          </S.ChatList>
        </S.Sidebar>

        <S.ContentArea>
          {activeChat.chatId !== undefined && (
            <ChatWindow user={user} data={activeChat} setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
          )}

          {activeChat.chatId === undefined && <ChatIntro />}
        </S.ContentArea>
      </S.AppWindow>
    </>
  )
}
