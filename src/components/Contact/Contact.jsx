import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>I'm available for any inquiries.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:bhanudasmahadikijs@gmail.com" target="_blank" rel="noopener noreferrer">bhanudasmahadikijs@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/bhanudas-mahadik/" target="_blank" rel="noopener noreferrer" >linkedin.com/bhanudas-mahadik</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/vallabh-13" target="_blank" rel="noopener noreferrer">Github.com/vallabh-13</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/bot2.png")} alt="codedex icon" className={styles.imgg} />
          <a href="https://www.codedex.io/@Bhanudas" target="_blank" rel="noopener noreferrer" >Codedex.io/@Bhanudas</a>
        </li>
      </ul>
    </footer>
  );
};
