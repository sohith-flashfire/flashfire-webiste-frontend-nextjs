"use client";

import Image from "next/image";
import styles from "./homePageCareerCTA.module.css";
import { FaBolt } from "react-icons/fa";
import { WHATSAPP_SUPPORT_URL } from "@/src/utils/whatsapp";
import { trackButtonClick, trackExternalLink } from "@/src/utils/PostHogTracking";

export default function HomePageCareerCTA() {
  return (
    <section className={styles.careerSection}>
      <div className={styles.container}>
        {/* === LEFT: Content === */}
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>
            Just Graduated? Let's Fire Up Your Career!
          </h2>

          <p className={styles.subtext}>
            You've done your part, now let Flashfire handle the job hunt. <br />
            Our AI-powered team gets your profile recruiter-ready and{" "}
            <strong>
              applies to the right jobs so you can land interviews faster.
            </strong>
          </p>

          <ul className={styles.featuresList}>
            <li>
              <FaBolt className={styles.icon} /> Resume built from scratch &
              tailored for every job
            </li>
            <li>
              <FaBolt className={styles.icon} /> LinkedIn optimized for
              recruiter visibility
            </li>
            <li>
              <FaBolt className={styles.icon} /> AI-backed job targeting for
              your goals
            </li>
            <li>
              <FaBolt className={styles.icon} /> Weekly WhatsApp updates
            </li>
          </ul>

          <div className={styles.ctaRow}>
            <a
              href={WHATSAPP_SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              onClick={() => {
                trackButtonClick("Schedule a Free Career Call", "career_cta", "cta", {
                  button_location: "career_section",
                  section: "career_cta"
                });
                trackExternalLink(WHATSAPP_SUPPORT_URL, "Schedule a Free Career Call", "career_cta", {
                  link_type: "whatsapp_support",
                  contact_method: "whatsapp"
                });
              }}
            >
              Schedule a Free Career Call
            </a>
            <div className={styles.userNote}>
              <div className={styles.userAvatars}>
                <Image
                  src="/images/user1.jpg"
                  alt="user1"
                  width={28}
                  height={28}
                  className={styles.avatar}
                />
                <Image
                  src="/images/user2.jpg"
                  alt="user2"
                  width={28}
                  height={28}
                  className={styles.avatar}
                />
                <Image
                  src="/images/user3.jpg"
                  alt="user3"
                  width={28}
                  height={28}
                  className={styles.avatar}
                />
              </div>
              <p>
                Join <span className={styles.highlight}>100+</span> graduates
                who landed offers at top companies.
              </p>
            </div>
          </div>
        </div>

        {/* === RIGHT: Stats Grid === */}
        <div className={styles.rightGrid}>
          <div className={styles.rightGridTop}>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>SUCCESS RATE</p>
              <h3 className={styles.statValue}>95%</h3>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>JOB LANDED</p>
              <h3 className={styles.statValue}>50+</h3>
            </div>
          </div>
          <div className={styles.rightGridBottom}>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>HOURS SAVED</p>
              <h3 className={styles.statValue}>150+</h3>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>SUPPORT</p>
              <h3 className={styles.statValue}>24/7</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
