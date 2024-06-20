import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivNavegacaoEstilizado = styled.div`
  display: flex;
  gap: 25px;

  button {
    width: 180.13px;
    height: 54px;
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid #F5F5F5;
    border-radius: 15px;
    transition: all 0.3s ease;

    &.selected {
      background: #000000E5;
      border: 2px solid #2271D1;
      box-shadow: 0px 0px 12px 4px #2271D1 inset;
    }
  }
`;

const CampoNavegacao = () => {
  const [selectedButton, setSelectedButton] = useState("Home")

  return (
    <DivNavegacaoEstilizado>
      <Link to='/'>
        <button
          className={selectedButton === "Home" ? "selected" : ""}
          onClick={() => setSelectedButton("Home")}
        >
          HOME
        </button>
      </Link>
      
      <Link to='/novoVideo'>
        <button
          className={selectedButton === "Novo Vídeo" ? "selected" : ""}
          onClick={() => setSelectedButton("Novo Vídeo")}
        >
          NOVO VÍDEO
        </button>
      </Link>
      
    </DivNavegacaoEstilizado>
  );
}

export default CampoNavegacao;
