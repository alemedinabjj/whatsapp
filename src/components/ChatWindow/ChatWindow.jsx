import React from 'react'
import * as S from './styles'
import MessageItem from '../MessageItem/MessageItem'
import SearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import SendIcon from '@mui/icons-material/Send'
import CloseIcon from '@mui/icons-material/Close'
import MicIcon from '@mui/icons-material/Mic'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState, useEffect, useRef } from 'react'
import { BoyOutlined } from '@mui/icons-material'
import Api from '../../Api'

export default ({ user, data }) => {
  let recognition = null
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition()
  }

  const body = useRef()

  const [text, setText] = useState('')
  const [emojiOpen, setEmojiOpen] = useState(false)
  const [listening, setListening] = useState(false)
  const [list, setList] = useState([]) // Lista de mensagens
  const [users, setUsers] = useState([]) // Lista de usuários

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight
    }
  }, [list])

  useEffect(() => {
    setList([])

    let unsub = Api.onChatContent(data.chatId, setList, setUsers)
    return unsub
  }, [data.chatId])

  const handleEmojiClick = e => {
    setText(text + e.native)
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(!emojiOpen)
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false)
  }

  const handleSendClick = () => {
    if (text !== '') {
      Api.sendMessage(data, user.id, 'text', text, users)
      setText('')
      setEmojiOpen(false)
    }
  }

  const handleInputKeyUp = e => {
    if (e.keyCode === 13) {
      handleSendClick()
    }
  }

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true)
      }
      recognition.onend = () => {
        setListening(false)
      }
      recognition.onresult = e => {
        setText(e.results[0][0].transcript)
      }
      recognition.start()
    }
  }

  return (
    <S.ChatWindow>
      <S.ChatWindowHeader>
        <S.ChatWindowHeaderInfo>
          <img src={data.image} alt="" />
          <S.ChatWindowHeaderInfoName>{data.title}</S.ChatWindowHeaderInfoName>
        </S.ChatWindowHeaderInfo>
        <S.ChatWindowHeaderButtons>
          <S.Button>
            <AttachFileIcon style={{ color: '#919191' }} />
          </S.Button>
          <S.Button>
            <MoreVertIcon style={{ color: '#919191' }} />
          </S.Button>
          <S.Button>
            <SearchIcon style={{ color: '#919191' }} />
          </S.Button>
        </S.ChatWindowHeaderButtons>
      </S.ChatWindowHeader>
      <S.ChatWindowBody ref={body}>
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={user} />
        ))}
      </S.ChatWindowBody>
      <S.ChatWindowEmojiArea style={{ height: emojiOpen ? '400px' : '0' }}>
        <Picker
          data={data}
          onEmojiSelect={handleEmojiClick}
          title="Pick your emoji…"
          skin={6}
          native={true}
          theme="light"
          skinTonePositions="none"
          searchPosition="none"
          size="2em"
          perLine={37}
        />
      </S.ChatWindowEmojiArea>
      <S.ChatWindowFooter>
        <S.ChatWindowPre>
          <S.Button style={{ width: emojiOpen ? 40 : 0 }}>
            <CloseIcon
              style={{ color: '#919191' }}
              onClick={handleCloseEmoji}
            />
          </S.Button>
          <S.Button>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? '#009688' : '#919191' }}
              onClick={handleOpenEmoji}
            />
          </S.Button>
        </S.ChatWindowPre>

        <S.ChatWindowInputArea>
          <input
            type="text"
            placeholder="Type a message"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyUp={handleInputKeyUp}
          />
        </S.ChatWindowInputArea>

        <S.ChatWindowPos>
          {text === '' ? (
            <S.Button onClick={handleMicClick}>
              <MicIcon style={{ color: listening ? '#009688' : '#919191' }} />
            </S.Button>
          ) : (
            <S.Button onClick={handleSendClick}>
              <SendIcon style={{ color: '#919191' }} />
            </S.Button>
          )}
        </S.ChatWindowPos>
      </S.ChatWindowFooter>
    </S.ChatWindow>
  )
}
