import Feira from "pages/Feira";
import Login from "pages/Login";
import Carrinho from "pages/Carrinho";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function Router() {
  const [nome, setNome] = useState("")
  const [saldo, setSaldo] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Login 
            nome={nome} 
            setNome={setNome} 
            saldo={saldo} 
            setSaldo={setSaldo}
          />
        } />
        <Route path="feira" element={<Feira />} />
        <Route path="carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
