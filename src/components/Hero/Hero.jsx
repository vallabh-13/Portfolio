import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
       <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hello! I'm Bhanudas Mahadik</h1>
        <p className={styles.description}>
        A Frontend Developer with 8 months of hands-on experience. Currently, mastering 3D web design using GSAP and Three.js, while exploring Kubernetes.</p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
    
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
