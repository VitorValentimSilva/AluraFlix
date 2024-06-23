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

  @media(max-width: 800px){
    padding-top: 10%;
  }
`;

const H2Estilizada = styled.h2`
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

  @media(max-width: 800px){
    margin-top: 0;
    margin-bottom: 10%;
    width: 75%;
  }
`;

const DivEstilizada = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10.6%;
  padding-bottom: 18px;

  & > * {
    flex: 0 0 auto;
  }

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #2271D12B;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    
    border: 10px solid #2271D1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
    border: 10px solid #2271D1;
  }
`;

const Categoria = ({ titulo }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  const cor = CorCategoria(titulo);

  const deletarVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const editarVideo = (videoEditado) => {
    setVideos((prevVideos) => {
      const outrosVideos = prevVideos.filter((video) => video.id !== videoEditado.id);
      return [...outrosVideos, videoEditado];
    });
  };

  const videosFiltrados = videos.filter((video) => video.categoria === titulo);
  const mostrarH2 = videosFiltrados.length > 0;

  return (
    <SectionEstilizado cor={cor}>
      {mostrarH2 && <H2Estilizada cor={cor}>{titulo}</H2Estilizada>}

      <DivEstilizada>
        {videosFiltrados.map((video) => (
          <Card
            key={video.id}
            linkImg={video.img}
            corCategoria={cor}
            id={video.id}
            onDelete={deletarVideo}
            onEdit={editarVideo}
            linkVideo={video.video}
            categoria={video.categoria}
            titulo={video.titulo}
            descricao={video.descricao}
          />
        ))}
      </DivEstilizada>
    </SectionEstilizado>
  );
};

Categoria.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Categoria;