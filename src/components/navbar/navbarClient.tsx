"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css";
import type { NavLink, NavbarCTA } from "../../types/navbarData";

type Props = {
  links: NavLink[];
  ctas: NavbarCTA;
};

export default function NavbarClient({ links, ctas }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
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
            >
              {ctas.secondary.label}
            </a>
          ) : (
            <Link
              href={ctas.secondary.href}
              className={styles.navSecondaryButton}
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
            >
              {ctas.primary.label}
            </a>
          ) : (
            <Link
              href={ctas.primary.href}
              className={styles.navPrimaryButton}
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
            >
              {ctas.secondary.label}
            </a>
            <a
              href={ctas.primary.href}
              className={styles.navMobilePrimary}
              target={primaryIsExternal ? "_blank" : undefined}
              rel={primaryIsExternal ? "noopener noreferrer" : undefined}
            >
              {ctas.primary.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
