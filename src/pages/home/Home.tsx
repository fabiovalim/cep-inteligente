import { SecaoInicio } from '../../components/SecaoInicio';
import { SecaoComoFunciona } from '../../components/SecaoComoFunciona';
import { SecaoSobreApi } from '../../components/SecaoSobreApi';
import { SecaoSobreMim } from '../../components/SecaoSobreMim';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';

export const Home = () => {
  return (
    <main>
      <Header />

      <SecaoInicio />

      <SecaoComoFunciona />

      <SecaoSobreApi />

      <SecaoSobreMim />

      <Footer /> 
    </main>
  );
};