"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CaretUp } from "@phosphor-icons/react";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Projects", href: "/projects" },
  { label: "SmartBarApp", href: "https://barapp.dannysickels.com/", external: true },
  { label: "HappyTracker", href: "https://happytracker.dannysickels.com/", external: true },
];

const SCROLL_THRESHOLD = 120;
const FADE_THRESHOLD = 60;

const Navbar = () => {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isCollapsed = scrollY > SCROLL_THRESHOLD;
  const isFaded = scrollY > FADE_THRESHOLD && scrollDirection === "down";
  const navOpacity = isFaded && !isCollapsed ? Math.max(0, 1 - (scrollY - FADE_THRESHOLD) / 40) : 1;
  const navTranslate = isFaded && !isCollapsed ? Math.min(-20, -(scrollY - FADE_THRESHOLD) / 2) : 0;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 p-4 z-50 bg-transparent pointer-events-none"
        aria-hidden={isCollapsed}
      >
        <div
          className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 pointer-events-auto transition-all duration-300 ease-out"
          style={{
            opacity: isCollapsed ? 0 : navOpacity,
            transform: isCollapsed ? "translateY(-100%) scale(0.9)" : `translateY(${navTranslate}px)`,
          }}
        >
          <Link
            href="/"
            className="text-primary hover:opacity-90 text-xl font-semibold transition-opacity text-center md:text-left shrink-0"
          >
            Danny Sickels
          </Link>
          <nav className="overflow-x-auto md:overflow-visible min-w-0">
            <ul className="flex gap-4 md:gap-8 flex-wrap justify-center md:justify-end list-none p-0 m-0 text-primary">
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeIndex === index;
                const linkClass =
                  "inline-block px-4 py-2 rounded-full transition-colors duration-200 " +
                  (isActive
                    ? "bg-primary text-[rgb(26,30,36)] font-medium"
                    : "text-primary hover:opacity-90 hover:bg-primary/20");
                return (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className={linkClass}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary text-[rgb(26,30,36)] flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[rgb(26,30,36)] ${
          isCollapsed
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <CaretUp size={28} weight="bold" />
      </button>

      {/* Spacer to prevent content from jumping (header was sticky, now fixed) */}
      <div className="h-[72px] md:h-[56px]" />
    </>
  );
};

export default Navbar;
