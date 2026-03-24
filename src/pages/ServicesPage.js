import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CodeSlash, Palette, Speedometer2 } from "react-bootstrap-icons";
import { services } from "../data/servicesData";
import { Footer } from "../components/Footer";

const iconMap = { CodeSlash, Palette, Speedometer2 };

export const ServicesPage = () => {
  return (
    <>
      <section className="services-page">
        <Container>
          <Row className="mb-4 mb-lg-5">
            <Col xs={12}>
              <div className="services-hero">
                <span className="tagline">What I Do</span>
                <h1>Services Built for Modern Products</h1>
                <p>
                  I help teams design, build, and optimize user-focused web
                  experiences with clean engineering and modern UI standards.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="g-4">
            {services.map(({ slug, title, shortDescription, iconName }, index) => {
              const Icon = iconMap[iconName];
              return (
                <Col key={slug} xs={12} md={6} lg={4}>
                  <Link to={`/services/${slug}`} className="service-card-link">
                    <article className="service-card service-card-page" style={{ animationDelay: `${index * 90}ms` }}>
                      <div className="service-icon service-icon-page" aria-hidden="true">
                        {Icon && <Icon size={28} />}
                      </div>
                      <h3>{title}</h3>
                      <p>{shortDescription}</p>
                      <span className="service-card-cta">View service details -></span>
                    </article>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};
