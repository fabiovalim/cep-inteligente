import React, { useState, useEffect } from 'react';
import { HeaderPage } from "../../components/HeaderPage";
import { EnderecoService } from "../../services/EnderecoService";
import { ApiException } from "../../services/api/ApiException";
import { Endereco } from '../../types/Endereco';                 

export const ConsultaEndereco = () => {
  // --- Estados do Formulário ---
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [logradouro, setLogradouro] = useState('');

  // --- Estados de Controle ---
  const [resultados, setResultados] = useState<Endereco[] | null>(null); // um array de Enderecos (Uma rua pode ter mais de um cep)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isResultVisible, setIsResultVisible] = useState(false);

  // Lida com o envio do formulário
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!uf || !cidade || !logradouro) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setIsResultVisible(false); // Reseta a animação
    setIsLoading(true);
    setError(null);
    setResultados(null);

    const result = await EnderecoService.getByEndereco(uf, cidade, logradouro);

    setIsLoading(false);

    if (result instanceof ApiException) {
      setError(result.message);
    } else {
      // A API retorna um array. Verificamos se ele não está vazio.
      if (result.length === 0) {
        setError("Nenhum endereço encontrado para os dados informados.");
      } else {
        setResultados(result);
      }
    }
  };

  // Efeito para controlar a visibilidade e animação dos resultados
  useEffect(() => {
    if (resultados || error) {
      const timer = setTimeout(() => setIsResultVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsResultVisible(false);
    }
  }, [resultados, error]);

  return (
    <>
      <div id="consulta-endereco">
        <HeaderPage />
        <div className="container mt-4">
          <div className="row justify-content-center ms-auto">
            <div className="col-lg-8 col-md-10">

              {/* --- Formulário de Busca --- */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="uf" className="form-label">UF (Estado)</label>
                  <input
                    type="text"
                    id="uf"
                    className="form-control"
                    placeholder="Ex: MG"
                    maxLength={2}
                    value={uf}
                    onChange={(e) => setUf(e.target.value.toUpperCase())}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cidade" className="form-label">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    className="form-control"
                    placeholder="Ex: Belo Horizonte"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="logradouro" className="form-label">Logradouro (Rua, Avenida...)</label>
                  <input
                    type="text"
                    id="logradouro"
                    className="form-control"
                    placeholder="Ex: Av. Afonso Pena"
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 btn-lg mt-4" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Consultando...
                    </>
                  ) : 'Consultar CEP'}
                </button>
              </form>

              {/* --- Área de Resultados --- */}
              <div className="mt-5">
                {isLoading && (
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Carregando...</span>
                    </div>
                  </div>
                )}

                {error && !isLoading && (
                  <div className={`alert alert-danger text-center error-alert-enter ${isResultVisible ? 'error-alert-enter-active' : ''}`}>
                    {error}
                  </div>
                )}

                {resultados && !isLoading && (
                  <div className={`card bg-dark border-secondary result-enter ${isResultVisible ? 'result-enter-active' : ''}`}>
                    <div className="card-header fw-bold text-center">
                      Resultados Encontrados
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table table-dark table-striped table-bordered mb-0">
                          <thead>
                            <tr>
                              <th scope="col">CEP</th>
                              <th scope="col">Logradouro</th>
                              <th scope="col">Bairro</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Usamos .map() para criar uma linha para cada resultado */}
                            {resultados.map((endereco, index) => (
                              <tr key={index}>
                                <td>{endereco.cep}</td>
                                <td>{endereco.logradouro}</td>
                                <td>{endereco.bairro}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};