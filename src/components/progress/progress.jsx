import React from "react";
import classes from "./progress.module.css";
import PropTypes from "prop-types";

const Progress = (name, percent) => {
  //   const percent = Math.round(percent);
  return (
    <div>
      <h3 className={classes.progressTitle}>HTML</h3>
      <div key={name} className={classes.progress}>
        <div className={classes.progressFill} style={{ width: "80%" }}></div>
        <span className={classes.progressText}>80%</span>
      </div>
    </div>
  );
};

Progress.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
};

export default Progress;
