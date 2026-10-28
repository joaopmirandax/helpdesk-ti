import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar({ paginaAtiva, onMudarPagina }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Helpdesk TI</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link 
            active={paginaAtiva === 'lista'} 
            onClick={() => onMudarPagina('lista')}
          >
            Chamados Abertos
          </Nav.Link>
          <Nav.Link 
            active={paginaAtiva === 'form'} 
            onClick={() => onMudarPagina('form')}
          >
            Abrir Chamado
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}