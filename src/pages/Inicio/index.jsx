import styled from "styled-components"
import Banner from "../../componetes/Banner"
import Categoria from "../../componetes/Categoria"

const MainEstilizado = styled.main`
  background-color:  #000000E5;
  
`

const Inicio = () => {
  return(
    <MainEstilizado>
      <Banner
        backgroundImage='https://i.ytimg.com/vi/c8mVlakBESE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDtR4r546n5gdD4K0RtTHVZrpYoGQ'
        textoCategoria="FRONT END"
        tituloVideo="SEO com React"
        textoDescricao="Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma Pokedex! "
        linkVideo="https://www.youtube.com/embed/c8mVlakBESE?si=vagcnCsCqAk3m4dO"
      />

      <Categoria 
        titulo="FRONT END"
      />

      <Categoria 
        titulo="BACK END"
      />

      <Categoria 
        titulo="MOBILE"
      />
    </MainEstilizado>
  )
}

export default Inicio