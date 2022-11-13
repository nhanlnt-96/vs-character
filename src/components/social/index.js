import React from "react";
import { social } from "./configs";
import { NavLink } from "react-bootstrap";
import "./Social.scss";

const Social = () => {
  return (
    <div className="d-flex justify-content-center align-items-center social-container">
      {social.map(
        (socialItem) =>
          socialItem.url && (
            <NavLink
              key={socialItem.url}
              target="_blank"
              title={socialItem.label}
              href={socialItem.url}
              className="ps-md-0 pe-md-0"
            >
              <img
                src={socialItem.icon}
                alt={`vs-character-${socialItem.label}`}
              />
            </NavLink>
          )
      )}
    </div>
  );
};

export default Social;
