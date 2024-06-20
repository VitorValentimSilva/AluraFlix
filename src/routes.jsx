import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import PaginaBase from "./pages/PaginaBase";
import NovoVideo from "./pages/NovoVideo";

const AppRoutes = () => {
  return(
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="/novoVideo" element={<NovoVideo />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes