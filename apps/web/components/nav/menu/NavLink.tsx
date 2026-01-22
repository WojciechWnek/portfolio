"use client";

import Link from "next/link";

type NavLinkProps = {
  label: string;
  link: string;
  onNavClick: () => void;
};

const scrollToView = (link: string) => {
  const element = document.querySelector(link);
  if (element === null) return;
  element.scrollIntoView();
};

const NavLink = ({ label, link, onNavClick }: NavLinkProps) => (
  <Link
    href={"/" + link}
    className="transition-opacity hover:opacity-70"
    onClick={() => {
      onNavClick();
      scrollToView(link);
    }}
  >
    {label}
  </Link>
);

export default NavLink;
