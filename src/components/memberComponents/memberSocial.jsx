import React from "react";
import classes from "./memberCard.module.css";
import PropTypes from "prop-types";
import is from "is_js"

const MemberSocial = ({ user }) => {
  return (
    <div className="d-flex flex-column ">
      {" "}
      <img src={is.url(user.imageURL) ? user.imageURL : "https://grilcity.ru/assets/img/testimonials/placeholder.png"} alt="img" className={classes.members__image} />
      <div className=" mt-2 d-flex align-items-center justify-content-center">
        {user.socialMedia.map(({ name, link }) => (
          <a href={link} className={`pe-3 ${classes.socialMedia}`} key={name}>
            <i className={`social__media bi bi-${name} ${classes.icons}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

MemberSocial.propTypes = {
  user: PropTypes.object.isRequired,
};

export default MemberSocial;
