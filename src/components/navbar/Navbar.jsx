
import Nav, { Hamburger, Logo,  Menu,  MenuLink } from "./Navbar.style";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav justify="space-between" wrap="wrap" >
      <Logo >
        <i>{"<M.B.D/>"}</i>
        <span>Recipe</span>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)} >
        <GiHamburgerMenu />
      </Hamburger>



      <Menu open={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/"> Home</MenuLink>
        <MenuLink to="/about"> About</MenuLink>
        <MenuLink to="/register"> Register</MenuLink>
        <MenuLink onClick={() => sessionStorage.clear()} to="/login"> Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
