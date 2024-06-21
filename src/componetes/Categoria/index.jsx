import styled from "styled-components";
import PropTypes from 'prop-types';
import Card from "../Card";
import { useEffect, useState } from "react";

const CorCategoria = (titulo) => {
  switch (titulo) {
    case 'FRONT END':
      return '#6BD1FF';
    case 'BACK END':
      return '#00C86F';
    case 'MOBILE':
      return '#FFBA05';
    default:
      return '#ff6b6b';
  }
};

const SectionEstilizado = styled.section`
  margin: 0 4%;
  padding-bottom: 4%;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23%;
    height: 70px;
    font-size: 32px;
    font-weight: 800;
    line-height: 37.5px;
    text-align: center;
    color: #F5F5F5;
    background: ${(props) => props.cor};
    border-radius: 15px;
  }
`;

const DivEstilizada = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10.6%; 
  padding: 16px; 

  & > * {
    flex: 0 0 auto; 
  }
`;

const Categoria = ({ titulo }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados);
      });
  }, []);

  const cor = CorCategoria(titulo);

  return (
    <SectionEstilizado cor={cor}>
      <h2>{titulo}</h2>
      
      <DivEstilizada>

        {videos.map((video) => {
          if (video.categoria === titulo) {
            return <Card key={video.id} linkImg={video.img} corCategoria={cor} />;
          }
        })}

      </DivEstilizada>
    </SectionEstilizado>
  );
};

Categoria.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Categoria;