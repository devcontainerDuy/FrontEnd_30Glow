import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="http://localhost:5173/src/assets/images/logo30GLOW.png"
            alt="Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/manager">Trang Chủ</Nav.Link> 
            <Nav.Link as={Link} to="/baocao">Thống kê</Nav.Link> 
            <Nav.Link as={Link} to="/checkout">Thanh Toán </Nav.Link> 
            <Nav.Link as={Link} to="/baocao">Hóa đơn</Nav.Link> 
            <Nav.Link as={Link} to="/baocao">Đăng xuất</Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;