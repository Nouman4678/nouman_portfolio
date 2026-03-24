import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CodeSlash, Palette, Speedometer2 } from "react-bootstrap-icons";
import { services } from "../data/servicesData";
import { Footer } from "../components/Footer";

const iconMap = { CodeSlash, Palette, Speedometer2 };

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="service-detail-page">
        <Container>
          <div className="service-not-found">
            <h2>Service not found</h2>
            <Link to="/services" className="back-link">Back to Services</Link>
          </div>
        </Container>
      </section>
    );
  }

  const Icon = iconMap[service.iconName];

  return (
    <>
      <section className="service-detail-page">
        <Container>
          <Link to="/services" className="back-link back-link-detail">
            &larr; Back to Services
          </Link>
          <Row className="g-4 align-items-stretch">
            <Col xs={12} lg={7}>
              <div className="service-detail-panel">
                <div className="service-icon service-icon-lg service-icon-page" aria-hidden="true">
                  {Icon && <Icon size={36} />}
                </div>
                <h1>{service.title}</h1>
                <p className="service-detail-lead">{service.fullDescription}</p>
              </div>
            </Col>
            <Col xs={12} lg={5}>
              <div className="service-highlight-card">
                <h3>Delivery Focus</h3>
                <p>
                  Every service is delivered with clean code quality, responsive
                  behavior, and production-ready performance standards.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <h3 className="service-features-title">What is included</h3>
              <ul className="service-features-list">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="service-cta-box">
                <p>Interested in working together?</p>
                <a href="/#connect" className="btn-connect">
                  Get in Touch
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};
