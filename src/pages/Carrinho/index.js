import {
  Container,
  Voltar,
  TotalContainer,
  PagamentoContainer,
} from "./styles";
import { Button, Snackbar, InputLabel, Alert, Select, MenuItem } from "@mui/material";
import { useCarrinhoContext } from "common/context/Carrinho";
import { usePagamentoContext } from "common/context/Pagamento";
import { UsuarioContext } from "common/context/Usuario";
import Produto from "components/Produto";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Carrinho() {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { carrinho, valorTotalCarrinho, efetuarCompra } = useCarrinhoContext();
  const { saldo = 0 } = useContext(UsuarioContext);
  const { formaPagamento, mudarFormaPagamento, tiposPagamento } = usePagamentoContext();
  const navigate = useNavigate();
  const total = useMemo(() => saldo - valorTotalCarrinho, [saldo, valorTotalCarrinho]); //irá excutar apenas quando o saldo ou valor totalcarrinho mudar
  return (
    <Container>
      <Voltar onClick={() => navigate(-1)}/>
      <h2>Carrinho</h2>
      {carrinho.map((produto) => (
        <Produto {...produto} key={produto.id}/>
      ))}
      <PagamentoContainer variant="standard">
        <InputLabel>Forma de Pagamento</InputLabel>
        <Select
          value={formaPagamento.id} 
          onChange={(e) => mudarFormaPagamento(e.target.value)}
        >
          {tiposPagamento.map((pagamento) => (
            <MenuItem value={pagamento.id} key={pagamento.id}>
              {pagamento.nome}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {valorTotalCarrinho.toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {Number(saldo).toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {total.toFixed(2)}</span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          efetuarCompra();
          setOpenSnackBar(true);
        }}
        disabled={total < 0 || carrinho.length === 0}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSnackBar}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert
          variant="standard"
          onClose={() => setOpenSnackBar(false)}
          severity="success"
        >
          Compra feita com sucesso!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Carrinho;
