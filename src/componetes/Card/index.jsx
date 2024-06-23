import styled from "styled-components";
import PropTypes from 'prop-types';
import EditarCard from "../EditarCard";
import { useState } from "react";
import useVideoContext from "../../contextos/useVideoContext";

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid ${(props) => props.cor};
  border-radius: 5px;
  width: 432px;
  height: 319.92px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 59px;
    background: #000000E5;
    box-shadow: 0px 0px 17px 8px ${(props) => props.cor} inset;
  }
`;

const ImagemEstilizada = styled.img`
  width: 100%;
  height: 260.85px;
  border-bottom: 3px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-color: ${(props) => props.cor};
  border-style: solid;
`;

const BotaoEstilizado = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 800;
  line-height: 18.75px;
  text-align: left;
  color: #FFF;
  cursor: pointer;

  img {
    width: 25.47px;
    height: 28px;
  }
`;

const Card = ({ linkImg, corCategoria, id, linkVideo, titulo, categoria, descricao }) => {
  const [onEditar, setOnEditar] = useState(false);
  const { deletarVideo } = useVideoContext(); 

  const handleCloseEditarCard = () => {
    setOnEditar(false);
  };

  const handleDelete = async () => {
    await deletarVideo(id);
  };

  const cardData = { id, titulo, categoria, descricao, img: linkImg, video: linkVideo };

  return (
    <DivEstilizada cor={corCategoria}>
      <a href={linkVideo} target="_blank" rel="noopener noreferrer">
        <ImagemEstilizada src={linkImg} alt="Imagem do vídeo" cor={corCategoria} />
      </a>

      <div>
        <BotaoEstilizado onClick={handleDelete}>
          <img src="/icon/deletar.png" alt="icone de deletar" />
          DELETAR
        </BotaoEstilizado>
        <BotaoEstilizado onClick={() => setOnEditar(true)}>
          <img src="/icon/editar.png" alt="icone de editar" />
          EDITAR
        </BotaoEstilizado>
      </div>

      {onEditar && (
        <EditarCard 
          cardData={cardData} 
          onClose={handleCloseEditarCard} 
        />
      )}
    </DivEstilizada>
  );
};

Card.propTypes = {
  linkImg: PropTypes.string.isRequired,
  corCategoria: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  linkVideo: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired
};

export default Card;