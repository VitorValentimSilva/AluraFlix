import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Overlay = styled.section`
  background-color: #03122FC2;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const SectionEstilizada = styled.section`
  background: #03122F;
  border: 5px solid #6BD1FF;
  width: 500px;
  height: 90%;
  padding: 2% 6.5%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: relative;

  img {
    display: block;
    margin-left: auto;
    cursor: pointer;
  }

  h2 {
    color: #2271D1;
    font-size: 60px;
    font-weight: 900;
    line-height: 70.31px;
    text-align: left;
    margin: 3% 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    color: #FFF;
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }

  input, select, textarea {
    margin-bottom: 25px;
    padding: 15px;
    background-color: #03122F;
    color: #FFF;
    border: 3px solid  #2271D1;
    border-radius: 10px;
  }

  textarea{
    height: 85px;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    background: none;
    box-shadow: none;
  }

  input[type="submit"], input[type="reset"] {
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid #F5F5F5;
    border-radius: 10px;
    transition: all 0.3s ease;
    padding: 10px 20px;
    width: 48%;
  }

  input[type="submit"]:hover, input[type="reset"]:hover {
    color: #2271D1;
    background: #000000E5;
    border: 2px solid #2271D1;
    box-shadow: 0px 0px 12px 4px #2271D1 inset;
  }
`;

const EditarCard = ({ cardData, onClose }) => {
  const { id } = cardData; 

  const [tituloState, setTituloState] = useState(cardData.titulo);
  const [categoriaState, setCategoriaState] = useState(cardData.categoria);
  const [imgState, setImgState] = useState(cardData.img);
  const [videoState, setVideoState] = useState(cardData.video);
  const [descricaoState, setDescricaoState] = useState(cardData.descricao);

  const handleReset = () => {
    setTituloState(cardData.titulo);
    setCategoriaState(cardData.categoria);
    setImgState(cardData.img);
    setVideoState(cardData.video);
    setDescricaoState(cardData.descricao);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      titulo: tituloState,
      categoria: categoriaState,
      img: imgState,
      video: videoState,
      descricao: descricaoState,
    };

    fetch(`http://localhost:3000/videos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Dados atualizados com sucesso:', data);
        onClose();
      })
      .catch(error => {
        console.error('Erro ao atualizar dados:', error);
      });
  };

  return (
    <Overlay>
      <SectionEstilizada>
        <img src='/icon/fechar.png' alt='Icone de fechar' onClick={onClose} />
        <h2>EDITAR CARD:</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="ititulo">Titulo</label>
          <input
            type="text"
            name="titulo"
            id="ititulo"
            value={tituloState}
            onChange={(e) => setTituloState(e.target.value)}
            required
          />

          <label htmlFor="icategoria">Categoria</label>
          <select
            id="icategoria"
            name="categoria"
            value={categoriaState}
            onChange={(e) => setCategoriaState(e.target.value)}
          >
            <option value="FRONT END">Front End</option>
            <option value="BACK END">Back End</option>
            <option value="MOBILE">Mobile</option>
          </select>

          <label htmlFor="iimg">Imagem</label>
          <input
            type="url"
            name="img"
            id="iimg"
            value={imgState}
            onChange={(e) => setImgState(e.target.value)}
            required
          />

          <label htmlFor="ivideo">Video</label>
          <input
            type="url"
            name="video"
            id="ivideo"
            value={videoState}
            onChange={(e) => setVideoState(e.target.value)}
            required
          />

          <label htmlFor="idescricao">Descricao</label>
          <textarea
            name="descricao"
            id="idescricao"
            value={descricaoState}
            onChange={(e) => setDescricaoState(e.target.value)}
          ></textarea>

          <div className="button-container">
            <input type="submit" value="GUARDAR" />
            <input type="reset" value="LIMPAR" onClick={handleReset} />
          </div>
        </form>
      </SectionEstilizada>
    </Overlay>
  );
}

EditarCard.propTypes = {
  cardData: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default EditarCard;