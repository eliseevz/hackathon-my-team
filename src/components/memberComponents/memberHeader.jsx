import React from "react";
import classes from "./memberCard.module.css";
import Badge from "../UI/badge/badge";
import PropTypes from "prop-types";
import FavoriteButton from "../favoriteComponents/favoriteButton/favoriteButton";

const MemberHeader = ({ user }) => {
  return (
    <div className={`d-flex flex-row align-items-center mb-3 ${classes.classForFav}`}>
      <h1 className={classes.members__title}>{user.name}</h1>
      <div className={`d-flex flex-row  ${classes.members__title}`}>
        {user.role.map((role) => (
          <span key={role.type}>
            <Badge type={role.type} text={role.name} />
          </span>
        ))}
      </div>
        {console.log(user.isFavorite)}
        <FavoriteButton size={30} id={user.id} status={user.isFavorite} />
    </div>
  );
};

MemberHeader.propTypes = {
  user: PropTypes.object.isRequired,
};

export default MemberHeader;
