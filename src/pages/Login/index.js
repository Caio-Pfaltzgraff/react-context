import { Button, Input, InputLabel, InputAdornment } from "@mui/material";
import { Container, Titulo, InputContainer } from "./styles";
import { useNavigate } from "react-router-dom";

function Login({ nome, setNome, saldo, setSaldo }) {
    const navigate = useNavigate();
    return(
        <Container>
            <Titulo>
                Insira o seu nome
            </Titulo>
            <InputContainer>
                <InputLabel>Nome</InputLabel>
                <Input value={nome} onChange={(e) => setNome(e.target.value)} type="text" />
            </InputContainer>
            <InputContainer>
                <InputLabel>Saldo</InputLabel>
                <Input 
                    type="number" 
                    value={saldo}
                    onChange={(e) => setSaldo(e.target.value)}
                    startAdornment={
                        <InputAdornment position="start">R$</InputAdornment>
                    }
                />
            </InputContainer>
            <Button variant="contained" color="primary" onClick={() => navigate('/feira')}>Avançar</Button>
        </Container>
    )
}

export default Login;