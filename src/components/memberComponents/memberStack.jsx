import React from "react";
import classes from "./memberCard.module.css";
import PropTypes from "prop-types";

const MemberStack = ({ user }) => {
  return (
    <div className={`d-flex ${classes.members__info}`}>
      <span>
        <b>Стэк технологий: </b>
      </span>
      {user.stack.map(({ name }) => (
        <span className={classes.members__stack} key={name}>
          {name}
        </span>
      ))}
    </div>
  );
};

MemberStack.propTypes = {
  user: PropTypes.object.isRequired,
};

export default MemberStack;
