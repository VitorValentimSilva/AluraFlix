import { styled } from "styled-components";
import PropTypes from 'prop-types';

const FigureEstilizada = styled.figure`
  width: 100%;
  height: 832px;
  margin: 0;
  position: relative;
  overflow: hidden;
  background-image: ${props => `url(${props.$backgroundImage})`};
  background-size: cover;
  display: flex;
  align-items: center;

  iframe{
    z-index: 1;
    position: relative;
    margin-right: 4%;
    border-radius: 4px 0px 0px 0px;
    border: 4px solid #6BD1FF;
    box-shadow: 0px 0px 17px 8px #6BD1FF inset;
    width: 50%;
    height: 60%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
`;

const DivEstilizada = styled.div`
  margin-left: 4%;
  width: 50%;

  h1{
    width: 37%;
    height: 92px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 43px;
    font-weight: 800;
    background: #6BD1FF;
    color: #FFF;
    z-index: 1;
    position: relative;
  }

  h2{
    width: 333px;
    height: 54px;
    font-size: 46px;
    font-weight: 400;
    line-height: 53.91px;
    text-align: left;
    color: #F5F5F5;
    z-index: 1;
    position: relative;
  }

  p{
    z-index: 1;
    position: relative;
    width: 86%;
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    text-align: justify;
    color: #FFF;
  }
`

const Banner = ({ backgroundImage, textoCategoria, tituloVideo, textoDescricao, linkVideo }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <Overlay />
      <DivEstilizada>
        <h1>{textoCategoria}</h1>

        <h2>{tituloVideo}</h2>

        <p>{textoDescricao}</p>
      </DivEstilizada>
      
      <iframe
        src={linkVideo}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
      ></iframe>
      
    </FigureEstilizada>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  textoCategoria: PropTypes.string.isRequired,
  tituloVideo: PropTypes.string.isRequired,
  textoDescricao: PropTypes.string.isRequired,
  linkVideo: PropTypes.string.isRequired
};

export default Banner;