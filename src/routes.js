import Feira from "pages/Feira";
import Login from "pages/Login";
import Carrinho from "pages/Carrinho";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UsuarioContext } from "common/context/Usuario";

function Router() {
  const [nome, setNome] = useState("")
  const [saldo, setSaldo] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
            <Login/>
          </UsuarioContext.Provider> 
        }/>
        <Route path="feira" element={<Feira />} />
        <Route path="carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
