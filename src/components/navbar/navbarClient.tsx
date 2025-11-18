"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css";
import type { NavLink, NavbarCTA } from "../../types/navbarData";
import { trackButtonClick, trackModalOpen } from "@/src/utils/PostHogTracking";

type Props = {
  links: NavLink[];
  ctas: NavbarCTA;
};

export default function NavbarClient({ links, ctas }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const pathname = usePathname();
  const isCanadaContext = pathname.startsWith("/en-ca");
  const prefix = isCanadaContext ? "/en-ca" : "";
  
  const isExternalHref = (href: string) => href.startsWith("http");
  const primaryIsExternal = isExternalHref(ctas.primary.href);
  const secondaryIsExternal = isExternalHref(ctas.secondary.href);
  
  const getHref = (href: string) => {
    if (isExternalHref(href) || href.startsWith("#")) {
      return href;
    }
    return `${prefix}${href}`;
  };

  // Monthly countdown timer - resets at end of each month
  useEffect(() => {
    const getEndOfCurrentMonth = () => {
      const now = new Date();
      // Get the last day of the current month
      const year = now.getFullYear();
      const month = now.getMonth();
      // Get the last day of the month (0 means last day of previous month, so we use next month's 0th day)
      const lastDay = new Date(year, month + 1, 0).getDate();
      // Set target to last day of current month at 11:59:59 PM
      return new Date(year, month, lastDay, 23, 59, 59).getTime();
    };

    const updateCountdown = () => {
      const now = new Date().getTime();
      const targetDate = getEndOfCurrentMonth();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        // If we've passed the end of the month, reset to next month's end
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav 
        className={styles.navContainer}
        style={{
          backdropFilter: 'blur(120px)',
          WebkitBackdropFilter: 'blur(120px)',
        }}
      >
      <div className={styles.navInner}>
        {/* Left Section: Logo */}
        <div className={styles.navLeft}>
          <Link href={isCanadaContext ? "/en-ca" : "/"} className={styles.navLogoText}>
            FLASHFIRE
          </Link>
        </div>

        {/* Center Section: Links (Desktop) */}
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.href} className={styles.navLinkItem}>
              <a href={getHref(link.href)} className={styles.navLinkText}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section: CTAs (Desktop) */}
        <div className={styles.navRight}>
          {secondaryIsExternal ? (
            <a
              href={ctas.secondary.href}
              className={styles.navSecondaryButton}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackButtonClick(ctas.secondary.label, "navigation", "secondary", {
                  button_location: "navbar_desktop",
                  navigation_type: "secondary_cta"
                });
              }}
            >
              {ctas.secondary.label}
            </a>
          ) : (
            <Link
              href={ctas.secondary.href}
              className={styles.navSecondaryButton}
              onClick={() => {
                trackButtonClick(ctas.secondary.label, "navigation", "secondary", {
                  button_location: "navbar_desktop",
                  navigation_type: "secondary_cta"
                });
              }}
            >
              {ctas.secondary.label}
            </Link>
          )}
          {primaryIsExternal ? (
            <a
              href={ctas.primary.href}
              className={styles.navPrimaryButton}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackButtonClick(ctas.primary.label, "navigation", "cta", {
                  button_location: "navbar_desktop",
                  navigation_type: "primary_cta"
                });
                if (ctas.primary.href.includes("calendly")) {
                  trackModalOpen("calendly_modal", "navigation_button", {
                    trigger_source: "navbar_cta"
                  });
                }
              }}
            >
              {ctas.primary.label}
            </a>
          ) : (
            <Link
              href={ctas.primary.href}
              className={styles.navPrimaryButton}
              onClick={() => {
                trackButtonClick(ctas.primary.label, "navigation", "cta", {
                  button_location: "navbar_desktop",
                  navigation_type: "primary_cta"
                });
                if (ctas.primary.href.includes("calendly")) {
                  trackModalOpen("calendly_modal", "navigation_button", {
                    trigger_source: "navbar_cta"
                  });
                }
              }}
            >
              {ctas.primary.label}
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={styles.navMenuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={isMenuOpen ? styles.iconClose : styles.iconHamburger}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className={styles.navMobileMenu}>
          <ul className={styles.navMobileLinks}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={getHref(link.href)} className={styles.navMobileLink}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.navMobileButtons}>
            <a
              href={ctas.secondary.href}
              className={styles.navMobileSecondary}
              target={secondaryIsExternal ? "_blank" : undefined}
              rel={secondaryIsExternal ? "noopener noreferrer" : undefined}
              onClick={() => {
                trackButtonClick(ctas.secondary.label, "navigation", "secondary", {
                  button_location: "navbar_mobile",
                  navigation_type: "secondary_cta"
                });
              }}
            >
              {ctas.secondary.label}
            </a>
            <a
              href={ctas.primary.href}
              className={styles.navMobilePrimary}
              target={primaryIsExternal ? "_blank" : undefined}
              rel={primaryIsExternal ? "noopener noreferrer" : undefined}
              onClick={() => {
                trackButtonClick(ctas.primary.label, "navigation", "cta", {
                  button_location: "navbar_mobile",
                  navigation_type: "primary_cta"
                });
                if (ctas.primary.href.includes("calendly")) {
                  trackModalOpen("calendly_modal", "navigation_button", {
                    trigger_source: "navbar_mobile_cta"
                  });
                }
              }}
            >
              {ctas.primary.label}
            </a>
          </div>
        </div>
      )}
    </nav>

    {/* Black Friday Sale Banner - Below Navbar */}
    <div className="w-full bg-[#f5f5f0] border-t border-[rgba(241,241,241,0.2)] py-1 px-4 flex items-center justify-center max-[900px]:py-1 max-[900px]:px-3 font-['Space_Grotesk',sans-serif]">
      <div className="flex items-center justify-center gap-3 flex-wrap max-w-[1400px] w-full max-[900px]:gap-2 max-[600px]:flex-col max-[600px]:gap-3">
        <span className="font-bold text-[1.4rem] text-black tracking-[0.02em] uppercase max-[900px]:text-[0.95rem]">
          BLACK FRIDAY SALE
        </span>
        <span className="text-[#ff4c00] text-[1.2rem] font-bold leading-none max-[900px]:text-base">
          ✱
        </span>
        <span className="text-[0.95rem] text-black font-medium max-[900px]:text-[0.85rem]">
          Get flat $20 discount on all plans
        </span>
        <span className="text-[#ff4c00] text-[1.2rem] font-bold leading-none max-[900px]:text-base">
          ✱
        </span>
        <div className="flex gap-2 items-center max-[600px]:gap-1.5">
          <div className="bg-white border-2 border-black rounded-[0.5rem] py-2 px-3 min-w-[60px] text-center shadow-[0_2px_4px_rgba(255,76,0,0.2),0_5px_2px_#ff4c00] max-[900px]:min-w-[50px] max-[900px]:py-1.5 max-[900px]:px-2.5 max-[600px]:min-w-[45px] max-[600px]:py-1.5 max-[600px]:px-2">
            <div className="font-extrabold text-[1.25rem] text-black leading-[1.2] mb-[0.2rem] max-[900px]:text-[1.1rem] max-[600px]:text-base">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <div className="text-[0.7rem] text-black font-medium uppercase tracking-[0.02em] max-[900px]:text-[0.65rem] max-[600px]:text-[0.6rem]">
              Days
            </div>
          </div>
          <div className="bg-white border-2 border-black rounded-[0.5rem] py-2 px-3 min-w-[60px] text-center shadow-[0_2px_4px_rgba(255,76,0,0.2),0_5px_2px_#ff4c00] max-[900px]:min-w-[50px] max-[900px]:py-1.5 max-[900px]:px-2.5 max-[600px]:min-w-[45px] max-[600px]:py-1.5 max-[600px]:px-2">
            <div className="font-extrabold text-[1.25rem] text-black leading-[1.2] mb-[0.2rem] max-[900px]:text-[1.1rem] max-[600px]:text-base">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-[0.7rem] text-black font-medium uppercase tracking-[0.02em] max-[900px]:text-[0.65rem] max-[600px]:text-[0.6rem]">
              Hrs
            </div>
          </div>
          <div className="bg-white border-2 border-black rounded-[0.5rem] py-2 px-3 min-w-[60px] text-center shadow-[0_2px_4px_rgba(255,76,0,0.2),0_5px_2px_#ff4c00] max-[900px]:min-w-[50px] max-[900px]:py-1.5 max-[900px]:px-2.5 max-[600px]:min-w-[45px] max-[600px]:py-1.5 max-[600px]:px-2">
            <div className="font-extrabold text-[1.25rem] text-black leading-[1.2] mb-[0.2rem] max-[900px]:text-[1.1rem] max-[600px]:text-base">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-[0.7rem] text-black font-medium uppercase tracking-[0.02em] max-[900px]:text-[0.65rem] max-[600px]:text-[0.6rem]">
              Mins
            </div>
          </div>
          <div className="bg-white border-2 border-black rounded-[0.5rem] py-2 px-3 min-w-[60px] text-center shadow-[0_2px_4px_rgba(255,76,0,0.2),0_5px_2px_#ff4c00] max-[900px]:min-w-[50px] max-[900px]:py-1.5 max-[900px]:px-2.5 max-[600px]:min-w-[45px] max-[600px]:py-1.5 max-[600px]:px-2">
            <div className="font-extrabold text-[1.25rem] text-black leading-[1.2] mb-[0.2rem] max-[900px]:text-[1.1rem] max-[600px]:text-base">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-[0.7rem] text-black font-medium uppercase tracking-[0.02em] max-[900px]:text-[0.65rem] max-[600px]:text-[0.6rem]">
              Secs
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
