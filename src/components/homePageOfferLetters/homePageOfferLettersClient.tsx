"use client";

import styles from "./homePageOfferLetters.module.css";
import Image from "next/image";
import Link from "next/link";

interface OfferLetterData {
  name: string;
  company: string;
  linkedinUrl: string;
  imagePath: string;
  profileImagePath?: string;
}

const offerLetters: OfferLetterData[] = [
  {
    name: "Kanchan",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/dr-kanchan-yadav-ba0b18106/",
    imagePath: "/images/kanchan_offer.png",
    profileImagePath: "/images/KANCHAN.png",
  },
  {
    name: "Uhtiha",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/uhitha-doddapaneni-903932128/",
    imagePath: "/images/uhitha_offer.png",
    profileImagePath: "/images/uhitha.jpeg",
  },
  {
    name: "Anjali",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/anjalishah6198/",
    imagePath: "/images/anjali_offer.png",
    profileImagePath: "/images/anjali.jpeg",
  },
  {
    name: "Akrati",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/akratimalviya/",
    imagePath: "/images/akrati_offer.png",
    profileImagePath: "/images/akrati.jpeg",
  },
  {
    name: "Neha",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/neha-senapati/",
    imagePath: "/images/neha_offer.png",
    profileImagePath: "/images/neha.png",
  },
  {
    name: "Teja",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/tejasunkara/",
    imagePath: "/images/teja_offer.png",
    profileImagePath: "/images/TEJA.jpeg",
  },
  {
    name: "Aryan",
    company: "Company",
    linkedinUrl: "#",
    imagePath: "/images/aryan_offer.png",
    profileImagePath: "/images/aryan.jpg",
  },
  {
    name: "Amit",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/amit-gupta-828570242/",
    imagePath: "/images/amit_offer.png",
    profileImagePath: "/images/amit.jpg",
  },
  {
    name: "Rudraksh",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/rudraksh-tripathi-89291223b/",
    imagePath: "/images/rudraksh_offer.png",
    profileImagePath: "/images/rudraksh.jpg",
  },
  {
    name: "Sai Krishna",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/sai-krishna-grandhi/",
    imagePath: "/images/saikrishna_offer.png",
    profileImagePath: "/images/SAI KRISHNA.jpeg",
  },
  {
    name: "Rijul Jain",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/-rijuljain-/",
    imagePath: "/images/rijul_offer.png",
    profileImagePath: "/images/rijul.jpg",
  },
  {
    name: "Aman Guleria",
    company: "Company",
    linkedinUrl: "https://www.linkedin.com/in/aman-guleria/",
    imagePath: "/images/aman_offer.png",
    profileImagePath: "/images/aman.jpg",
  },
];

export default function HomePageOfferLettersClient() {
  return (
    <section className={styles.offerSection}>
      <h2 className={styles.offerHeading}>25+ Offer Letter Received</h2>

      <div className={styles.offerMarqueeWrapper}>
        <div className={styles.offerMarquee}>
          {offerLetters.map((offer, i) => (
            <div key={i} className={styles.offerCard}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={offer.imagePath}
                  alt={`Offer Letter - ${offer.name}`}
                  width={300}
                  height={400}
                  className={styles.offerImage}
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/offer-placeholder.jpg";
                  }}
                />
              </div>

              {/* Profile Overlay */}
              <div className={styles.offerOverlay}>
                <div className={styles.profileInfo}>
                  <div className={styles.avatar}>
                    <Image
                      src={offer.profileImagePath || offer.imagePath}
                      alt={offer.name}
                      width={28}
                      height={28}
                      className={styles.avatarImage}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <p className={styles.name}>{offer.name}</p>
                    <p className={styles.company}>{offer.company}</p>
                  </div>
                </div>
                {offer.linkedinUrl !== "#" ? (
                  <Link
                    href={offer.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinIcon}
                  >
                    in
                  </Link>
                ) : (
                  <span className={`${styles.linkedinIcon} ${styles.linkedinIconDummy}`}>
                    in
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* duplicate for infinite loop */}
          {offerLetters.map((offer, i) => (
            <div key={`dup-${i}`} className={styles.offerCard}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src={offer.imagePath}
                  alt={`Offer Letter - ${offer.name}`}
                  width={300}
                  height={400}
                  className={styles.offerImage}
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/offer-placeholder.jpg";
                  }}
                />
              </div>

              <div className={styles.offerOverlay}>
                <div className={styles.profileInfo}>
                  <div className={styles.avatar}>
                    <Image
                      src={offer.profileImagePath || offer.imagePath}
                      alt={offer.name}
                      width={28}
                      height={28}
                      className={styles.avatarImage}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <p className={styles.name}>{offer.name}</p>
                    <p className={styles.company}>{offer.company}</p>
                  </div>
                </div>
                {offer.linkedinUrl !== "#" ? (
                  <Link
                    href={offer.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinIcon}
                  >
                    in
                  </Link>
                ) : (
                  <span className={`${styles.linkedinIcon} ${styles.linkedinIconDummy}`}>
                    in
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
