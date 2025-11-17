import Image from "next/image";
import { WHATSAPP_SUPPORT_URL } from "@/src/utils/whatsapp";
import styles from "./homePageResultStats.module.css";

export default function HomePageResultStats() {
  return (
    <section className={styles.resultSection}>
      {/* Right Side (Image first in HTML so it appears on top on mobile) */}
      <div className={styles.resultRight}>
        <Image
          src="/images/heroResultImage.jpg"
          alt="Interview illustration"
          className={styles.resultImage}
          width={700}
          height={700}
          priority
        />
      </div>

      {/* Left Side */}
      <div className={styles.resultLeft}>
        <p className={styles.resultTagline}>RESULT THAT SPEAKS</p>

        <h2 className={styles.resultHeading}>
          Interviews in weeks.
          <br />
          Offers in months.
        </h2>

        <div className={styles.resultStats}>
          <div className={styles.resultStatBox}>
            <h3 className={styles.resultStatNumber}>95%</h3>
            <hr className={styles.resultStatsHR} />
            <p className={styles.resultStatText}>
              Users land interview call within a month*
            </p>
          </div>
          <div className={styles.resultStatBox}>
            <h3 className={styles.resultStatNumber}>90%</h3>
            <hr className={styles.resultStatsHR} />
            <p className={styles.resultStatText}>
              Users get job offer within 3 months*
            </p>
          </div>
        </div>

        <p className={styles.resultNote}>
          *Based on verified user data from 2024-25 cohort.
        </p>

        <a
          href={WHATSAPP_SUPPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resultButton}
        >
          Get Me Interview →
        </a>
      </div>
    </section>
  );
}
