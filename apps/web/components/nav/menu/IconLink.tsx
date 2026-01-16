"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";

type IconLinkProps = {
  label: string;
  link: string;
};

const IconLink = ({
  label,
  link,
  children,
}: PropsWithChildren<IconLinkProps>) => (
  <Link
    href={link}
    className="hover:opacity-70 transition-opacity"
    aria-label={label}
  >
    <>{children}</>
  </Link>
);

export default IconLink;
