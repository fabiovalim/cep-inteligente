import ProfileImage from '../../assets/profile.jpeg';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TypeAnimation } from 'react-type-animation';
import { Coin, GeoAltFill, GlobeAmericas, LightningChargeFill, Search, UiChecksGrid } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main>
      <Header />

    <section id="inicio" className="text-center full-height">
      <div className="container">
        <TypeAnimation // Animação de escrita do título "CEP inteligente"
          sequence={['CEP inteligente', 6000, '', 2000,]}
          wrapper="h1" // Renderiza o texto dentro de uma tag <h1>
          speed={20}
          className="display-3 fw-bold mb-3"
          repeat={Infinity}
        />
        <p className="lead mb-5">Ferramenta rápida para consulta e validação de CEPs no Brasil</p>
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
          <Link to="/buscar-cep" className="btn btn-primary btn-lg btn-custom">Consulta Individual</Link>
          <Link to="/#" className="btn btn-primary btn-lg btn-custom">Buscar por Endereço</Link>
          <Link to="/#" className="btn btn-primary btn-lg btn-custom">Validação em Lote</Link>
        </div>
      </div>
    </section>

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

    <section id="sobre-mim" className="full-height">
      <div className="container">
        <div className="row align-items-center gx-5">
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img src={ProfileImage} className="img-fluid rounded-circle" alt="Sua foto" style={{ maxWidth: '350px' }} />
          </div>
          <div className="col-lg-7">
            <h2 className="display-4 fw-bold mb-4">Olá, eu sou o Fábio</h2>
            <p className="lead text-muted">
              Desenvolvedor e estudante do 4º período de Ciência da Computação na Universidade Federal de Lavras.
              Este site foi desenvolvido por mim com o objetivo de facilitar a consulta de CEPs.
              Muitas vezes me vi precisando descobrir o meu próprio CEP, então decidi criar uma ferramenta simples e prática para isso.
              Espero que você tenha uma ótima experiência!
            </p>
          </div>
        </div>
      </div>
    </section>

      <Footer /> 
    </main>
  );
};