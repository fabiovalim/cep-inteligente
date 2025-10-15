import { GeoAltFill, Search, UiChecksGrid } from "react-bootstrap-icons";

export const SecaoComoFunciona = () => { //========= SEÇÃO 2 - Como funciona ? =========
  return (
    <section id="como-funciona" className="py-5 full-height">
      <div className="container">
        {/* Título da Seção */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Como Funciona?</h2>
          <p className="lead text-muted">Escolha a ferramenta ideal para sua necessidade.</p>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* CARD 1: Consulta Individual */}
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card feature-card text-center p-4">
              <div className="card-body">
                <div className="feature-icon mb-4">
                  <Search size={40} />
                </div>
                <h5 className="card-title fw-bold">Consulta Individual</h5>
                <p className="card-text text-muted">
                  A ferramenta mais rápida para o dia a dia. Digite um único CEP e obtenha o endereço completo instantaneamente.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2: Buscar por Endereço */}
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card feature-card text-center p-4">
              <div className="card-body">
                <div className="feature-icon mb-4">
                  <GeoAltFill size={40} />
                </div>
                <h5 className="card-title fw-bold">Buscar por Endereço</h5>
                <p className="card-text text-muted">
                  Não sabe o CEP? Sem problemas. Insira o estado, cidade e rua para descobrir os CEPs correspondentes.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3: Validação em Lote */}
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="card feature-card text-center p-4">
              <div className="card-body">
                <div className="feature-icon mb-4">
                  <UiChecksGrid size={40} />
                </div>
                <h5 className="card-title fw-bold">Validação em Lote</h5>
                <p className="card-text text-muted">
                  Precisa verificar muitos CEPs de uma só vez? Adicione uma lista e valide todos com um único clique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}