import { Api } from "./api/ApiConfig";
import { ApiException } from "./api/ApiException";
import { Endereco } from "../types/Endereco";

const getByCep = async (cep: string): Promise<Endereco | ApiException> => {
  try {
    const { data } = await Api().get(`/${cep}/json`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao buscar endereço...")
  }
};

const getByEndereco = async (uf: string, cidade: string, logr: string): Promise<Endereco | ApiException> => {
  try {
    const { data } = await Api().get(`/${uf}/${cidade}/${logr}/json`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao buscar endereço...")
  }
};

export const EnderecoService = {
  getByCep,
  getByEndereco
};