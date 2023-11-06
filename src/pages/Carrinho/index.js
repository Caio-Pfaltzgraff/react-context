import {
  Container,
  Voltar,
  TotalContainer,
  PagamentoContainer,
} from "./styles";
import { Button, Snackbar, InputLabel, Alert } from "@mui/material";
import { useCarrinhoContext } from "common/context/Carrinho";
import Produto from "components/Produto";
import { useState } from "react";

function Carrinho() {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { carrinho } = useCarrinhoContext();
  return (
    <Container>
      <Voltar />
      <h2>Carrinho</h2>
      {carrinho.map((produto) => (
        <Produto {...produto} key={produto.id}/>
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ </span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ </span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ </span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackBar(true);
        }}
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
