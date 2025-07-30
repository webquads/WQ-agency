"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// import Logo from "./Logo";

const menuItems = [
  {
    href: "/",
    title: "Home",
    description: "Welcome to my forever work-in-progress!",
  },
  {
    href: "/blog",
    title: "Blog",
    description: "Thoughts, mental models, and tutorials",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Showcase of my projects",
  },
  {
    href: "/shorts",
    title: "Shorts",
    description: "Personal notes of snippets",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" text-white w-full ">
      {/* Top Bar */}
      <div className="flex items-center  lg:justify-between  py-4 mx-auto ">
        {/* <Logo /> */}
        LOGO
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 bg-zinc-900 px-6 py-2 rounded-xl">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium px-2 py-1 rounded hover:text-emerald-400 transition"
            >
              {item.title}
            </Link>
          ))}
          <span className="text-zinc-500">|</span>
          <Link
            href="/docs"
            className="text-sm font-medium px-2 py-1 rounded hover:text-emerald-400 transition"
          >
            Documentation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center gap-2  bg-zinc-900 px-4 py-4 rounded-lg text-sm font-medium shadow hover:bg-zinc-800 transition ml-auto"
        >
          Menu {menuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden w-full mt-6 bg-black/90 backdrop-blur border-t border-zinc-800 px-4 pb-4 pt-2 space-y-3  max-h-[calc(100vh-1rem)] overflow-y-auto rounded-2xl">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)} // auto-close on link click
              className="block rounded-xl bg-zinc-900/60 hover:bg-zinc-800 px-4 py-3 transition border border-zinc-800"
            >
              <div className="text-white font-semibold text-base">
                {item.title}
              </div>
              <div className="text-zinc-400 text-sm">{item.description}</div>
            </Link>
          ))}
          <Link
            href="/docs"
            className="block rounded-xl bg-zinc-900/60 hover:bg-zinc-800 px-4 py-3 transition border border-zinc-800"
          >
            Documentation
          </Link>
        </div>
      )}
    </div>
  );
}
