import styled from "styled-components"
import CampoNavegacao from "../CampoNavegacao"

const HeaderEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 125px;
  padding: 0 51.15px;
  background-color: #262626;
  border-bottom: 4px solid #2271D1;
  box-shadow: 0px 5px 29px 0px #2271D1B2;
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