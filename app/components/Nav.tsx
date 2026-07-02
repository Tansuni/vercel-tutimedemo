"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/districts", label: "Districts" },
  { href: "/visit", label: "Visit" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6">
      <span className="text-xl font-bold tracking-widest text-cyan-400">AELION</span>
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                pathname === link.href ? "text-cyan-400" : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}