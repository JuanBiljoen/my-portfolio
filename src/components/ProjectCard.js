
import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={4} sm={4} md={6} >
      <div className="proj-imgbx">
      <a className="project-image" href={link} target="_blank" rel="noreferrer">
        <img src={imgUrl} alt="Coding Beauty logo"></img>
      </a>
        {/* <img className="project-image" src={imgUrl} /> */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}