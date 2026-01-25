"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";

type IconLinkProps = {
  label: string;
  link: string;
};

const IconLink = ({ label, link, children }: PropsWithChildren<IconLinkProps>) => (
  <Link href={link} aria-label={label} target="_blank">
    <>{children}</>
  </Link>
);

export default IconLink;
