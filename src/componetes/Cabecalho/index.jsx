import styled from "styled-components"
import CampoNavegacao from "../CampoNavegacao"
import { Link } from "react-router-dom"

const HeaderEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 125px;
  padding: 0 51.15px;
  background-color: #262626;
  border-bottom: 4px solid #2271D1;
  box-shadow: 0px 5px 29px 0px #2271D1B2;

  @media(max-width: 800px){
    height: 80px;
    justify-content: center;
    position: fixed; 
    bottom: 0;
    left: 50%; 
    transform: translateX(-50%);
    width: 100%;
    background-color: #030910;

    img{
      display: none;
    }
  }
`

const Cabecalho = () => {
  return(
    <HeaderEstilizado>
      <Link to="/">
        <img src='/img/logo.png' alt='Logo'/>
      </Link>
      
      <CampoNavegacao />
    </HeaderEstilizado>
  )
}

export default Cabecalho