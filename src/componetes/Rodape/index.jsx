import styled from "styled-components"

const FooterEstilizado = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 125px;
  border: 4px 0px 0px 0px;
  border-top: 4px solid #2271D1;
  box-shadow: 0px 5px 29px 0px #2271D1B2;
  background: #030910;
`

const Rodape = () => {
  return(
    <FooterEstilizado>
      <img src='/img/logo.png' alt='Logo' />
    </FooterEstilizado>
  )
}

export default Rodape