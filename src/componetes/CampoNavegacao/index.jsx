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

  button > img{
    display: none;
  }

  @media(max-width: 800px){
    gap: 70px;
    justify-content: center;
    align-items: center;

    a{
      text-decoration: none;
    }

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 0;
      height: 0;
      border-radius: 100%;
      gap: 10px;
      border: none;

      img{
        display: block;
        width: 30px;
        height: 30px;
      }

      span{
        display: none;
      }

      img.normal {
        display: block;
      }

      img.selected{
        display: none;
      }
      
      &.selected{
        width: 180.13px;
        height: 54px;
        border-radius: 50px;
        background: #2271D13D;
        border: 2px solid #2271D1;
        box-shadow: none;
        color: #2271D1;
        font-size: 20px;
        font-weight: 900;
        line-height: 24px;
        text-align: center;

        span{
          display: flex;
        }

        img{
          width: 30px;
          height: 30px;
        }

        img.selected{
          display: block;
        }

        img.normal{
          display: none;
        }
      }
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
          <img className="normal" src="/icon/home.png" alt="Logo Home" />
          <img className="selected" src="/icon/homeSelecionado.png" alt="Logo Home Selecionado" />
          <span>HOME</span>
        </button>
      </Link>
      
      <Link to='/novoVideo'>
        <button
          className={selectedButton === "Novo Vídeo" ? "selected" : ""}
        >
          <img className="normal" src="/icon/novoVideo.png" alt="Logo Novo Video" />
          <img className="selected" src="/icon/novoVideoSelecionado.png" alt="Logo Novo Video Selecionado" />
          <span>NOVO VÍDEO</span>
        </button>
      </Link>
      
    </DivNavegacaoEstilizado>
  );
}

export default CampoNavegacao;
