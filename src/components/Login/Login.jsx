import * as S from './styles'
import { Global, css } from '@emotion/react'
import react from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import { GlobalStyles } from '../../styles/App'
import POLYGON1 from '../../assets/polygon1.svg'
import POLYGON2 from '../../assets/polygon2.svg'

import Api from '../../Api'

export default ({ onReceive }) => {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup()
    if (result) {
      onReceive(result.user)
    } else {
      alert('Erro!')
    }
  }

  const handleGoogleLogin = async () => {
    let result = await Api.googlePopup()
    if (result) {
      onReceive(result.user)
    } else {
      alert('Erro!')
    }
  }

  const handleGithubLogin = async () => {
    let result = await Api.githubPopup()
    if (result) {
      onReceive(result.user)
    } else {
      alert('Erro!')
    }
  }

  return (
    <>
      <Global styles={GlobalStyles} />
      <S.Background>
        <div className="images1">
          <img src={POLYGON1} alt="polygon1" />
        </div>
        <div className="images2">
          <img src={POLYGON2} alt="polygon1" />
        </div>
        <S.Container>
          <S.TextContainer>
            <S.Title size="58px">Chat</S.Title>
            <S.SubTitle>Entre com sua conta</S.SubTitle>
          </S.TextContainer>

          <S.Content>
            <S.Login>
              <S.Title size="20px">
                Bem-vindo ao webApp de chat <br />
                Faça login para continuar
              </S.Title>

              <S.Button
                background="#1877F2"
                hover="#3e92ff"
                onClick={handleFacebookLogin}
              >
                <FacebookIcon style={{ color: '#fff' }} />
                <span>Entrar com Facebook</span>
              </S.Button>
              <S.Button
                background="#333"
                hover="#1b1b1b"
                onClick={handleGithubLogin}
              >
                <GitHubIcon style={{ color: '#fff' }} />
                <span>Entrar com Github</span>
              </S.Button>
              <S.Button
                background="#db4a39"
                hover="#f84e3b"
                onClick={handleGoogleLogin}
              >
                <GoogleIcon background="#fff" style={{ color: '#fff' }} />
                <span>Entrar com Google</span>
              </S.Button>
            </S.Login>
          </S.Content>
        </S.Container>
      </S.Background>
    </>
  )
}
