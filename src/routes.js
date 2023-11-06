import Feira from "pages/Feira";
import Login from "pages/Login";
import Carrinho from "pages/Carrinho";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <UsuarioProvider>
                <Login />
            </UsuarioProvider>
        }/>
        <Route path="/feira" element={
            <UsuarioProvider>
                <CarrinhoProvider>
                    <Feira />
                </CarrinhoProvider>
            </UsuarioProvider>
        }/>
        <Route path="/carrinho" element={
          <UsuarioProvider>
            <CarrinhoProvider>
                <Carrinho />
            </CarrinhoProvider>
          </UsuarioProvider>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
