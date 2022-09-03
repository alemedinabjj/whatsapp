import * as S from './styles'
import react from 'react'
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
    <S.Login>
      <S.Button onClick={handleFacebookLogin}>Logar com o Facebook</S.Button>
      <S.Button onClick={handleGithubLogin}>Logar com o Github</S.Button>
      <S.Button onClick={handleGoogleLogin}>Logar com o Google</S.Button>
    </S.Login>
  )
}
