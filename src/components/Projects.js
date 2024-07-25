// Import necessary components and assets
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/social magic.png";
import projImg2 from "../assets/img/youtube-clone.png";
import projImg3 from "../assets/img/pricvacy os.png";
import projImg4 from "../assets/img/restaurant.png";
import projImg5 from "../assets/img/TechPulse.png";
import projImg6 from "../assets/img/artificially.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Define the Projects component
export const Projects = () => {
  // Array of project details
  const projects = [
    {
      title: "Social Magic",
      description: "AI Content Engine for your Brand, Its an AI Platform for your all social media needs.",
      imgUrl: projImg1,
      url: "https://socialmagic.ai/"
    },
    {
      title: "Youtube Clone",
      description: "A YouTube-like website showcasing design and development skills.",
      imgUrl: projImg2,
      url: "https://yt-clone-v2.netlify.app"
    },
    {
      title: "Privacy OS",
      description: "Privacy OS mission is to transform the AI landscape by seamlessly integrating Privacy into data systems.",
      imgUrl: projImg3,
      url: "https://privacyos.ai/"
    },
    {
      title: "Restaurant Site",
      description: "A stylish and functional website designed for a restaurant.",
      imgUrl: projImg4,
      url: "https://restaurant-sitev1.netlify.app"
    },
    {
      title: "TechPulse",
      description: "A sleek and modern tech agency website.",
      imgUrl: projImg5,
      url: "https://techpulse.netlify.app"
    },
    {
      title: "Artificially App",
      description: "An innovative app showcasing advanced AI tool for image generation",
      imgUrl: projImg6,
      url: "https://artificiallyapp.netlify.app"
    },
  ];

  return (
    // Projects section
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here you will find some of the projects that I created with each project containing its brief description and a link to access it live.</p>
                  <Tab.Container id="projects-tabs">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="imag" />
    </section>
  );
}
