import * as S from './styles'
import ChatIcon from '@mui/icons-material/Chat';

export default () => {
  return (
    <S.ChatIntro>
      <i><ChatIcon style={{ color: '#4adf83', fontSize: '250px' }} /></i>
      <h1>Navegue no dashboard ao lado para interagir com seus contatos</h1>
      <h2>Mande uma mensagem alegre para seus familiares, mostre que são importantes para você, ou, talvez... marque uma reunião.</h2>
    </S.ChatIntro>
  )
}