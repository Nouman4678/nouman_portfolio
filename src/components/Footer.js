// Import necessary components and assets
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";
// Define the Footer component
export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    // Footer section
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          {/* Column for logo and name */}
          <Col xs={12} sm={6} className="footer-brand-wrap">
            <img src={logo} alt="Logo" />
          </Col>
          
          {/* Column for social icons and copyright */}
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nouman-nadeem-dev467?utm_source=share_via&utm_content=profile&utm_medium=member_ios">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Nouman4678">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a target="_blank" rel="noreferrer" href="mailto:nomanbutt467@gmail.com">
                              <img src={navIcon3} alt="Email" />
                            </a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
