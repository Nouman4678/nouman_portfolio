// Import necessary components and assets
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

// Define the Contact component
export const Contact = () => {
  return (
    // Contact section
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* Column for the contact image */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          
          {/* Column for the contact form */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch With Me</h2>
                  
                  {/* Contact form */}
                  <form
                    id="contactForm"
                    action="https://submit-form.com/CySzEiA5L"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_redirect"
                      value="https://nomannadeem.netlify.app/"
                    />
                    <input type="hidden" name="_append" value="false" />
                    
                    {/* Input fields for the form */}
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="First Name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          id="message"
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        <button style={{ width: "100%" }} type="submit">
                          <span>Send</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
