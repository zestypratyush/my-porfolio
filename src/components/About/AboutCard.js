import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranjal Pratyush </span>
            from <span className="purple"> Gwalior, Madhya Pradesh, India.</span>
            <br />I am a Pre-final year student pursuing B.Tech in Computer Science in 
            IIITM, Gwalior.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gymming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dare to dream, strive to achieve!"{" "}
          </p>
          <footer className="blockquote-footer">Pranjal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
