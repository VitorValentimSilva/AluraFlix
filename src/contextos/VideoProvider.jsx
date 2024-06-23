import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VideoContext from './VideoContext';

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  const deletarVideo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Falha ao excluir vídeo');
      }

      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
      alert('Vídeo excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir vídeo:', error);
    }
  };

  const editarVideo = async (videoEditado) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${videoEditado.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoEditado),
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar o vídeo');
      }

      setVideos((prevVideos) => {
        return prevVideos.map((video) => {
          if (video.id === videoEditado.id) {
            return videoEditado;
          }
          return video;
        });
      });

      alert('Vídeo atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o vídeo:', error);
    }
  };

  const adicionarVideo = async (novoVideo) => {
    try {
      const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoVideo),
      });

      if (!response.ok) {
        throw new Error('Falha ao adicionar vídeo');
      }

      const addedVideo = await response.json();
      setVideos([...videos, addedVideo]);
      alert('Vídeo adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar vídeo:', error);
    }
  };

  return (
    <VideoContext.Provider value={{ videos, deletarVideo, editarVideo, adicionarVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

VideoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VideoProvider;