import React from "react";

import { Link } from "react-router-dom";
import styles from "./AboutRelocation.module.scss";

const AboutRelocation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionProgram}>
        <Link to="/program-relocation" className={styles.btnPrograming}>
          Програма релокації підприємства
        </Link>
        <Link to="/business-assistance" className={styles.btnHelp}>Допомога бізнесу</Link>
      </div>
    </div>
  );
};
export default AboutRelocation;
