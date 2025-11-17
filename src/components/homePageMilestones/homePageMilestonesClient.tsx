"use client";

import Image from "next/image";
import styles from "./homePageMilestones.module.css";

export default function HomePageMilestonesClient() {
  // Fallback logo URLs for companies where Clearbit doesn't work
  const logoFallbacks: Record<string, string> = {
    IBM: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/150px-IBM_logo.svg.png",
  };

  const footerCompanies = [
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Google", domain: "google.com" },
    { name: "Apple", domain: "apple.com" },
    { name: "Meta", domain: "meta.com" },
    { name: "Netflix", domain: "netflix.com" },
    { name: "Tesla", domain: "tesla.com" },
    { name: "SpaceX", domain: "spacex.com" },
    { name: "Deloitte", domain: "deloitte.com" },
    { name: "IBM", domain: "ibm.com" },
    { name: "Oracle", domain: "oracle.com" },
    { name: "Salesforce", domain: "salesforce.com" },
    { name: "Twitter (X)", domain: "x.com" },
  ];

  const testimonials = [
    {
      company: "MiRUs",
      domain: "mirus.ai",
      text: "Flashfire guided me through my entire application process — I landed interviews at MiRUs within 10 days!",
      user: "Kanchan",
      role: "Software Engineer",
    },
    {
      company: "Google",
      domain: "google.com",
      text: "The resume booster and job tracker saved me hours daily. Got a Google offer in just 3 weeks!",
      user: "Uhtiha",
      role: "Software Engineer",
      image: "/images/uhitha.jpeg",
    },
    {
      company: "Skyworks Solutions",
      domain: "skyworksinc.com",
      text: "From job search chaos to clarity — I received interview calls in my first week using Flashfire!",
      user: "Anjali",
      role: "Software Engineer",
    },
    {
      company: "Akamai Technologies",
      domain: "akamai.com",
      text: "The AI-powered application system was incredible. Landed an Akamai interview within 2 weeks!",
      user: "Akrati",
      role: "Software Engineer",
      image: "/images/akrati.jpeg",
    },
    {
      company: "Deloitte",
      domain: "deloitte.com",
      text: "Flashfire's ATS optimization helped me stand out. Got multiple offers from top consulting firms!",
      user: "Neha",
      role: "Business Analyst",
      image: "/images/neha.png",
    },
    {
      company: "Amazon",
      domain: "amazon.com",
      text: "The automated application system was a game-changer. Landed an Amazon offer in just 2 weeks!",
      user: "Teja",
      role: "Software Engineer",
    },
    {
      company: "IBM",
      domain: "ibm.com",
      text: "The personalized cover letters and resume optimization got me noticed. IBM offer secured!",
      user: "Aryan",
      role: "Software Engineer",
      image: "/images/aryan.jpg",
    },
    {
      company: "Armorcode",
      domain: "armorcode.com",
      text: "Tracked 200+ applications effortlessly. Flashfire helped me land my dream role at Armorcode!",
      user: "Amit",
      role: "Software Engineer",
      image: "/images/amit.jpg",
    },
    {
      company: "State Street",
      domain: "statestreet.com",
      text: "Flashfire made everything structured and automated — helped me secure State Street interviews easily!",
      user: "Rudraksh",
      role: "Software Engineer",
      image: "/images/rudraksh.jpg",
    },
    {
      company: "Microsoft",
      domain: "microsoft.com",
      text: "From job search chaos to clarity — I received 4 interview calls in my first week using Flashfire!",
      user: "Sai Krishna",
      role: "Software Engineer",
    },
    {
      company: "Wise",
      domain: "wise.com",
      text: "The AI-powered resume tailoring was perfect. Received a Wise offer within a month!",
      user: "Rijul Jain",
      role: "Software Engineer",
      image: "/images/rijul.jpg",
    },
    {
      company: "Barclays",
      domain: "barclays.com",
      text: "Flashfire guided me through my entire application process — I landed interviews at Barclays within 10 days!",
      user: "Aman Guleria",
      role: "Software Engineer",
      image: "/images/aman.jpg",
    },
  ];

  return (
    <section className={styles.milestoneContainer}>
      {/* === Section Heading === */}
      <h4 className={styles.sectionHeading}>INTERVIEWS CRACKED BY OUR USERS</h4>

      {/* === Continuous Marquee Testimonials === */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {[...testimonials, ...testimonials].map((t, i) => {
            return (
              <div key={i} className={styles.marqueeCard}>
                <div className={styles.companyHeader}>
                  <div className={styles.companyLogoIcon}>
                    <Image
                      src={`https://logo.clearbit.com/${t.domain}`}
                      alt={t.company}
                      width={32}
                      height={32}
                      className={styles.companyLogo}
                      onError={(e) => {
                        // Fallback to company name if logo fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className={styles.companyName}>{t.company}</p>
                </div>
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.userInfo}>
                  {t.image ? (
                    <div className={styles.userAvatar}>
                      <Image
                        src={t.image}
                        alt={t.user}
                        width={40}
                        height={40}
                        className={styles.userAvatarImage}
                      />
                    </div>
                  ) : (
                    <div className={styles.userAvatar}></div>
                  )}
                  <div>
                    <p className={styles.userName}>{t.user}</p>
                    <p className={styles.userCompany}>{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* === Footer Logos === */}
      <div className={styles.footerLogos}>
        {footerCompanies.map((company, i) => {
          const fallbackUrl = logoFallbacks[company.name];
          const logoSrc = fallbackUrl || `https://logo.clearbit.com/${company.domain}`;
          
          return (
            <span key={i}>
              <span className={styles.footerIcon}>
                <Image
                  src={logoSrc}
                  alt={company.name}
                  width={24}
                  height={24}
                  className={styles.footerLogo}
                  onError={(e) => {
                    // If fallback exists and we're using Clearbit, try fallback
                    if (!fallbackUrl && logoFallbacks[company.name]) {
                      const target = e.target as HTMLImageElement;
                      target.src = logoFallbacks[company.name];
                      return;
                    }
                    // Otherwise hide the image
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </span>
              {company.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}
