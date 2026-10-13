"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
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
        label: "Our Story",
        href: "/about/our-story",
        description: "Yesterday, today and tomorrow.",
      },
      {
        label: "Vision, Mission & Values",
        href: "/about/vision-mission-values",
        description: "The principles that guide the firm.",
      },
      {
        label: "Founders",
        href: "/about/founders",
        description:
          "Meet the senior professionals behind ZUNOKS.",
      },
      {
        label: "Services",
        href: "/about/services",
        description:
          "See how ZUNOKS helps organizations move forward.",
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
        description:
          "Industries, engagement areas and client experience.",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description:
          "Selected transformation and consulting stories.",
      },
      {
        label: "Client Impact",
        href: "/client-impact",
        description:
          "Challenges, interventions and outcomes.",
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
        href: "/careers/work-with-us",
        description:
          "Discover the ZUNOKS consulting environment.",
      },
      {
        label: "Career Opportunities",
        href: "/careers/career-opportunities",
        description:
          "Explore current and future opportunities.",
      },
      {
        label: "Young Professionals",
        href: "/careers/young-professionals",
        description:
          "Start and develop a career in consulting.",
      },
      {
        label: "Experienced Professionals",
        href: "/careers/experienced-professionals",
        description:
          "Bring experience and expertise to wider challenges.",
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

type SearchEntry = {
  title: string;
  href: string;
  category: string;
  description: string;
  keywords: string;
};

const searchIndex: SearchEntry[] = [
  {
    title: "Home",
    href: "/",
    category: "Overview",
    description: "Explore ZUNOKS, its expertise, people and impact.",
    keywords: "home consulting zunoks management",
  },
  {
    title: "About ZUNOKS",
    href: "/about",
    category: "About Us",
    description: "Learn about ZUNOKS and its consulting approach.",
    keywords: "about company firm experience",
  },
  {
    title: "Our Story",
    href: "/about/our-story",
    category: "About Us",
    description: "Discover where ZUNOKS began and where it is heading.",
    keywords: "history yesterday today tomorrow founders",
  },
  {
    title: "Vision, Mission & Values",
    href: "/about/vision-mission-values",
    category: "About Us",
    description: "The principles and ambitions that guide ZUNOKS.",
    keywords: "vision mission values purpose integrity",
  },
  {
    title: "Founders",
    href: "/about/founders",
    category: "About Us",
    description: "Meet the senior professionals behind ZUNOKS.",
    keywords: "leadership people team partners founders",
  },
  {
    title: "Services Overview",
    href: "/about/services",
    category: "About Us",
    description: "Explore ZUNOKS capabilities across seven service areas.",
    keywords: "services expertise capabilities consulting",
  },
  {
    title: "Strategic Interventions",
    href: "/services/strategic-interventions",
    category: "Our Services",
    description: "Strategy, transformation, governance and organizational design.",
    keywords: "business strategy transformation merger acquisition risk compliance",
  },
  {
    title: "Human Resources",
    href: "/services/human-resources",
    category: "Our Services",
    description: "Culture, leadership, talent and performance systems.",
    keywords: "hr human resources people culture talent performance succession rewards",
  },
  {
    title: "Gamified Recruitment",
    href: "/services/gamified-recruitment",
    category: "Our Services",
    description: "AI-driven gamified talent assessment and candidate insight.",
    keywords: "games recruitment assessment ai personality cognitive aptitude behavior",
  },
  {
    title: "Manufacturing & Supply Chain",
    href: "/services/manufacturing-supply-chain",
    category: "Our Services",
    description: "Operational excellence across manufacturing and supply chains.",
    keywords: "operations factory process erp manufacturing supply chain safety",
  },
  {
    title: "Executive Search",
    href: "/services/executive-search",
    category: "Our Services",
    description: "Senior leadership, board and executive talent search.",
    keywords: "cxo board recruitment workforce executive search talent mapping",
  },
  {
    title: "Executive Coaching",
    href: "/services/executive-coaching",
    category: "Our Services",
    description: "Coaching, mentoring and career management for leaders.",
    keywords: "leadership development mentoring coaching career executives",
  },
  {
    title: "Shared Services",
    href: "/services/shared-services",
    category: "Our Services",
    description: "HR operations, payroll, training, BPO and HRIS support.",
    keywords: "shared services payroll outsourcing hris training back office",
  },
  {
    title: "Our Clients",
    href: "/clients",
    category: "Our Clients",
    description: "Explore the sectors and organizations ZUNOKS supports.",
    keywords: "clients industries sectors organizations",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    category: "Our Clients",
    description: "Selected consulting and transformation stories.",
    keywords: "case studies projects transformation results",
  },
  {
    title: "Client Impact",
    href: "/client-impact",
    category: "Our Clients",
    description: "Challenges, interventions and outcomes created with clients.",
    keywords: "impact outcomes results clients value",
  },
  {
    title: "CSR & Social Impact",
    href: "/social-impact",
    category: "CSR",
    description: "ZUNOKS commitment to society and sustainable progress.",
    keywords: "csr social impact society sustainability community responsibility",
  },
  {
    title: "Work With Us",
    href: "/careers/work-with-us",
    category: "Careers",
    description: "Discover the ZUNOKS consulting environment.",
    keywords: "careers jobs work culture join team",
  },
  {
    title: "Career Opportunities",
    href: "/careers/career-opportunities",
    category: "Careers",
    description: "Explore current and future opportunities at ZUNOKS.",
    keywords: "careers vacancies jobs openings opportunities",
  },
  {
    title: "Young Professionals",
    href: "/careers/young-professionals",
    category: "Careers",
    description: "Start and develop a career in consulting.",
    keywords: "graduate student young professionals early career",
  },
  {
    title: "Experienced Professionals",
    href: "/careers/experienced-professionals",
    category: "Careers",
    description: "Bring professional expertise to wider challenges.",
    keywords: "experienced senior professionals experts careers",
  },
  {
    title: "Contact ZUNOKS",
    href: "/contact",
    category: "Contact",
    description: "Start a conversation with the ZUNOKS team.",
    keywords: "contact email phone office address conversation",
  },
];

const mobileNavigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Story", "/about/our-story"],
  [
    "Vision, Mission & Values",
    "/about/vision-mission-values",
  ],
  ["Founders", "/about/founders"],
  ["Services", "/about/services"],
  ["Our Services", "/services"],
  ["Our Clients", "/clients"],
  ["CSR", "/social-impact"],

  ["Work With Us", "/careers/work-with-us"],
  [
    "Career Opportunities",
    "/careers/career-opportunities",
  ],
  [
    "Young Professionals",
    "/careers/young-professionals",
  ],
  [
    "Experienced Professionals",
    "/careers/experienced-professionals",
  ],

  ["Contact", "/contact"],
] as const;

export default function Navbar() {
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const searchPanelRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [activeMega, setActiveMega] =
    useState<MenuKey | null>(null);

  const [scrolled, setScrolled] = useState(false);

  const searchResults = useMemo(() => {
    const terms = searchQuery
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    if (terms.length === 0) return [];

    return searchIndex
      .map((entry) => {
        const title = entry.title.toLowerCase();
        const category = entry.category.toLowerCase();
        const searchable = `${title} ${category} ${entry.description.toLowerCase()} ${entry.keywords}`;
        const matches = terms.filter((term) => searchable.includes(term));
        const score = matches.reduce((total, term) => {
          if (title === term) return total + 8;
          if (title.startsWith(term)) return total + 5;
          if (title.includes(term)) return total + 3;
          if (category.includes(term)) return total + 2;
          return total + 1;
        }, 0);

        return { entry, score, matches: matches.length };
      })
      .filter((result) => result.matches === terms.length)
      .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
      .slice(0, 8)
      .map((result) => result.entry);
  }, [searchQuery]);

  /*
   * Scroll state.
   */
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

  /*
   * Initial navbar reveal.
   */
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

  /*
   * Desktop navbar:
   * manually opens with Menu
   * and manually closes with X.
   */
  useEffect(() => {
    const nav = desktopNavRef.current;

    if (!nav) return;

    const items = nav.querySelectorAll(
      "[data-nav-item]",
    );

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

  /*
   * Mega-menu animation.
   */
  useEffect(() => {
    const mega = megaRef.current;

    if (!mega || !activeMega) {
      return;
    }

    const items = mega.querySelectorAll(
      "[data-mega-item]",
    );

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
          clipPath:
            "inset(0 0 100% 0 round 28px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clipPath:
            "inset(0 0 0% 0 round 28px)",
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

  /*
   * Search animation.
   */
  useEffect(() => {
    const panel = searchPanelRef.current;

    if (!panel || !searchOpen) {
      return;
    }

    const animatedItems =
      panel.querySelectorAll(
        "[data-search-item]",
      );

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
          clipPath:
            "inset(0 0 0 100% round 28px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clipPath:
            "inset(0 0 0 0% round 28px)",
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

  /*
   * Mobile fullscreen menu.
   */
  useEffect(() => {
    if (
      !menuOpen ||
      !mobilePanelRef.current
    ) {
      return;
    }

    const panel = mobilePanelRef.current;

    const items = panel.querySelectorAll(
      "[data-mobile-item]",
    );

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
          stagger: 0.065,
          ease: "power4.out",
        },
        "-=0.52",
      );
    }, panel);

    return () => ctx.revert();
  }, [menuOpen]);

  /*
   * ESC closes temporary overlays only.
   * Navbar stays manually controlled.
   */
  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
        setActiveMega(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

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
    setActiveMega(null);
    setMenuOpen(false);

    if (searchOpen) {
      setSearchQuery("");
    }

    setSearchOpen(
      (current) => !current,
    );
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const openSearchResult = (href: string) => {
    closeSearch();
    router.push(href);
  };

  const submitSearch = () => {
    const firstResult = searchResults[0];

    if (firstResult) {
      openSearchResult(firstResult.href);
    }
  };

  const toggleMega = (
    key: MenuKey,
  ) => {
    setActiveMega((current) =>
      current === key ? null : key,
    );
  };

  /*
   * Selecting a page only closes
   * the temporary dropdown.
   * Main navbar remains open.
   */
  const handleNavigationSelection =
    () => {
      setActiveMega(null);
      closeSearch();
    };

  const currentMega = activeMega
    ? megaMenus[activeMega]
    : null;

  const navItemClass = `
    group
    relative
    flex
    shrink-0
    items-center
    gap-1.5
    overflow-hidden
    rounded-full
    border
    border-transparent
    px-3.5
    py-2.5
    font-sans
    text-[0.95rem]
    font-medium
    leading-none
    tracking-[-0.01em]
    text-black/72
    transition-all
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]

    before:pointer-events-none
    before:absolute
    before:inset-0
    before:-z-10
    before:rounded-full
    before:bg-white/0
    before:opacity-0
    before:backdrop-blur-0
    before:transition-all
    before:duration-500

    after:pointer-events-none
    after:absolute
    after:left-[14%]
    after:top-[7%]
    after:-z-10
    after:h-[38%]
    after:w-[48%]
    after:rotate-[-10deg]
    after:rounded-full
    after:bg-white/0
    after:blur-[4px]
    after:transition-all
    after:duration-500

    hover:-translate-y-[1px]
    hover:border-white/60
    hover:text-black
    hover:shadow-[0_7px_22px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-1px_0_rgba(49,155,66,0.08)]
    hover:before:bg-white/[0.22]
    hover:before:opacity-100
    hover:before:backdrop-blur-[16px]
    hover:after:bg-white/35

    focus-visible:border-white/65
    focus-visible:bg-white/[0.22]
    focus-visible:outline-none
  `;

  const navLabelClass = `
    relative
    z-10
    block
    font-sans
    text-[0.95rem]
    font-medium
    leading-none
    tracking-[-0.01em]
  `;

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
        {/* MAIN NAV SHELL */}
        <div
          ref={shellRef}
          className={`relative mx-auto flex w-full max-w-[var(--container-wide)] items-center overflow-hidden border transition-all duration-500 before:pointer-events-none before:absolute before:inset-x-[8%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/90 before:to-transparent after:pointer-events-none after:absolute after:-right-8 after:-top-12 after:h-28 after:w-28 after:rounded-full after:bg-[var(--z-green)] after:opacity-[0.10] after:blur-[42px] ${
            scrolled
              ? "rounded-full border-white/55 bg-white/[0.46] px-4 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.12),0_0_0_1px_rgba(49,155,66,0.055),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-[34px] backdrop-saturate-[1.35] lg:px-5"
              : "rounded-full border-white/50 bg-white/[0.36] px-5 py-3.5 shadow-[0_16px_50px_rgba(0,0,0,0.08),0_0_0_1px_rgba(49,155,66,0.05),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[30px] backdrop-saturate-[1.3] lg:px-6"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(49,155,66,0.055)_0%,rgba(255,255,255,0.015)_42%,rgba(239,125,34,0.045)_100%)]" />

          <div className="pointer-events-none absolute -left-10 top-1/2 h-28 w-36 -translate-y-1/2 rounded-full bg-[var(--z-green)] opacity-[0.055] blur-[46px]" />

          <div className="pointer-events-none absolute -right-8 top-1/2 h-24 w-32 -translate-y-1/2 rounded-full bg-[var(--z-orange)] opacity-[0.045] blur-[44px]" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.18] via-transparent to-white/[0.04]" />

          {/* LOGO */}
          <Link
            href="/"
            onClick={
              handleNavigationSelection
            }
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

          {/* DESKTOP NAV */}
          <div className="relative z-20 hidden min-w-0 flex-1 items-center justify-center px-5 xl:flex">
            <div
              ref={desktopNavRef}
              className="hidden items-center justify-center overflow-hidden whitespace-nowrap"
            >
              <div className="flex items-center justify-center gap-1 2xl:gap-1.5">
                <Link
                  data-nav-item
                  href="/"
                  onClick={
                    handleNavigationSelection
                  }
                  className={
                    navItemClass
                  }
                >
                  <span
                    className={
                      navLabelClass
                    }
                  >
                    Home
                  </span>
                </Link>

                <NavMegaButton
                  label="About Us"
                  menuKey="about"
                  activeMega={activeMega}
                  toggleMega={toggleMega}
                  navItemClass={
                    navItemClass
                  }
                  navLabelClass={
                    navLabelClass
                  }
                />

                <NavMegaButton
                  label="Our Services"
                  menuKey="services"
                  activeMega={activeMega}
                  toggleMega={toggleMega}
                  navItemClass={
                    navItemClass
                  }
                  navLabelClass={
                    navLabelClass
                  }
                />

                <NavMegaButton
                  label="Our Clients"
                  menuKey="clients"
                  activeMega={activeMega}
                  toggleMega={toggleMega}
                  navItemClass={
                    navItemClass
                  }
                  navLabelClass={
                    navLabelClass
                  }
                />

                <Link
                  data-nav-item
                  href="/social-impact"
                  onClick={
                    handleNavigationSelection
                  }
                  className={
                    navItemClass
                  }
                >
                  <span
                    className={
                      navLabelClass
                    }
                  >
                    CSR
                  </span>
                </Link>

                <NavMegaButton
                  label="Work With Us"
                  menuKey="work"
                  activeMega={activeMega}
                  toggleMega={toggleMega}
                  navItemClass={
                    navItemClass
                  }
                  navLabelClass={
                    navLabelClass
                  }
                />

                <Link
                  data-nav-item
                  href="/contact"
                  onClick={
                    handleNavigationSelection
                  }
                  className={
                    navItemClass
                  }
                >
                  <span
                    className={
                      navLabelClass
                    }
                  >
                    Contact
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* DESKTOP CONTROLS */}
          <div className="relative z-20 ml-auto hidden shrink-0 items-center gap-3 xl:flex">
            <button
              type="button"
              onClick={toggleMenu}
              className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-[18px] transition-all duration-500 ${
                menuOpen
                  ? "border-black/80 bg-black/90 text-white"
                  : "border-white/55 bg-white/[0.30] text-black hover:border-white/80 hover:bg-white/[0.42]"
              }`}
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={
                menuOpen
              }
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
              aria-label={
                searchOpen
                  ? "Close search"
                  : "Open search"
              }
              className={`group flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-[18px] transition-all duration-500 ${
                searchOpen
                  ? "border-[var(--z-green)] bg-[var(--z-green)] text-white"
                  : "border-white/55 bg-white/[0.30] text-black hover:border-white/80 hover:bg-white/[0.42]"
              }`}
            >
              {searchOpen ? (
                <X
                  size={18}
                  strokeWidth={1.8}
                />
              ) : (
                <Search
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              )}
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="relative z-20 ml-auto flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className={`flex h-[44px] w-[44px] items-center justify-center rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-[18px] ${
                menuOpen
                  ? "border-black bg-black text-white"
                  : "border-white/55 bg-white/[0.30] text-black"
              }`}
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
            >
              {menuOpen ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}
            </button>

            <button
              type="button"
              onClick={toggleSearch}
              aria-label={
                searchOpen
                  ? "Close search"
                  : "Open search"
              }
              className={`flex h-[44px] w-[44px] items-center justify-center rounded-full border shadow-[inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-[18px] ${
                searchOpen
                  ? "border-[var(--z-green)] bg-[var(--z-green)] text-white"
                  : "border-white/55 bg-white/[0.30] text-black"
              }`}
            >
              {searchOpen ? (
                <X size={18} />
              ) : (
                <Search size={18} />
              )}
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        {currentMega &&
          menuOpen && (
            <div
              ref={megaRef}
              className="mx-auto mt-3 hidden w-full max-w-[var(--container-wide)] overflow-hidden rounded-[1.8rem] border border-white/50 bg-white/[0.40] shadow-[0_30px_100px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-[38px] backdrop-saturate-[1.35] xl:block"
            >
              <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.18] via-transparent to-white/[0.04]" />

                <div className="pointer-events-none absolute -right-20 -top-28 h-[24rem] w-[24rem] rounded-full bg-[var(--z-green)] opacity-[0.09] blur-[100px]" />

                <div className="pointer-events-none absolute -bottom-32 left-[25%] h-[20rem] w-[20rem] rounded-full bg-[var(--z-orange)] opacity-[0.08] blur-[100px]" />

                <div className="relative grid gap-14 px-10 py-10 lg:grid-cols-[0.78fr_1.22fr]">
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                        {
                          currentMega.eyebrow
                        }
                      </p>

                      <h2 className="mt-3 max-w-[11ch] text-[clamp(2.3rem,3.4vw,4.2rem)] leading-[0.92] tracking-[-0.06em]">
                        {
                          currentMega.title
                        }
                      </h2>

                      <p className="mt-5 max-w-[31rem] text-sm leading-6 text-black/50">
                        {
                          currentMega.description
                        }
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
                    {currentMega.items.map(
                      (
                        item,
                        index,
                      ) => (
                        <Link
                          data-mega-item
                          key={`${item.href}-${index}`}
                          href={
                            item.href
                          }
                          onClick={
                            handleNavigationSelection
                          }
                          className="group flex min-h-[92px] items-start justify-between gap-5 border-t border-black/10 py-5"
                        >
                          <div className="flex gap-4">
                            <span className="mt-1 text-[0.65rem] font-medium text-black/25">
                              {String(
                                index +
                                  1,
                              ).padStart(
                                2,
                                "0",
                              )}
                            </span>

                            <div>
                              <p className="text-[0.95rem] font-medium leading-tight">
                                {
                                  item.label
                                }
                              </p>

                              {item.description && (
                                <p className="mt-2 max-w-[24rem] text-xs leading-5 text-black/45">
                                  {
                                    item.description
                                  }
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/[0.28] backdrop-blur-xl transition-all duration-300 group-hover:border-[var(--z-green)] group-hover:bg-[var(--z-green)] group-hover:text-white">
                            <ArrowUpRight
                              size={14}
                            />
                          </div>
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* SEARCH PANEL */}
        {searchOpen && (
          <div
            ref={searchPanelRef}
            id="global-site-search"
            role="search"
            aria-label="Search ZUNOKS"
            className="mx-auto mt-3 w-full max-w-[var(--container-wide)] overflow-hidden rounded-[1.8rem] border border-white/50 bg-white/[0.42] shadow-[0_30px_100px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-[40px] backdrop-saturate-[1.4]"
          >
            <div className="relative overflow-hidden px-6 py-8 lg:px-10 lg:py-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.2] via-transparent to-white/[0.05]" />

              <div className="pointer-events-none absolute -right-20 -top-24 h-[22rem] w-[22rem] rounded-full bg-[var(--z-green)] opacity-[0.09] blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-28 left-[18%] h-[18rem] w-[18rem] rounded-full bg-[var(--z-orange)] opacity-[0.08] blur-[100px]" />

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
                      What are you looking
                      for?
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
                    ref={
                      searchInputRef
                    }
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        submitSearch();
                      }
                    }}
                    aria-label="Search pages and services"
                    placeholder="Search services, insights, people..."
                    className="w-full bg-transparent text-[clamp(1.4rem,2.4vw,2.5rem)] font-medium tracking-[-0.035em] text-black outline-none placeholder:text-black/22"
                  />
                </div>

                {searchQuery.trim() && (
                  <div data-search-item className="mt-5" aria-live="polite">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-black/35">
                        Results
                      </p>
                      <span className="text-[0.65rem] text-black/30">
                        {searchResults.length} {searchResults.length === 1 ? "match" : "matches"}
                      </span>
                    </div>

                    {searchResults.length > 0 ? (
                      <div className="mt-3 grid max-h-[min(44vh,360px)] gap-2 overflow-y-auto pr-1 md:grid-cols-2">
                        {searchResults.map((result) => (
                          <button
                            key={result.href}
                            type="button"
                            onClick={() => openSearchResult(result.href)}
                            className="group flex items-center gap-4 rounded-2xl border border-white/55 bg-white/[0.28] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--z-green)]/35 hover:bg-white/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--z-green)]"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--z-green)]/15 bg-[var(--z-green)]/[0.07] text-[var(--z-green)] transition-colors duration-300 group-hover:bg-[var(--z-green)] group-hover:text-white">
                              <Search size={14} strokeWidth={1.6} aria-hidden="true" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-[var(--z-green)]/70">
                                {result.category}
                              </span>
                              <span className="mt-1 block text-sm font-medium text-black/76">
                                {result.title}
                              </span>
                              <span className="mt-1 block truncate text-xs text-black/38">
                                {result.description}
                              </span>
                            </span>
                            <ArrowUpRight
                              size={14}
                              strokeWidth={1.6}
                              aria-hidden="true"
                              className="shrink-0 text-black/25 transition-all duration-300 group-hover:rotate-45 group-hover:text-[var(--z-green)]"
                            />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-3 rounded-2xl border border-white/50 bg-white/[0.22] px-5 py-4 text-sm text-black/45 backdrop-blur-xl">
                        No matching page found. Try a service, topic or people-related term.
                      </div>
                    )}
                  </div>
                )}

                <div
                  data-search-item
                  className="mt-7"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-black/35">
                    Explore
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {searchSuggestions.map(
                      (
                        suggestion,
                      ) => (
                        <button
                          key={
                            suggestion
                          }
                          type="button"
                          onClick={() => {
                            setSearchQuery(suggestion);
                            searchInputRef.current?.focus();
                          }}
                          className="rounded-full border border-white/55 bg-white/[0.28] px-4 py-2.5 text-sm text-black/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--z-green)] hover:bg-[var(--z-green)] hover:text-white"
                        >
                          {
                            suggestion
                          }
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {menuOpen && (
        <div
          ref={mobilePanelRef}
          className="fixed inset-0 z-[250] bg-black/[0.84] pt-[92px] text-white backdrop-blur-[30px] xl:hidden"
        >
          <div className="flex h-full flex-col overflow-y-auto px-6 pb-8">
            <nav className="flex flex-col">
              {mobileNavigation.map(
                ([label, href]) => {
                  const isCareer =
                    href.startsWith(
                      "/careers/",
                    );

                  return (
                    <Link
                      key={href}
                      data-mobile-item
                      href={href}
                      onClick={
                        handleNavigationSelection
                      }
                      className={`border-b border-white/15 py-5 font-medium leading-none tracking-[-0.055em] ${
                        isCareer
                          ? "pl-5 text-[clamp(1.45rem,6vw,2.5rem)] text-white/78"
                          : "text-[clamp(2rem,8vw,3.4rem)]"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                },
              )}
            </nav>

            <div className="mt-auto pt-8">
              <p className="max-w-[17rem] text-xs leading-6 text-white/40">
                Strategy. People.
                Leadership. Operations.
                Transformation.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavMegaButton({
  label,
  menuKey,
  activeMega,
  toggleMega,
  navItemClass,
  navLabelClass,
}: {
  label: string;
  menuKey: MenuKey;
  activeMega: MenuKey | null;
  toggleMega: (
    key: MenuKey,
  ) => void;
  navItemClass: string;
  navLabelClass: string;
}) {
  return (
    <button
      data-nav-item
      type="button"
      onClick={() =>
        toggleMega(menuKey)
      }
      className={navItemClass}
    >
      <span
        className={navLabelClass}
      >
        {label}
      </span>

      <ChevronDown
        size={13}
        strokeWidth={1.8}
        className={`relative z-10 shrink-0 transition-transform duration-500 ${
          activeMega === menuKey
            ? "rotate-180"
            : ""
        }`}
      />
    </button>
  );
}
