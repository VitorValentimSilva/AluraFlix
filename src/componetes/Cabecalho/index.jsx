import styled from "styled-components"
import CampoNavegacao from "../CampoNavegacao"

const HeaderEstilizado = styled.header`
  background-color: #262626;
  border-bottom: 4px solid #2271D1;
  box-shadow: 0px 5px 29px 0px #2271D1B2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 42.5px;
`

const Cabecalho = () => {
  return(
    <HeaderEstilizado>
      <img src='/img/logo.png' alt='Logo'/>

      <CampoNavegacao />
    </HeaderEstilizado>
  )
}

export default Cabecalho