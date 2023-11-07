import Feira from "pages/Feira";
import Login from "pages/Login";
import Carrinho from "pages/Carrinho";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";
import { PagamentoProvider } from "common/context/Pagamento";

function Router() {
  return (
    <UsuarioProvider>
      <CarrinhoProvider>
        <PagamentoProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/feira" element={<Feira />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
          </BrowserRouter>
        </PagamentoProvider>
      </CarrinhoProvider>
    </UsuarioProvider>
  );
}

export default Router;
