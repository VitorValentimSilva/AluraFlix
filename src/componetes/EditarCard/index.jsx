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
  width: 60%;
  max-height: 90%;
  padding: 2% 6.5%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: relative;
  overflow-y: auto;

  &::-webkit-scrollbar {
    height: 10px;
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
    border: 3px solid #2271D1;
    border-radius: 10px;
  }

  input.error, select.error, textarea.error {
    border: 3px solid red;
  }

  .error-message {
    color: red;
    margin-bottom: 10px;
    font-size: 14px;
  }

  textarea {
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

  @media(max-width: 800px){
    width: 80%;
    max-height: 93%;
    
    h2 {
      font-size: 40px;
      text-align: center;
    }
  }
`;

const EditarCard = ({ cardData, onClose, onEdit }) => {
  const [formData, setFormData] = useState(cardData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() === '') {
      setErrors({ ...errors, [name]: 'Este campo é obrigatório' });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors({ ...errors, [name]: 'Este campo é obrigatório' });
    }
  };

  const handleReset = () => {
    setFormData({});
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        newErrors[key] = 'Este campo é obrigatório';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/videos/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar o vídeo');
      }

      onEdit(formData);
      alert('Vídeo atualizado com sucesso!');
      onClose();
    } catch (error) {
      console.error('Erro ao atualizar o vídeo:', error);
    }
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
            value={formData.titulo || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.titulo ? 'error' : ''}
            placeholder={errors.titulo || 'Insira o título'}
            required
          />

          <label htmlFor="icategoria">Categoria</label>
          <select
            id="icategoria"
            name="categoria"
            value={formData.categoria || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.categoria ? 'error' : ''}
          >
            <option value="">Selecione uma categoria</option>
            <option value="FRONT END">Front End</option>
            <option value="BACK END">Back End</option>
            <option value="MOBILE">Mobile</option>
          </select>

          <label htmlFor="iimg">Imagem</label>
          <input
            type="url"
            name="img"
            id="iimg"
            value={formData.img || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.img ? 'error' : ''}
            placeholder={errors.img || 'Insira a URL da imagem'}
            required
          />

          <label htmlFor="ivideo">Video</label>
          <input
            type="url"
            name="video"
            id="ivideo"
            value={formData.video || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.video ? 'error' : ''}
            placeholder={errors.video || 'Insira a URL do vídeo'}
            required
          />

          <label htmlFor="idescricao">Descricao</label>
          <textarea
            name="descricao"
            id="idescricao"
            value={formData.descricao || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.descricao ? 'error' : ''}
            placeholder={errors.descricao || 'Insira a descrição'}
            required
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
  cardData: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditarCard;