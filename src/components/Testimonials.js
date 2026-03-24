import { Container, Row, Col } from "react-bootstrap";

const testimonials = [
  {
    quote:
      "Nouman consistently translated design into polished frontend experiences and always delivered on time.",
    author: "Product Manager",
    company: "SaaS Team",
  },
  {
    quote:
      "Great eye for detail, smooth communication, and strong React fundamentals. A reliable engineer to work with.",
    author: "Tech Lead",
    company: "Agency Project",
  },
  {
    quote:
      "He improved both UI quality and performance, making our pages feel noticeably faster and more usable.",
    author: "Founder",
    company: "Startup Client",
  },
];

export const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-head">
              <h2>Testimonials</h2>
              <p>
                Feedback from people I have collaborated with on product and
                web development projects.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {testimonials.map((item) => (
            <Col key={`${item.author}-${item.company}`} xs={12} md={6} lg={4} className="mb-4">
              <article className="testimonial-card">
                <p>"{item.quote}"</p>
                <h3>{item.author}</h3>
                <span>{item.company}</span>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
