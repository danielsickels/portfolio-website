"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
import { FaGithub } from "react-icons/fa";
import GradientText from "../GradientText";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

interface ProjectDropdownItem {
  label: string;
  href: string;
  external?: boolean;
  showGithubIcon?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MEME_MONSTERS_LINK = {
  label: "Meme Monsters",
  href: "https://meme-monsters.shoeboxstudios.io/",
  external: true as const,
};

const PROJECT_DROPDOWN_ITEMS: ProjectDropdownItem[] = [
  { label: "All Projects", href: "/projects" },
  { label: "SmartBarLighting", href: "https://barapp.dannysickels.com/", external: true },
  { label: "Brogram", href: "https://brogram.dannysickels.com/", external: true },
  { label: "HappyTracker", href: "https://happytracker.dannysickels.com/", external: true },
  { label: "Portfolio Website", href: "https://github.com/danielsickels/portfolio-website", external: true, showGithubIcon: true },
  { label: "Fighter Game", href: "https://github.com/danielsickels/fighter-game", external: true, showGithubIcon: true },
  { label: "Puzzle Game", href: "https://github.com/danielsickels/puzzlegame", external: true, showGithubIcon: true },
  { label: "TriviaGame", href: "https://github.com/danielsickels/bible-v-avatar-trivia", external: true, showGithubIcon: true },
];

const SCROLL_THRESHOLD = 120;
const FADE_THRESHOLD = 60;

const DROPDOWN_ITEM_CLASS =
  "flex items-center justify-between w-full gap-2 px-3 py-2.5 text-sm font-medium rounded-lg text-primary hover:bg-primary/20 transition-colors text-left min-w-[180px]";

const Navbar = () => {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const projectsDropdownRef = useRef<HTMLLIElement>(null);

  const isProjectsActive = pathname === "/projects";
  const activeIndex = NAV_ITEMS.findIndex((item) => {
    if (item.external) return false;
    if (item.href === "/") return pathname === "/";
    return pathname?.startsWith(item.href) ?? false;
  });

  const handleScroll = useCallback(() => {
    const y = typeof window !== "undefined" ? window.scrollY : 0;
    setScrollDirection(y > lastScrollY ? "down" : "up");
    setLastScrollY(y);
    setScrollY(y);
  }, [lastScrollY]);

  useEffect(() => {
    setScrollY(typeof window !== "undefined" ? window.scrollY : 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    if (!mobileMenuOpen) setProjectsDropdownOpen(false);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false);
      }
    };
    if (projectsDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [projectsDropdownOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const isCollapsed = scrollY > SCROLL_THRESHOLD;
  const isFaded = scrollY > FADE_THRESHOLD && scrollDirection === "down";
  const navOpacity = isFaded && !isCollapsed ? Math.max(0, 1 - (scrollY - FADE_THRESHOLD) / 40) : 1;
  const navTranslate = isFaded && !isCollapsed ? Math.min(-20, -(scrollY - FADE_THRESHOLD) / 2) : 0;

  const ProjectsDropdown = ({ isMobile = false }: { isMobile?: boolean }) => {
    const triggerClass =
      "inline-flex items-center gap-1 px-4 py-3 rounded-xl transition-all duration-200 font-medium " +
      (isProjectsActive
        ? "bg-primary text-[rgb(26,30,36)]"
        : "text-primary hover:bg-primary/20 hover:translate-x-1");

    const dropdownContent = (
      <ul className="absolute top-full left-0 mt-1 py-1 bg-[rgb(26,30,36)] border border-primary/30 rounded-lg shadow-xl z-50 min-w-[180px]">
        {PROJECT_DROPDOWN_ITEMS.map((item) => (
          <li key={item.label}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={DROPDOWN_ITEM_CLASS}
                onClick={() => {
                  closeMobileMenu();
                  setProjectsDropdownOpen(false);
                }}
              >
                <span>{item.label}</span>
                {item.showGithubIcon ? <FaGithub className="h-4 w-4 shrink-0" /> : <span className="w-4 h-4 shrink-0" />}
              </a>
            ) : (
              <Link
                href={item.href}
                className={DROPDOWN_ITEM_CLASS}
                onClick={() => {
                  closeMobileMenu();
                  setProjectsDropdownOpen(false);
                }}
              >
                <span>{item.label}</span>
                <span className="w-4 h-4 shrink-0" />
              </Link>
            )}
          </li>
        ))}
      </ul>
    );

    if (isMobile) {
      return (
        <>
          <button
            onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
            className={`block w-full ${triggerClass} text-left`}
            aria-expanded={projectsDropdownOpen}
          >
            Projects
            <CaretDown
              className={`h-4 w-4 shrink-0 transition-transform ${projectsDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          {projectsDropdownOpen && (
            <div className="relative mt-1 pl-2 border-l-2 border-primary/30">
              {PROJECT_DROPDOWN_ITEMS.map((item) => (
                <div key={item.label} className="py-0.5">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={DROPDOWN_ITEM_CLASS}
                      onClick={() => {
                        closeMobileMenu();
                        setProjectsDropdownOpen(false);
                      }}
                    >
                      <span>{item.label}</span>
                      {item.showGithubIcon ? <FaGithub className="h-4 w-4 shrink-0" /> : <span className="w-4 h-4 shrink-0" />}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={DROPDOWN_ITEM_CLASS}
                      onClick={() => {
                        closeMobileMenu();
                        setProjectsDropdownOpen(false);
                      }}
                    >
                      <span>{item.label}</span>
                      <span className="w-4 h-4 shrink-0" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      );
    }

    return (
      <li ref={projectsDropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
          className={triggerClass}
          aria-expanded={projectsDropdownOpen}
        >
          Projects
          <CaretDown
            className={`h-4 w-4 shrink-0 transition-transform ${projectsDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {projectsDropdownOpen && dropdownContent}
      </li>
    );
  };

  const NavLinks = () => (
    <>
      {NAV_ITEMS.map((item, index) => {
        const isActive = activeIndex === index;
        const linkClass =
          "inline-block px-4 py-3 rounded-xl transition-all duration-200 font-medium " +
          (isActive
            ? "bg-primary text-[rgb(26,30,36)]"
            : "text-primary hover:bg-primary/20 hover:translate-x-1");
        return (
          <li key={item.label}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className={linkClass} onClick={closeMobileMenu}>
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
      <ProjectsDropdown />
      <li>
        <a
          href={MEME_MONSTERS_LINK.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl transition-all duration-200 hover:translate-x-1"
          onClick={closeMobileMenu}
        >
          <GradientText
            colors={["rgba(0,173,181,0.75)", "rgba(0,229,255,0.55)", "rgba(255,107,157,0.7)", "rgba(57,62,70,0.65)"]}
            className="font-medium px-4 py-3 rounded-xl bg-[rgb(26,30,36)]/30 backdrop-blur-sm"
            animationSpeed={8}
            direction="horizontal"
            pauseOnHover
          >
            {MEME_MONSTERS_LINK.label}
          </GradientText>
        </a>
      </li>
    </>
  );

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 p-3 sm:p-4 z-50 bg-transparent pointer-events-none"
        aria-hidden={isCollapsed}
      >
        <div
          className="w-full max-w-7xl mx-auto px-2 sm:px-4 flex flex-row justify-between md:justify-start md:gap-4 items-center pointer-events-auto transition-all duration-300 ease-out"
          style={{
            opacity: isCollapsed ? 0 : navOpacity,
            transform: isCollapsed ? "translateY(-100%) scale(0.9)" : `translateY(${navTranslate}px)`,
          }}
        >
          <Link
            href="/"
            className="text-primary hover:opacity-90 text-base sm:text-lg md:text-xl font-semibold transition-opacity shrink-0"
          >
            Danny Sickels
          </Link>

          {/* Desktop nav - hidden on mobile */}
          <nav className="hidden md:flex overflow-x-auto md:overflow-visible min-w-0 flex-1 justify-end">
            <ul className="flex gap-4 lg:gap-8 list-none p-0 m-0 text-primary text-base">
              <NavLinks />
            </ul>
          </nav>

          {/* Mobile hamburger - animated */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center rounded-lg text-primary hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[rgb(26,30,36)]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-0.5" : "translate-y-[-6px]"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-[6px]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay - slide-in from right */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[rgb(26,30,36)]/95 backdrop-blur-xl"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
        <div
          className={`absolute top-0 right-0 h-full w-[min(85vw,320px)] bg-[rgb(26,30,36)] border-l border-primary/30 shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="pt-20 px-4" onClick={(e) => e.stopPropagation()}>
            <ul className="flex flex-col gap-1 list-none p-0 m-0">
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeIndex === index;
                const linkClass =
                  "block px-4 py-3 rounded-xl transition-all duration-200 font-medium " +
                  (isActive
                    ? "bg-primary text-[rgb(26,30,36)]"
                    : "text-primary hover:bg-primary/20");
                return (
                  <li
                    key={item.label}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className={linkClass} onClick={closeMobileMenu}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
              <li className="animate-fade-in" style={{ animationDelay: `${NAV_ITEMS.length * 50}ms` }}>
                <ProjectsDropdown isMobile />
              </li>
              <li
                className="animate-fade-in"
                style={{ animationDelay: `${(NAV_ITEMS.length + 1) * 50}ms` }}
              >
                <a
                  href={MEME_MONSTERS_LINK.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl transition-all duration-200"
                  onClick={closeMobileMenu}
                >
                  <GradientText
                    colors={["rgba(0,173,181,0.75)", "rgba(0,229,255,0.75)", "rgba(255,107,157,0.75)", "rgba(57,62,70,0.75)"]}
                    className="font-medium px-4 py-3 rounded-xl bg-[rgb(26,30,36)]/30 backdrop-blur-sm block"
                    animationSpeed={8}
                    direction="horizontal"
                    pauseOnHover
                  >
                    {MEME_MONSTERS_LINK.label}
                  </GradientText>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed top-3 right-3 sm:top-4 sm:right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[rgb(26,30,36)] hover:bg-[rgb(36,40,48)] flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[rgb(26,30,36)] ${
          isCollapsed
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <CaretUp className="w-5 h-5 sm:w-7 sm:h-7 text-primary" weight="fill" />
      </button>

      {/* Spacer */}
      <div className="h-14 sm:h-16 md:h-[56px]" />
    </>
  );
};

export default Navbar;
