import React from "react";
import classes from "./memberCard.module.css";
import Badge from "../UI/badge/badge";
import PropTypes from "prop-types";

const MemberHeader = ({ user }) => {
  return (
    <div className="d-flex flex-row align-items-center">
      <h1 className={classes.members__title}>{user.name}</h1>
      <div className={`d-flex flex-row  ${classes.members__title}`}>
        {user.role.map((role) => (
          <span key={role.type}>
            <Badge type={role.type} text={role.name} />
          </span>
        ))}
      </div>
      <i className="bi bi-heart" style={{ fontSize: "20px" }}></i>
    </div>
  );
};

MemberHeader.propTypes = {
  user: PropTypes.object.isRequired,
};

export default MemberHeader;
