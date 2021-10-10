import React from "react";
import PropTypes from "prop-types";
import classes from "./memberCard.module.css";
import { Link } from "react-router-dom";

const MemberCard = ({ imageURL, name, id, memberId }) => {
  return (
    <div className={classes.member__card}>
      <Link
        to={`/members/${id}`}
        className={`d-flex align-items-center pt-1 pb-2 text-white ${classes.member__link}`}
      >
        <img src={imageURL} alt="img" className={classes.member__image} />
        <span>{name}</span>
        {memberId == id ? (
          <i class={`bi bi-arrow-right ${classes.member__choosen}`}></i>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
};

MemberCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  memberId: PropTypes.string.isRequired,
};

export default MemberCard;
