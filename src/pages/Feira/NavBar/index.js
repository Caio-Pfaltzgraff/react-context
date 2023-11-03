import { Nav } from "./styles";
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function NavBar() {
    return (
        <Nav>
            <Logo />
            <IconButton>
                <Badge color="primary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </Nav>
    )
}