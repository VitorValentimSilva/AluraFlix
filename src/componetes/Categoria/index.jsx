import styled from "styled-components"
import PropTypes from 'prop-types';
import Card from "../Card";

const SectionEstilizado = styled.section`
  margin: 0 4%;
  padding-bottom: 4%;

  h2{
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
    background: #6BD1FF;
    border-radius: 15px;
  }
`

const DivEstilizada = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10.6%; 
  padding: 16px; 

  & > * {
    flex: 0 0 auto; 
  }
  
`

const Categoria = ({ titulo }) => {
  return(
    <SectionEstilizado>
      <h2>{titulo}</h2>

      <DivEstilizada>
        <Card 
          linkImg="https://i.ytimg.com/vi/oGy1qDSfjXo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDHRLP1ItrYgXux4-ZeTKKGrmxgpQ"
        />
      </DivEstilizada>
    </SectionEstilizado>
  )
}

Categoria.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Categoria