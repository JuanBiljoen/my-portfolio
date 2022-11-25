
import cartPic from "../images/cart.jpg"
import memoryPic from "../images/Memory.jpg"
import loadingGif from "../images/loading.gif"
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Functional e-commerce cart",
      description: "One of my first more advanced JavaScript projects",
      imgUrl: cartPic,
      link: "https://github.com/JuanBiljoen/e-commerce-Shopping-cart"
    },
    {
      title: "Memory game",
      description: "a Card memory game built with React (build phase)",
      imgUrl: memoryPic,
    },
    {
      title: "Next Project",
      description: "Loading...",
      imgUrl: loadingGif,
    },

  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a couple of projects I have worked on thus far.</p>
                
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  
                  </Tab.Content>
               
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}