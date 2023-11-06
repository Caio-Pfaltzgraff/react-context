import { Nav } from "./styles";
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useCarrinhoContext } from "common/context/Carrinho";

export default function NavBar() {
    const { quantidadeProdutos } = useCarrinhoContext();
    return (
        <Nav>
            <Logo />
            <IconButton disabled={quantidadeProdutos === 0}>
                <Badge color="primary" badgeContent={quantidadeProdutos}>
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Nav>
    )
}