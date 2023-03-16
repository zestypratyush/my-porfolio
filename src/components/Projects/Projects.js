import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bank from "../../Assets/Projects/bankmgmt.png";
import img_cap from "../../Assets/Projects/img_cap.png";
import splits from "../../Assets/Projects/splits.png";
import chatter from "../../Assets/Projects/chatter.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatter}
              isBlog={false}
              title="Chatter"
              description="This is a realtime chat app made using MERN stack on which we can chat with all the registered users. We can create groups and become admin. Used socket.io to use bandwidth efficiently."
              ghLink="https://github.com/zestypratyush/chat-app"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={splits}
              isBlog={false}
              title="Splits"
              description="This is web based app where one can register themselves and their friends and family, in order to track money splits between them. One can create group with registered users to do so."
              ghLink="https://github.com/zestypratyush/Splits"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_cap}
              isBlog={false}
              title="Image captioning transformer"
              description="It is an image captioning model based on transformer architecture. Transformer architecture uses global attention. It allows parallelisation to improve attention."
              ghLink="https://github.com/zestypratyush/Image-captioning-transformer"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Bank Management System"
              description="It is a demo banking management backend prototype on which we can create account, transfer, withdraw and add money. All these data will be written on separate file using binary encoding."
              ghLink="https://github.com/zestypratyush/Bank_management_system"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
