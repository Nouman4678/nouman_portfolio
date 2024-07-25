// Import necessary components from react-bootstrap
import { Col, Button } from "react-bootstrap";

// Define the ProjectCard component
export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    // Column for the project card
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        {/* Project image */}
        <img src={imgUrl} alt="proj" />
        <div className="proj-txtx">
          {/* Project title */}
          <h4>{title}</h4>
          {/* Project description */}
          <span>{description}</span>
          {/* Button to watch the project live */}
          <div className="d-grid gap-2" style={{ marginTop: "15px" }}>
            <a target="_blank" rel="noreferrer" href={url}>
              <Button variant="outline-light" className="vvd">
                <span> Watch Live</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}
