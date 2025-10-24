import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import { Home } from "../pages/home/Home";
import { BuscaCepPage } from "../pages/consultaIndividual/ConsultaIndividual";
import { ConsultaEndereco } from "../pages/consultaEndereco/ConsultaEndereco";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/buscar-cep" element={<BuscaCepPage />} />
        <Route path="/consulta-endereco" element={<ConsultaEndereco />} />
      </Switch>
    </BrowserRouter>
  );
}