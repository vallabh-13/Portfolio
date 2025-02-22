import React from "react";

import styles from "./certificateCard.module.css";
import { getImageUrl } from "../../utils";

export const CertificateCard = ({
  certificate: { title, imageSrc, description, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
          View certificate
        </a>
      </div>
    </div>
  );
};
