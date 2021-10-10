import React from "react";
import classes from "./memberCard.module.css";
import PropTypes from "prop-types";

const MemberInfo = ({ user }) => {
  return (
    <>
      <span className={classes.members__info}>
        <b>Страна:</b> {user.country}
      </span>
      <span className={classes.members__info}>
        <b>Возраст: </b>
        {user.age}
      </span>
      <span className={classes.members__info}>
        <b>О себе: </b>
        {user.about}
      </span>
      <span className={classes.members__info}>
        <b>Участие в данном проекте: </b>
        {user.impact}
      </span>
    </>
  );
};

MemberInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default MemberInfo;
