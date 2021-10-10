import React, { useState } from "react";
import { allMembers } from "../../API/API";
import MemberCard from "./memberCard";
import classes from "./otherMembers.module.css";

const OtherMembers = ({ memberId }) => {
  const [users, setUsers] = useState(allMembers);

  return (
    <div className={`  ${classes.other__members}`}>
      <p className=" p-3">Другие участники:</p>
      {users.map((user) => (
        <MemberCard {...user} key={user.id} memberId={memberId} />
      ))}
    </div>
  );
};

export default OtherMembers;
