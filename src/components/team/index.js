import React from "react";
import { Container } from "react-bootstrap";
import "./Team.scss";
import Social from "../social";
import { teamMember } from "./configs";

const Team = () => {
  return (
    <Container id="team" className="py-4 py-lg-5">
      <h2 className="mb-2 text-uppercase fw-bold text-center">Team</h2>
      <div className="team-container">
        {teamMember.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-card__image">
              <img src={member.avatar} alt={member.fullName} />
            </div>
            <div className="team-card__name">
              <h6>{member.fullName}</h6>
              <p>{member.intro}</p>
            </div>
            <div>
              <Social socialData={member.social} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Team;
