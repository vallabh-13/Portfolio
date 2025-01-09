import React from 'react'
import styles from "./certificates.module.css";

import certificate from "../../data/certificate.json";
import { CertificateCard } from "./certificateCard";
export const Certificates = () => {
    return (
        <section className={styles.container} id="certificate">
          <h2 className={styles.title}>-certificates-</h2>
          <div className={styles.certificate}>
            {certificate.map((certificate, id) => {
              return <CertificateCard key={id} certificate={certificate} />;
            })}
          </div>
        </section>
      );
    };
      