import { Container, Row, Col } from "react-bootstrap";

const timeline = [
  {
    period: "Dec 2024 - Present",
    role: "Front-End Web Developer",
    company: "Cosmic365.ai (Remote)",
    summary:
      "Developing front-end solutions with React, JavaScript, Wix, and WordPress while improving UI/UX, debugging components, and optimizing performance.",
  },
  {
    period: "Mar 2023 - Apr 2025",
    role: "Front-End Developer",
    company: "Upwork (Freelancer, Remote)",
    summary:
      "Built 20+ responsive landing pages with React and JavaScript, collaborated with designers and backend teams, used Redux, and improved accessibility/SEO.",
  },
  {
    period: "Dec 2021 - Nov 2022",
    role: "MTO (Management Trainee Officer)",
    company: "Ayesha Spinning Mills LTD (Socks Division)",
    summary:
      "Maintained quality-focused production operations, ensured preventive maintenance routines, and supported safe day-to-day plant processes.",
  },
];

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-head">
              <h2>Experience</h2>
              <p>
                Professional experience from my resume, showing my transition
                from engineering operations to modern front-end development.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="timeline">
              {timeline.map((item, index) => (
                <article
                  key={`${item.period}-${item.role}`}
                  className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                >
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
