import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';
import { services } from "../data/servicesData";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith("/services")) {
      setActiveLink("services");
    } else if (location.hash) {
      setActiveLink(location.hash.slice(1));
    } else {
      setActiveLink("home");
    }
  }, [location]);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className="brand-wrap">
            <img src={logo} alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto navbar-nav align-items-lg-center">
            <Nav.Link
              as={Link}
              to="/"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => setActiveLink('home')}
            >
              Home
            </Nav.Link>

            <NavDropdown
              title="Services"
              id="services-dropdown"
              className={`navbar-dropdown ${activeLink === 'services' ? 'active' : ''}`}
              renderMenuOnMount
            >
              <NavDropdown.Item as={Link} to="/services">
                All Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {services.map(({ slug, title }) => (
                <NavDropdown.Item key={slug} as={Link} to={`/services/${slug}`}>
                  {title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link
              href="/#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => setActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="/#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => setActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="/#experience"
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => setActiveLink('experience')}
            >
              Experience
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
            <a href="/#connect" className="navbar-connect-btn">
              <button className="vvd"><span>Let's Connect</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
