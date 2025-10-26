import { useState } from 'react';
import { HeaderPage } from "../../components/HeaderPage";
import { EnderecoService } from "../../services/EnderecoService";
import { ApiException } from "../../services/api/ApiException";
import { PlusLg, Trash } from 'react-bootstrap-icons';

// Interface para controlar cada linha da nossa tabela
type CepItemStatus = 'pendente' | 'válido' | 'inválido' | 'carregando';
interface CepItem {
  id: string; // Para a key do React
  cep: string;
  status: CepItemStatus;
}

export const ValidaCep = () => {
  // --- Estados do Componente ---
  const [cepList, setCepList] = useState<CepItem[]>([
    { id: Date.now().toString(), cep: '', status: 'pendente' } // Começa com uma linha
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Função para adicionar uma nova linha de CEP ---
  const handleAddRow = () => {
    const newRow: CepItem = {
      id: Date.now().toString(),
      cep: '',
      status: 'pendente'
    };
    setCepList(prevList => [...prevList, newRow]);
  };

  // --- Função para remover uma linha de CEP ---
  const handleRemoveRow = (id: string) => {
    // Só permite remover se houver mais de uma linha
    if (cepList.length > 1) {
      setCepList(prevList => prevList.filter(item => item.id !== id));
    }
  };

  // --- Função para atualizar o valor do CEP em uma linha específica ---
  const handleCepChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = e.target.value.replace(/\D/g, ''); // Remove não-dígitos

    setCepList(prevList =>
      prevList.map(item =>
        item.id === id ? { ...item, cep: newCep, status: 'pendente' } : item
      )
    );
  };

  // Função principal para validar todos os CEPs ---
  const handleValidateAll = async () => {
    setIsLoading(true);
    setError(null);

    // Marca todos os itens que precisam de validação como 'carregando'
    let listToProcess = cepList.map(item => {
      if (item.status === 'pendente' && item.cep.length === 8) {
        return { ...item, status: 'carregando' as const };
      }
      // Marca como 'inválido' se estiver pendente mas não tiver 8 dígitos
      if (item.status === 'pendente' && item.cep.length > 0) {
        return { ...item, status: 'inválido' as const };
      }
      return item;
    });
    setCepList(listToProcess);

    // Cria um array de promessas de validação
    const validationPromises = listToProcess.map(async (item) => {
      if (item.status !== 'carregando') {
        return item; // Pula os que não estão 'carregando'
      }

      const result = await EnderecoService.getByCep(item.cep);

      if (result instanceof ApiException || result.erro) {
        return { ...item, status: 'inválido' as const };
      } else {
        return { ...item, status: 'válido' as const };
      }
    });

    // Espera todas as promessas resolverem
    const validatedList = await Promise.all(validationPromises);

    // Atualiza o estado com os resultados
    setCepList(validatedList);
    setIsLoading(false);
  };

  // --- Helper para renderizar o status visualmente ---
  const renderStatus = (status: CepItemStatus) => {
    switch (status) {
      case 'válido':
        return <span className="badge status-valido w-100 fs-6">Válido</span>;
      case 'inválido':
        return <span className="badge status-invalido w-100 fs-6">Inválido</span>;
      case 'carregando':
        return <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>;
      case 'pendente':
      default:
        return <span className="text-muted">Pendente</span>;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne o recarregamento da página
    handleValidateAll(); 
  };

  return (
    <>
      <div id="valida-cep">
        <HeaderPage />
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">

              <form className="validation-form" onSubmit={handleSubmit}>
                {/* --- Tabela de CEPs --- */}
                <div className="table-responsive">
                  <table className="table table-bordered align-middle">
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">CEP</th>
                        <th scope="col" className="text-center">Status</th>
                        <th scope="col" className="text-center">Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cepList.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Ex: 37415310"
                              maxLength={8}
                              value={item.cep}
                              onChange={(e) => handleCepChange(item.id, e)}
                              disabled={isLoading}
                            />
                          </td>
                          <td className="text-center">
                            {renderStatus(item.status)}
                          </td>
                          <td className="text-center">
                            <button
                              type="button" // Garante que este botão não envie o form
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => handleRemoveRow(item.id)}
                              disabled={isLoading || cepList.length <= 1}
                            >
                              <Trash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* --- Área de Erro (para erros gerais) --- */}
                <div className="mt-4">
                  {error && (
                    <div className="alert alert-danger text-center">
                      {error}
                    </div>
                  )}
                </div>
                
                {/* --- Botão de Adicionar Linha --- */}
                <div className="text-center mt-3">
                <button
                  className="btn btn-outline-primary"
                  onClick={handleAddRow}
                  disabled={isLoading}
                >
                  <PlusLg className="me-2" /> Adicionar CEP
                </button>

              </div>
              </form>

              {/* --- Botão de Validar --- */}
              <div className="mt-5">
                <button
                  type="button"
                  className="btn btn-primary w-100 btn-lg"
                  onClick={handleValidateAll}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Validando...
                    </>
                  ) : 'Validar'}
                </button>
              </div>

              {/* --- Área de Erro (para erros gerais) --- */}
              <div className="mt-4">
                {error && (
                  <div className="alert alert-danger text-center">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}