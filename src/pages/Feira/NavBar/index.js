import { Nav } from "./styles";
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useCarrinhoContext } from "common/context/Carrinho";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const { quantidadeProdutos } = useCarrinhoContext();
    const navigate = useNavigate();
    return (
        <Nav>
            <Logo />
            <IconButton 
                disabled={quantidadeProdutos === 0}
                onClick={() => navigate("/carrinho")}
            >
                <Badge color="primary" badgeContent={quantidadeProdutos}>
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Nav>
    )
}