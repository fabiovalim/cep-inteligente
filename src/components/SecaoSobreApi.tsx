import { Coin, GlobeAmericas, LightningChargeFill } from "react-bootstrap-icons";

export const SecaoSobreApi = () => { //========= SEÇÃO 3 - falar sobre a api =========
  return (
    <section id="sobre-api" className="text-center full-height">
      <div className="container">
        <h2 className="display-4 fw-bold mb-4">Sobre a API utilizada: ViaCEP</h2>
        <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: '800px' }}>
          Toda a funcionalidade de consulta de endereços deste site é alimentada pela ViaCEP. 
          É uma API pública, gratuita e de alta performance que retorna dados de CEPs de todo o Brasil.
        </p>
        <div className="row mt-5">
          <div className="col-md-4">
            <Coin size={40} className="text-primary mb-3" />
            <h4>Gratuita</h4>
            <p className="text-muted">Não requer chaves ou autenticação para uso.</p>
          </div>
          <div className="col-md-4">
            <LightningChargeFill size={40} className="text-primary mb-3" />
            <h4>Rápida</h4>
            <p className="text-muted">Respostas em milissegundos para uma ótima UX.</p>
          </div>
          <div className="col-md-4">
            <GlobeAmericas size={40} className="text-primary mb-3" />
            <h4>Completa</h4>
            <p className="text-muted">Fornece dados detalhados para todo o território nacional.</p>
          </div>
        </div>
        <a href="https://viacep.com.br/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-custom btn-lg mt-5">
          Ver Documentação
        </a>
      </div>
    </section>
  );
}