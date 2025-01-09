import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    
    <section className={styles.container} id="about">
      <h2 className={styles.title}>-About ME-</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.Image} src={getImageUrl("about/education.png")} alt="education icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
              I'm currently a first-year undergraduate student at Alma College in Michigan, pursuing Bachelor in Computer Science.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img className={styles.Image} src={getImageUrl("about/Goal.png")} alt="goal icon" />
            <div className={styles.aboutItemText}>
              <h3>Future Goals</h3>
              <p>
              I'm fascinated about Web development as well as cloud computing. I am actively exploring both fields and planning to build a career in them.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img className={styles.Image} src={getImageUrl("about/face.png")} alt="face icon" />
            <div className={styles.aboutItemText}>
              <h3>Personal Interests</h3>
              <p>
              In addition to my primary studies, I am undertaking a Minor in New Media Studies (NMS) and proudly representing my college as an Esports player in Valorant.
              </p>
            </div>
          </li>
        </ul>
        
      </div>
    </section>
  );
};
