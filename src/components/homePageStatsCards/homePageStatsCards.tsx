import styles from "./homePageStatsCards.module.css";

export default function HomePageStatsCards() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 3V10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>
            <span className={styles.highlight}>200x</span> Return on Investment
          </h3>
          <p>
            Clients see 200x ROI with higher salaries, faster offers, and
            lasting growth.
          </p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>
            <span className={styles.highlight}>300k+</span> Applications Sent
            Smartly
          </h3>
          <p>
            Over 300k applications optimized with ATS-friendly resumes and
            custom cover letters.
          </p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>
            <span className={styles.highlight}>1 Week</span> to Your First
            Interview
          </h3>
          <p>
            Flashfire users report getting interview calls within their first 7
            days of usage.
          </p>
        </div>
      </div>
    </section>
  );
}

