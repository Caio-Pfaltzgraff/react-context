import Feira from "pages/Feira";
import Login from "pages/Login";
import Carrinho from "pages/Carrinho";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <UsuarioProvider>
            <Login/>
          </UsuarioProvider> 
        }/>
        <Route path="feira" element={<Feira />} />
        <Route path="carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
