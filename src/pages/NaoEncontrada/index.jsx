import styled from "styled-components"

const MainEstilizado = styled.main`
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFF;
  }


  h2{
    font-size: 75px;
    margin: 0 0 5% 0;
  }

  p{
    font-size: 23px;
    margin: 0;
  }
`

const NaoEncontrada = () => {
  return(
    <MainEstilizado>
      <div>
        <h2>Ops!</h2>
        <p>O conteúdo que você procura não foi encontrado!</p>
      </div>
    </MainEstilizado>
  )
}

export default NaoEncontrada