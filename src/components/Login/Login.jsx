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

  return (
    <S.Login>
      <S.Button onClick={handleFacebookLogin}>Logar com o Facebook</S.Button>
    </S.Login>
  )
}
