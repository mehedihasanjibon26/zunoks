"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";
import gsap from "gsap";

import { servicesNavigation } from "@/data/global";

type MenuKey =
  | "about"
  | "services"
  | "clients"
  | "insights"
  | "work";

type MegaMenuItem = {
  label: string;
  href: string;
  description?: string;
};

type MegaMenuGroup = {
  eyebrow: string;
  title: string;
  description: string;
  items: MegaMenuItem[];
};

const megaMenus: Record<MenuKey, MegaMenuGroup> = {
  about: {
    eyebrow: "Discover ZUNOKS",
    title: "Experience built over decades.",
    description:
      "Explore the story, leadership, values and philosophy behind ZUNOKS.",
    items: [
      {
        label: "About ZUNOKS",
        href: "/about",
        description: "Who we are and how we create value.",
      },
      {
        label: "Partners",
        href: "/leadership",
        description: "Meet the senior professionals behind ZUNOKS.",
      },
      {
        label: "Our Story",
        href: "/about#our-story",
        description: "Yesterday, today and tomorrow.",
      },
      {
        label: "Vision, Mission & Values",
        href: "/about#vision-mission-values",
        description: "The principles that guide the firm.",
      },
    ],
  },

  services: {
    eyebrow: "Our Expertise",
    title: "Move complex organizations forward.",
    description:
      "Explore ZUNOKS consulting, leadership, operational and talent capabilities.",
    items: servicesNavigation.map((service) => ({
      label: service.label,
      href: service.href,
    })),
  },

  clients: {
    eyebrow: "Clients & Impact",
    title: "Experience across industries and transformations.",
    description:
      "Explore the sectors ZUNOKS serves and how consulting engagements create impact.",
    items: [
      {
        label: "Our Clients",
        href: "/clients",
        description: "Industries, engagement areas and client experience.",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "Selected transformation and consulting stories.",
      },
      {
        label: "Client Impact",
        href: "/case-studies#impact",
        description: "Challenges, interventions and outcomes.",
      },
    ],
  },

  insights: {
    eyebrow: "Knowledge & Perspective",
    title: "Ideas shaped by real leadership experience.",
    description:
      "Thought leadership, perspectives and updates across business, people and transformation.",
    items: [
      {
        label: "Insights",
        href: "/insights",
        description: "Featured perspectives and thought leadership.",
      },
      {
        label: "News",
        href: "/insights?type=news",
        description: "Updates from ZUNOKS and its ecosystem.",
      },
      {
        label: "Blogs",
        href: "/insights?type=blog",
        description: "Ideas from leaders and subject-matter experts.",
      },
    ],
  },

  work: {
    eyebrow: "Work With Us",
    title: "Build your next chapter in consulting.",
    description:
      "ZUNOKS creates opportunities for young professionals, experienced leaders and specialist experts.",
    items: [
      {
        label: "Work With Us",
        href: "/careers",
        description: "Discover the ZUNOKS consulting environment.",
      },
      {
        label: "Career Opportunities",
        href: "/careers#opportunities",
        description: "Explore current and future opportunities.",
      },
      {
        label: "Young Professionals",
        href: "/careers#young-professionals",
        description: "Start and develop a career in consulting.",
      },
      {
        label: "Experienced Professionals",
        href: "/careers#experienced-professionals",
        description: "Bring experience and expertise to wider challenges.",
      },
    ],
  },
};

const searchSuggestions = [
  "Business Strategy",
  "Executive Search",
  "Human Resources",
  "Manufacturing & Supply Chain",
  "Executive Coaching",
  "Gamified Recruitment",
];

export default function Navbar() {
  const pathname = usePathname();

  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const searchPanelRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!shellRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        shellRef.current,
        {
          y: -30,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.25,
          delay: 0.1,
          ease: "power4.out",
        },
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const nav = desktopNavRef.current;

    if (!nav) return;

    const items = nav.querySelectorAll("[data-nav-item]");

    gsap.killTweensOf(nav);
    gsap.killTweensOf(items);

    if (menuOpen) {
      gsap.set(nav, {
        display: "flex",
        pointerEvents: "auto",
      });

      gsap.set(items, {
        x: 48,
        opacity: 0,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline();

      tl.fromTo(
        nav,
        {
          opacity: 0,
          scaleX: 0.94,
          transformOrigin: "right center",
          clipPath: "inset(0 0 0 100%)",
        },
        {
          opacity: 1,
          scaleX: 1,
          clipPath: "inset(0 0 0 0%)",
          duration: 1.35,
          ease: "expo.inOut",
        },
      );

      tl.to(
        items,
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: {
            each: 0.085,
            from: "end",
          },
          ease: "power4.out",
        },
        "-=0.68",
      );
    } else {
      const tl = gsap.timeline();

      tl.to(items, {
        x: 28,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.62,
        stagger: {
          each: 0.05,
          from: "start",
        },
        ease: "power3.inOut",
      });

      tl.to(
        nav,
        {
          opacity: 0,
          scaleX: 0.96,
          clipPath: "inset(0 0 0 100%)",
          duration: 0.95,
          ease: "expo.inOut",
          onComplete: () => {
            gsap.set(nav, {
              display: "none",
              pointerEvents: "none",
            });
          },
        },
        "-=0.35",
      );
    }
  }, [menuOpen]);

  useEffect(() => {
    const mega = megaRef.current;

    if (!mega || !activeMega) return;

    const items = mega.querySelectorAll("[data-mega-item]");

    const ctx = gsap.context(() => {
      gsap.set(items, {
        opacity: 0,
        y: 24,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline();

      tl.fromTo(
        mega,
        {
          opacity: 0,
          y: -20,
          scale: 0.975,
          filter: "blur(14px)",
          clipPath: "inset(0 0 100% 0 round 28px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clipPath: "inset(0 0 0% 0 round 28px)",
          duration: 1.05,
          ease: "expo.inOut",
        },
      );

      tl.to(
        items,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.72,
          stagger: 0.07,
          ease: "power4.out",
        },
        "-=0.5",
      );
    }, mega);

    return () => ctx.revert();
  }, [activeMega]);

  useEffect(() => {
    const panel = searchPanelRef.current;

    if (!panel || !searchOpen) return;

    const animatedItems = panel.querySelectorAll("[data-search-item]");

    const ctx = gsap.context(() => {
      gsap.set(animatedItems, {
        opacity: 0,
        y: 18,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        onComplete: () => {
          searchInputRef.current?.focus();
        },
      });

      tl.fromTo(
        panel,
        {
          opacity: 0,
          y: -18,
          scale: 0.975,
          filter: "blur(14px)",
          clipPath: "inset(0 0 0 100% round 28px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clipPath: "inset(0 0 0 0% round 28px)",
          duration: 1.05,
          ease: "expo.inOut",
        },
      );

      tl.to(
        animatedItems,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.65,
          stagger: 0.06,
          ease: "power4.out",
        },
        "-=0.46",
      );
    }, panel);

    return () => ctx.revert();
  }, [searchOpen]);

  useEffect(() => {
    if (!menuOpen || !mobilePanelRef.current) return;

    const panel = mobilePanelRef.current;
    const items = panel.querySelectorAll("[data-mobile-item]");

    const ctx = gsap.context(() => {
      gsap.set(items, {
        x: 46,
        opacity: 0,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline();

      tl.fromTo(
        panel,
        {
          opacity: 0,
          xPercent: 100,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          xPercent: 0,
          filter: "blur(0px)",
          duration: 1.05,
          ease: "expo.inOut",
        },
      );

      tl.to(
        items,
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.085,
          ease: "power4.out",
        },
        "-=0.52",
      );
    }, panel);

    return () => ctx.revert();
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
        setActiveMega(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Reset temporary navigation states after route change.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
    setSearchOpen(false);
    setActiveMega(null);
  }, [pathname]);

  const toggleMenu = () => {
    setSearchOpen(false);

    setMenuOpen((current) => {
      if (current) {
        setActiveMega(null);
      }

      return !current;
    });
  };

  const toggleSearch = () => {
    setMenuOpen(false);
    setActiveMega(null);
    setSearchOpen((current) => !current);
  };

  const toggleMega = (key: MenuKey) => {
    setActiveMega((current) => (current === key ? null : key));
  };

  const closeNavigation = () => {
    setMenuOpen(false);
    setActiveMega(null);
  };

  const currentMega = activeMega ? megaMenus[activeMega] : null;

  const navItemClass =
    "group relative flex shrink-0 items-center gap-1.5 py-2 font-sans text-[0.95rem] font-medium leading-none tracking-[-0.01em] text-black/70 transition-colors duration-300 hover:text-black";

  const navLabelClass =
    "block font-sans text-[0.95rem] font-medium leading-none tracking-[-0.01em]";

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[300] transition-all duration-500 ${
          scrolled
            ? "px-3 pt-3 lg:px-5"
            : "px-4 pt-4 lg:px-[var(--page-gutter)] lg:pt-5"
        }`}
      >
        <div
          ref={shellRef}
          className={`relative mx-auto flex w-full max-w-[var(--container-wide)] items-center border border-black/10 transition-all duration-500 ${
            scrolled
              ? "rounded-full bg-white/88 px-4 py-2.5 shadow-[0_14px_45px_rgba(0,0,0,0.08)] backdrop-blur-2xl lg:px-5"
              : "rounded-full bg-white/74 px-5 py-3.5 backdrop-blur-xl lg:px-6"
          }`}
        >
          <Link
            href="/"
            className="relative z-20 flex shrink-0 items-center"
            aria-label="ZUNOKS Home"
          >
            <Image
              src="/images/logo/zunoks-logo.png"
              alt="ZUNOKS — Inspire to Innovate"
              width={777}
              height={249}
              priority
              sizes="(max-width: 1024px) 125px, 145px"
              className={`h-auto transition-all duration-500 ${
                scrolled
                  ? "w-[112px] lg:w-[118px]"
                  : "w-[122px] lg:w-[140px]"
              }`}
            />
          </Link>

          {/* CENTER NAVIGATION ZONE */}
          <div className="hidden min-w-0 flex-1 items-center justify-center px-5 xl:flex">
            <div
              ref={desktopNavRef}
              className="hidden items-center justify-center overflow-hidden whitespace-nowrap"
            >
              <div className="flex items-center justify-center gap-5 2xl:gap-6">
                <Link
                  data-nav-item
                  href="/"
                  onClick={closeNavigation}
                  className={navItemClass}
                >
                  <span className={navLabelClass}>Home</span>
                </Link>

                <button
                  data-nav-item
                  type="button"
                  onClick={() => toggleMega("about")}
                  className={navItemClass}
                >
                  <span className={navLabelClass}>About Us</span>
                  <ChevronDown
                    size={13}
                    strokeWidth={1.8}
                    className={`shrink-0 transition-transform duration-500 ${
                      activeMega === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <button
                  data-nav-item
                  type="button"
                  onClick={() => toggleMega("services")}
                  className={navItemClass}
                >
                  <span className={navLabelClass}>Our Services</span>
                  <ChevronDown
                    size={13}
                    strokeWidth={1.8}
                    className={`shrink-0 transition-transform duration-500 ${
                      activeMega === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <button
                  data-nav-item
                  type="button"
                  onClick={() => toggleMega("clients")}
                  className={navItemClass}
                >
                  <span className={navLabelClass}>Our Clients</span>
                  <ChevronDown
                    size={13}
                    strokeWidth={1.8}
                    className={`shrink-0 transition-transform duration-500 ${
                      activeMega === "clients" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <button
                  data-nav-item
                  type="button"
                  onClick={() => toggleMega("insights")}
                  className={navItemClass}
                >
                  <span className={navLabelClass}>Insights</span>
                  <ChevronDown
                    size={13}
                    strokeWidth={1.8}
                    className={`shrink-0 transition-transform duration-500 ${
                      activeMega === "insights" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <button
                  data-nav-item
                  type="button"
                  onClick={() => toggleMega("work")}
                  className={navItemClass}
                >
                  <span className={navLabelClass}>Work With Us</span>
                  <ChevronDown
                    size={13}
                    strokeWidth={1.8}
                    className={`shrink-0 transition-transform duration-500 ${
                      activeMega === "work" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <Link
                  data-nav-item
                  href="/social-impact"
                  onClick={closeNavigation}
                  className={navItemClass}
                >
                  <span className={navLabelClass}>Social Impact</span>
                </Link>

                <Link
                  data-nav-item
                  href="/contact"
                  onClick={closeNavigation}
                  className={navItemClass}
                >
                  <span className={navLabelClass}>Contact</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT CONTROLS */}
          <div className="relative z-20 ml-auto hidden shrink-0 items-center gap-3 xl:flex">
            <button
              type="button"
              onClick={toggleMenu}
              className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                menuOpen
                  ? "border-black bg-black text-white"
                  : "border-black/10 bg-white/65 text-black hover:border-[var(--z-green)] hover:bg-[var(--z-green)] hover:text-white"
              }`}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              <span className="relative flex h-[18px] w-[18px] items-center justify-center">
                <span
                  className={`absolute transition-all duration-500 ${
                    menuOpen
                      ? "scale-0 rotate-90 opacity-0"
                      : "scale-100 rotate-0 opacity-100"
                  }`}
                >
                  <Menu size={18} />
                </span>

                <span
                  className={`absolute transition-all duration-500 ${
                    menuOpen
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-0 -rotate-90 opacity-0"
                  }`}
                >
                  <X size={18} />
                </span>
              </span>
            </button>

            <button
              type="button"
              onClick={toggleSearch}
              aria-label={searchOpen ? "Close search" : "Open search"}
              className={`group flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                searchOpen
                  ? "border-[var(--z-green)] bg-[var(--z-green)] text-white"
                  : "border-black/10 bg-white/70 text-black hover:border-[var(--z-green)] hover:bg-[var(--z-green)] hover:text-white"
              }`}
            >
              {searchOpen ? (
                <X size={18} strokeWidth={1.8} />
              ) : (
                <Search
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              )}
            </button>
          </div>

          <div className="relative z-20 ml-auto flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className={`flex h-[44px] w-[44px] items-center justify-center rounded-full border ${
                menuOpen
                  ? "border-black bg-black text-white"
                  : "border-black/10 bg-white/65 text-black"
              }`}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <button
              type="button"
              onClick={toggleSearch}
              aria-label={searchOpen ? "Close search" : "Open search"}
              className={`flex h-[44px] w-[44px] items-center justify-center rounded-full border ${
                searchOpen
                  ? "border-[var(--z-green)] bg-[var(--z-green)] text-white"
                  : "border-black/10 bg-white/70 text-black"
              }`}
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        {currentMega && menuOpen && (
          <div
            ref={megaRef}
            className="mx-auto mt-3 hidden w-full max-w-[var(--container-wide)] overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/72 shadow-[0_30px_100px_rgba(0,0,0,0.14)] backdrop-blur-[30px] xl:block"
          >
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute -right-20 -top-28 h-[24rem] w-[24rem] rounded-full bg-[var(--z-green)] opacity-[0.08] blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-32 left-[25%] h-[20rem] w-[20rem] rounded-full bg-[var(--z-orange)] opacity-[0.08] blur-[100px]" />

              <div className="relative grid gap-14 px-10 py-10 lg:grid-cols-[0.78fr_1.22fr]">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                      {currentMega.eyebrow}
                    </p>

                    <h2 className="mt-3 max-w-[11ch] text-[clamp(2.3rem,3.4vw,4.2rem)] leading-[0.92] tracking-[-0.06em]">
                      {currentMega.title}
                    </h2>

                    <p className="mt-5 max-w-[31rem] text-sm leading-6 text-black/50">
                      {currentMega.description}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--z-orange)]" />
                    <span className="text-[0.67rem] uppercase tracking-[0.17em] text-black/35">
                      Inspire to Innovate
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-8">
                  {currentMega.items.map((item, index) => (
                    <Link
                      data-mega-item
                      key={`${item.href}-${index}`}
                      href={item.href}
                      onClick={closeNavigation}
                      className="group flex min-h-[92px] items-start justify-between gap-5 border-t border-black/10 py-5"
                    >
                      <div className="flex gap-4">
                        <span className="mt-1 text-[0.65rem] font-medium text-black/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <p className="text-[0.95rem] font-medium leading-tight">
                            {item.label}
                          </p>

                          {item.description && (
                            <p className="mt-2 max-w-[24rem] text-xs leading-5 text-black/45">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[var(--z-green)] group-hover:bg-[var(--z-green)] group-hover:text-white">
                        <ArrowUpRight size={14} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SEARCH PANEL */}
        {searchOpen && (
          <div
            ref={searchPanelRef}
            className="mx-auto mt-3 w-full max-w-[var(--container-wide)] overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/76 shadow-[0_30px_100px_rgba(0,0,0,0.14)] backdrop-blur-[32px]"
          >
            <div className="relative overflow-hidden px-6 py-8 lg:px-10 lg:py-10">
              <div className="pointer-events-none absolute -right-20 -top-24 h-[22rem] w-[22rem] rounded-full bg-[var(--z-green)] opacity-[0.08] blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-28 left-[18%] h-[18rem] w-[18rem] rounded-full bg-[var(--z-orange)] opacity-[0.07] blur-[100px]" />

              <div className="relative">
                <div
                  data-search-item
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                      Search ZUNOKS
                    </p>

                    <h2 className="mt-2 text-[clamp(1.8rem,3vw,3.3rem)] leading-none tracking-[-0.055em]">
                      What are you looking for?
                    </h2>
                  </div>

                  <span className="hidden text-[0.67rem] uppercase tracking-[0.16em] text-black/30 md:block">
                    ESC to close
                  </span>
                </div>

                <div
                  data-search-item
                  className="mt-8 flex items-center gap-4 border-b border-black/15 pb-4"
                >
                  <Search
                    size={24}
                    strokeWidth={1.5}
                    className="shrink-0 text-[var(--z-green)]"
                  />

                  <input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search services, insights, people..."
                    className="w-full bg-transparent text-[clamp(1.4rem,2.4vw,2.5rem)] font-medium tracking-[-0.035em] text-black outline-none placeholder:text-black/22"
                  />
                </div>

                <div
                  data-search-item
                  className="mt-7"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-black/35">
                    Explore
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {searchSuggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => {
                          if (searchInputRef.current) {
                            searchInputRef.current.value = suggestion;
                            searchInputRef.current.focus();
                          }
                        }}
                        className="rounded-full border border-black/10 bg-white/55 px-4 py-2.5 text-sm text-black/65 transition-all duration-300 hover:border-[var(--z-green)] hover:bg-[var(--z-green)] hover:text-white"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          ref={mobilePanelRef}
          className="fixed inset-0 z-[250] bg-black/95 pt-[92px] text-white backdrop-blur-xl xl:hidden"
        >
          <div className="flex h-full flex-col overflow-y-auto px-6 pb-8">
            <nav className="flex flex-col">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Services", "/services"],
                ["Our Clients", "/clients"],
                ["Insights", "/insights"],
                ["Work With Us", "/careers"],
                ["Social Impact", "/social-impact"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  data-mobile-item
                  href={href}
                  onClick={closeNavigation}
                  className="border-b border-white/15 py-5 text-[clamp(2rem,8vw,3.4rem)] font-medium leading-none tracking-[-0.055em]"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <p className="max-w-[17rem] text-xs leading-6 text-white/40">
                Strategy. People. Leadership. Operations. Transformation.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}