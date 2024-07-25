// Import necessary components and assets
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";

// Define the Footer component
export const Footer = () => {
  return (
    // Footer section
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          {/* Column for logo and name */}
          <Col size={12} sm={6} style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <img src={logo} alt="Logo" />
            <h1 style={{color:"white"}}>NN</h1>
          </Col>
          
          {/* Column for social icons and copyright */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/noumannadeem/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Nouman4678">
                <img src={navIcon2} alt="GitHub" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
