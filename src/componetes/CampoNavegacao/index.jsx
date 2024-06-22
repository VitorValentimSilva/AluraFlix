import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelectedButton("Home");
        break;
      case "/novoVideo":
        setSelectedButton("Novo Vídeo");
        break;
      default:
        setSelectedButton(""); 
        break;
    }
  }, [location.pathname]);

  return (
    <DivNavegacaoEstilizado>
      <Link to='/'>
        <button
          className={selectedButton === "Home" ? "selected" : ""}
        >
          HOME
        </button>
      </Link>
      
      <Link to='/novoVideo'>
        <button
          className={selectedButton === "Novo Vídeo" ? "selected" : ""}
        >
          NOVO VÍDEO
        </button>
      </Link>
      
    </DivNavegacaoEstilizado>
  );
}

export default CampoNavegacao;
