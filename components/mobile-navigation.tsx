"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/knowledge-centre", label: "Knowledge" },
  { href: "/contact", label: "Contact" }
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close mobile navigation" : "Open mobile navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation-menu"
        onClick={() => setOpen((value) => !value)}
        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-md border border-navy-100 bg-white text-navy-950 shadow-sm transition hover:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="relative h-5 w-6" aria-hidden="true">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition duration-300 ease-in-out ${
              open ? "translate-y-2 rotate-45" : "translate-y-0 rotate-0"
            }`}
          />
          <span
            className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-current transition duration-300 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-current transition duration-300 ease-in-out ${
              open ? "-translate-y-2 -rotate-45" : "translate-y-0 rotate-0"
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-navy-950/35 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-navigation-menu"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`fixed left-3 right-3 top-[76px] z-50 rounded-lg border border-navy-100 bg-white p-3 shadow-premium transition duration-300 ease-in-out lg:hidden ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="grid gap-1">
          {mobileLinks.map((link, index) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={open ? 0 : -1}
                className={`rounded-md px-4 py-3 text-base font-black transition duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 ${
                  active ? "bg-navy-950 text-white" : "text-navy-800 hover:bg-navy-50 hover:text-navy-950"
                } ${open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                style={{ transitionDelay: open ? `${80 + index * 35}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
