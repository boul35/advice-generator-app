import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useIsAuth from "../auth/hooks/UseAuth"
import useSignout from "../auth/hooks/UseSignOut";
import Card from "./Card";

const PokemonLayout = () => {
  const navbarId = "navbar";
  const isAuth = useIsAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth]);

  const disconnect = useSignout();

  return (
    <Container fluid>
      <Navbar>
        <Navbar.Brand as={Link} to="/">
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={navbarId} />
        <Navbar.Collapse id={navbarId}>
          <Nav className="me-auto">
            <Nav.Link as={Button} onClick={disconnect}>
              Déconnexion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
      <Card/>
    </Container>
  );
};

export default PokemonLayout;
