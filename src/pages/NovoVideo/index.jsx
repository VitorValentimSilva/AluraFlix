import styled from "styled-components"
import FormularioCard from "../../componetes/FormularioCard"
import { useEffect, useState } from "react"

const MainEstilizado = styled.main`
  padding: 0 5%;
  background-color: #191919;
`

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #F5F5F5;
  
  h1{
    font-size: 60px;
    font-weight: 900;
    line-height: 70.31px;
    margin: 4% 0 0 0;
  }

  p{
    font-size: 20px;
    font-weight: 400;
    line-height: 23.44px;
  }
`

const NovoVideo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados)
      })
  }, [])

  const handleAddVideo = async (novoVideo) => {
    try {
      const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoVideo)
      });

      if (!response.ok) {
        throw new Error('Falha ao adicionar vídeo')
      }

      const addedVideo = await response.json()
      setVideos([...videos, addedVideo])
      alert('Vídeo adicionado com sucesso!')
    } catch (error) {
      console.error('Erro ao adicionar vídeo:', error)
    }
  };

  return(
    <MainEstilizado>
      <section>
        <DivEstilizada>
          <h1>NOVO VÍDEO</h1>
          <p>Complete o formulário para criar um novo card de vídeo.</p>
        </DivEstilizada>

        <FormularioCard onAddVideo={handleAddVideo} />
      </section>
    </MainEstilizado>
  )
}

export default NovoVideo