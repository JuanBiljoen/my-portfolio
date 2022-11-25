
import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={4} sm={4} md={6} >
      <div className="proj-imgbx">
        <img className="project-image" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}