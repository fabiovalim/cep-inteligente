import { useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Endereco  } from "../../types/Endereco";
import { EnderecoService } from "../../services/EnderecoService";
import { ApiException } from "../../services/api/ApiException";
import { HeaderPage } from "../../components/HeaderPage";

export const BuscaCepPage = () => {
  const [cepInput, setCepInput] = useState("");
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (cepInput.length !== 8) {
      setError("O CEP deve conter 8 dígitos.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setEndereco(null);

    // Supondo que seu serviço se chame EnderecoService
    const result = await EnderecoService.getByCep(cepInput);

    setIsLoading(false);

    if (result instanceof ApiException) {
      setError(result.message);
    } else {
      if (result.erro) {
        setError('CEP não encontrado na base de dados.');
      } else {
        setEndereco(result);
      }
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    setCepInput(cep);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // MUITO IMPORTANTE: Previne o recarregamento da página
    handleSearch();       // Chama a sua função de busca que já existe
  };
  
  return (
    <>
      <section id="consulta-individual">
        <HeaderPage />
        <div className="Container">
          <div className="my-consulta row justify-content-center">
            <div className="col-lg-8">

              <form onSubmit={handleSubmit} className="input-group input-group-lg mb-4">
                <div className="input-group input-group-lg mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite o CEP (apenas números)"
                    value={cepInput}
                    onChange={handleCepChange}
                    maxLength={8}
                    disabled={isLoading}
                  />
                  <button className="btn btn-primary px-4" onClick={handleSearch} disabled={isLoading}>
                    {isLoading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      <Search />
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-5">
                {isLoading && (
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Carregando...</span>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger text-center">{error}</div>
                )}

                {endereco && (
                  <div className="card bg-dark border-secondary">
                    <div className="card-header fw-bold text-center">
                      Endereço Encontrado
                    </div>
                    <div className="card-body">
                      <table className="table table-dark table-striped table-bordered mb-0">
                        <tbody>
                          <tr>
                            <th scope="row" style={{ width: '30%' }}>CEP</th>
                            <td>{endereco.cep}</td>
                          </tr>
                          <tr>
                            <th scope="row">Logradouro</th>
                            <td>{endereco.logradouro}</td>
                          </tr>
                          {endereco.complemento && (
                            <tr>
                              <th scope="row">Complemento</th>
                              <td>{endereco.complemento}</td>
                            </tr>
                          )}
                          <tr>
                            <th scope="row">Bairro</th>
                            <td>{endereco.bairro}</td>
                          </tr>
                          <tr>
                            <th scope="row">Cidade / UF</th>
                            <td>{endereco.localidade} / {endereco.uf}</td>
                          </tr>
                          <tr>
                            <th scope="row">DDD</th>
                            <td>{endereco.ddd}</td>
                          </tr>
                          <tr>
                            <th scope="row">Código IBGE</th>
                            <td>{endereco.ibge}</td>
                          </tr>
                          <tr>
                            <th scope="row">Região</th>
                            <td>{endereco.regiao}</td>
                          </tr>
                          <tr>
                            <th scope="row">Código SIAFI</th>
                            <td>{endereco.siafi}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};