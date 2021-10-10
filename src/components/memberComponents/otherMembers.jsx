import React, { useState } from "react";
import { allMembers } from "../../API/API";
import MemberCard from "./memberCard";
import classes from "./otherMembers.module.css";
import PropTypes from "prop-types";

const OtherMembers = ({ memberId }) => {
  const [users] = useState(allMembers);

  return (
    <div className={`  ${classes.other__members}`}>
      <p className=" p-3">Другие участники:</p>
      {users.map((user) => (
        <MemberCard {...user} key={user.id} memberId={memberId} />
      ))}
    </div>
  );
};

MemberCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default OtherMembers;
