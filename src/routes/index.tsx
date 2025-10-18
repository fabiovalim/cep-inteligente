import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import { Home } from "../pages/home/Home";
import { BuscaCepPage } from "../pages/consultaIndividual/ConsultaIndividual";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/buscar-cep" element={<BuscaCepPage />} />
      </Switch>
    </BrowserRouter>
  );
}