import React, { useState } from "react";
import classes from "./progress.module.css";
import PropTypes from "prop-types";

const Progress = ({ name, percent }) => {
  const percentRounded = Math.round(percent);

  const [value, setValue] = useState(0);

  React.useEffect(() => {
    setValue(percent);
  });

  return (
    <div>
      <p className={classes.progressTitle}>{name}</p>
      <div className={classes.progress}>
        <div
          className={classes.progressFill}
          style={{ width: value + `%` }}
        ></div>
        <span className={classes.progressText}>{percentRounded}</span>
      </div>
    </div>
  );
};

Progress.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Progress;
