import { Outlet } from "react-router-dom"
import Cabecalho from "../../componetes/Cabecalho"
import EstilosGlobais from "../../componetes/EstilosGlobais"
import Rodape from "../../componetes/Rodape"

const PaginaBase = () => {
  return(
    <main>
      <EstilosGlobais />
      <Cabecalho />
      <Outlet />
      <Rodape />
    </main>
  )
}

export default PaginaBase