"use client";

import { useState } from "react";
import styles from "./homePageFAQ.module.css";
import { FaPlus, FaTimes } from "react-icons/fa";
import { questionsData } from "@/src/data/questionsData";
import Image from "next/image";

export default function HomePageFAQClient() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.header}>
        <h2>Question? We Got You Answers.</h2>
        <p>
          We get it, AI job search can sound complex. Here’s everything
          explained, plain and simple.
        </p>
      </div>

      <div className={styles.faqContainer}>
        {questionsData.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => handleToggle(index)}
            >
              <span>{faq.question}</span>
              <span className={styles.icon}>
                {activeIndex === index ? <FaTimes /> : <FaPlus />}
              </span>
            </button>

            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* === Book a Demo CTA === */}
      <div className={styles.demoSectionOuter}>
        <div className={`${styles.demoSection} bg-[rgba(245,93,29,1)]`}>
          <h5 className={styles.demoSubheading}>
            GOT FURTHER QUESTIONS? LET&rsquo;S TALK!
          </h5>

          <h2 className={styles.demoHeading}>
            BOOK A DEMO{" "}
            <span
              className={`${styles.fireIcon} inline-flex items-center -mx-4 `}
            >
              <Image
                src="/images/character.png"
                alt="Flashfire mascot"
                width={96}
                height={96}
                className="w-20 h-20  left-1 max-[600px]:w-16 max-[600px]:h-16"
              />
            </span>{" "}
            CALL
          </h2>

          <p className={styles.demoText}>
            We get it, <em>finding the right job isn’t easy.</em> Book a quick
            chat with our founder and see how Flashfire can help you land
            interviews faster.
          </p>

          <button className={styles.demoButton}>Book My Demo Call →</button>

          <p className={styles.demoNote}>
            Limited slots available. Book your call now!
          </p>
        </div>
      </div>
    </section>
  );
}
