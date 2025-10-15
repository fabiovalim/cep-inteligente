import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Routes } from "./routes";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}