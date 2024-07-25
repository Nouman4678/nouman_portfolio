// Import necessary components and assets
import htmllogo from "../assets/img/HTML.png";
import Csslogo from "../assets/img/CSS.png";
import uxuilogo from "../assets/img/ui.png";
import Jslogo from "../assets/img/JS.png";
import Reactlogo from "../assets/img/react.png";
import Githublogo from "../assets/img/github.png";
import bootstraplogo from "../assets/img/bootstrap.png";
import typescript from "../assets/img/typescript.png";
import nodejslogo from "../assets/img/nodejs.png";
import materialuilogo from "../assets/img/materialui.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

// Define the Skills component
export const Skills = () => {
  // Responsive settings for the carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    // Skills section
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here you will find more information about my current skills,
                mostly in terms of programming and technology.
              </p>
              {/* Carousel for displaying skills */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {/* Individual skill items */}
                <div className="item">
                  <img src={htmllogo} alt="HTML Logo" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={uxuilogo} alt="UI/UX Logo" />
                  <h5>UI/UX</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="TypeScript Logo" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={Csslogo} alt="CSS Logo" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={Jslogo} alt="JavaScript Logo" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={Reactlogo} alt="React Logo" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={bootstraplogo} alt="Bootstrap Logo" />
                  <h5>BOOTSTRAP</h5>
                </div>
                <div className="item">
                  <img src={materialuilogo} alt="Material UI Logo" />
                  <h5>MATERIAL UI</h5>
                </div>
                <div className="item">
                  <img src={nodejslogo} alt="Node.js Logo" />
                  <h5>NODE JS</h5>
                </div>
                <div className="item">
                  <img src={Githublogo} alt="GitHub Logo" />
                  <h5>GITHUB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Imag" />
    </section>
  );
};
