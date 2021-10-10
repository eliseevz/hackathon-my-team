import React from "react";
import classes from "./progress.module.css";
import Progress from "./progress";

const ProgressList = ({ user }) => {
  return (
    <div className={classes.progress__container}>
      <span>Прогресс: </span>
      {user.stack.map(({ name, prog }) => (
        <Progress name={name} percent={prog} key={name} />
      ))}
    </div>
  );
};

export default ProgressList;
