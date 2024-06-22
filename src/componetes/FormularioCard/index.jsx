import styled from "styled-components";

const DivEstilizada = styled.div`
  padding-bottom: 6%;

  h3 {
    margin: 0;
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    padding: 2% 0;
    border-top: 4px solid #262626;
    border-bottom: 4px solid #262626;
  }
`;

const FormEstilizado = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 4%;

  label {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    margin-bottom: 8px;
  }

  .input-group {
    display: flex;
    gap: 35px;
  }

  .input-group > div {
    flex: 1;
  }

  input,
  select,
  textarea {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 3px solid #262626;
    background: transparent;
    margin-bottom: 16px;
    margin-top: 1.5%;
    color: #FFF;
  }

  select{
    height: 57.5px;
  }

  option{
    background-color: #262626;
  }

  textarea {
    height: 180px;
    resize: vertical;
  }

  button{
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
    width: 12%;
    margin-right: 4%;
    margin-top: 1%;
  }

  button:hover {
    color: #2271D1;
    background: #000000E5;
    border: 2px solid #2271D1;
    box-shadow: 0px 0px 12px 4px #2271D1 inset;
  }
`;

const FormularioCard = () => {
  return (
    <DivEstilizada>
      <h3>Criar Card</h3>

      <FormEstilizado>
        <div className="input-group">
          <div>
            <label htmlFor="ititulo">Titulo</label>
            <input
              type="text"
              name="titulo"
              id="ititulo"
              required
              placeholder="Insira o título"
            />
          </div>

          <div>
            <label htmlFor="icategoria">Categoria</label>
            <select
              id="icategoria"
              name="categoria"
              required
              placeholder="Selecione uma categoria"
            >
              <option value="FRONT END">Front End</option>
              <option value="BACK END">Back End</option>
              <option value="MOBILE">Mobile</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <div>
            <label htmlFor="iimagem">Imagem</label>
            <input
              type="url"
              name="imagem"
              id="iimagem"
              required
              placeholder="Digite o link da imagem"
            />
          </div>

          <div>
            <label htmlFor="ivideo">Video</label>
            <input
              type="url"
              name="video"
              id="ivideo"
              required
              placeholder="Digite o link do video"
            />
          </div>
        </div>

        <label htmlFor="idescricao">Descricao</label>
        <textarea
          name="descricao"
          id="idescricao"
          placeholder="Sobre o que é esse vídeo?"
        ></textarea>

        <div>
          <button type="submit">GUARDAR</button>
          <button type="reset">LIMPAR</button>
        </div>
      </FormEstilizado>
    </DivEstilizada>
  );
};

export default FormularioCard;