import { Api } from "./api/ApiConfig";
import { ApiException } from "./api/ApiException";
import { Endereco } from "../types/Endereco";

const getByCep = async (cep: number): Promise<Endereco | ApiException> => {
  try {
    const { data } = await Api().get(`/${cep}/json`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao buscar endereço...")
  }
};