import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Navbar className="red" variant="dark">
        <Container>
          <Navbar.Brand className="m-auto">
            <NavLink to="/">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png"
                style={{ height: "50px" }}
              />
            </NavLink>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
