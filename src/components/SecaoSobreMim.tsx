import ProfileImage from '../assets/profile.jpeg';

export const SecaoSobreMim = () => { //========= SEÇÃO 3 - quem sou eu? =========
  return (
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
  );
}