import React from "react";
import Button from "./Button/Button";
import CartWidget from "./CartWidget/CartWidget";


function NavBar() {
  return (
    <>
      <h1>AlegrArte</h1>      
      <Button color="pink">INICIO</Button>
      <Button>NOSOTROS</Button>
      <Button color="pink">CONTACTO</Button>
      <Button color="pink"><CartWidget/></Button>
    </>
  );
}

export default NavBar;
