import { Outlet } from "react-router-dom"
import Cabecalho from "../../componetes/Cabecalho"
import EstilosGlobais from "../../componetes/EstilosGlobais"

const PaginaBase = () => {
  return(
    <main>
      <EstilosGlobais />
      <Cabecalho />
      <Outlet />
    </main>
  )
}

export default PaginaBase