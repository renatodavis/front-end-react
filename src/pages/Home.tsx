import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Clientes from "./Cadastros/Clientes";

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent>
        <p className="mt-4">Este é o conteúdo da página inicial.</p>
        <Clientes/>
      </MainContent>
    </div>
  );
}
