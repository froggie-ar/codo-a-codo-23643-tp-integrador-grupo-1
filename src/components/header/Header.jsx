import { useState } from "react";
import "./Header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSubmitSearch = (event) => {
    
    event.preventDefault();
        
    const url = (searchText) ? `/search?q=${searchText}` : '/';

    navigate(url);

  }

  const handleOnKeyDown = (event) => {

    if (event.key === 'Enter') {
        
        event.preventDefault();
        
        const url = (searchText) ? `/search?q=${searchText}` : '/';

        navigate(url);

    }

  }

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8146/8146003.png"
            alt="carrito"
            width="50px"
            height="50px"
          />
        </div>
        <Navbar.Brand href="#" className="tec">Tecno-<span className="cod">Code</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
           {/* <Nav.Link href="#action2">Link</Nav.Link>  */}
            <NavDropdown title="Cuenta" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Ingresar</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Registrarse
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Ayuda
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busqueda..."
              className="me-2"
              aria-label="Search"
              value={searchText}
              onChange={(event) => (setSearchText(event.target.value)) }
              onKeyDown={(event) => (handleOnKeyDown(event))}
            />
            <Button variant="outline-success"
                    onClick={handleSubmitSearch} >Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </header>
  );
};
