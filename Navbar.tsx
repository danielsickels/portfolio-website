"use client";

import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
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
                  router.push(item.href);
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
                    >
                      <span>{item.label}</span>
                      <FaGithub className="h-4 w-4 shrink-0" />
                    </a>
                  ) : (
                    <Link
                      href={item.label}
                      className={navTranslate}
                    >
                      <CaretUp />
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
      <div className="relative inline-block">
        <button
          onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
          className={`flex items-center gap-1 rounded-lg px-4 py-2 ${triggerClass}`}
          aria-expanded={projectsDropdownOpen}
        >
          Projects
          <CaretDown
            className={`h-4 w-4 shrink-0 transition-transform ${projectsDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {projectsDropdownOpen && dropdownContent}
      </div>
    );
  };

  return (
    <nav>
      {/* Navbar content goes here */}
    </nav>
  );
};

export default Navbar;