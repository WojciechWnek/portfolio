"use client";

import Link from "next/link";

type NavLinkProps = {
  label: string;
  link: string;
  onNavClick: () => void;
};

const NavLink = ({ label, link, onNavClick }: NavLinkProps) => (
  <Link
    href={link}
    className="hover:opacity-70 transition-opacity"
    onClick={onNavClick}
  >
    {label}
  </Link>
);

export default NavLink;
