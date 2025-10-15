import { SecaoInicio } from '../../components/SecaoInicio';
import { SecaoComoFunciona } from '../../components/SecaoComoFunciona';
import { SecaoSobreApi } from '../../components/SecaoSobreApi';
import { SecaoSobreMim } from '../../components/SecaoSobreMim';

export const Home = () => {
  return (
    <main>
      <SecaoInicio />

      <SecaoComoFunciona />

      <SecaoSobreApi />

      <SecaoSobreMim />     
    </main>
  );
};