import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const SecaoInicio = () => { //========= SEÇÃO 1 - Início =========
  return (
    <section id="inicio" className="text-center full-height">
      <div className="container">
        <TypeAnimation
          sequence={[
            'CEP inteligente',
            6000,
            '',
            2000,
          ]}
          wrapper="h1" // Renderiza o texto dentro de uma tag <h1>
          speed={20} // Velocidade da digitação
          className="display-3 fw-bold mb-3"
          repeat={Infinity}
        />
        <p className="lead mb-5">Ferramenta rápida para consulta e validação de CEPs no Brasil</p>
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
          <Link to="/#" className="btn btn-primary btn-lg btn-custom">Consulta Individual</Link>
          <Link to="/#" className="btn btn-primary btn-lg btn-custom">Buscar por Endereço</Link>
          <Link to="/#" className="btn btn-primary btn-lg btn-custom">Validação em Lote</Link>
        </div>
      </div>
    </section>
  );
}