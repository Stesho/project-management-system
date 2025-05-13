"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  href: string;
  iconSrc: string;
  alt: string;
  children: string;
}

export function MenuLink({ href, iconSrc, alt, children }: MenuLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <li className="mb-2">
      <Link
        href={href}
        className={`flex px-4 py-2 hover:bg-sky-100 rounded-[4] ${
          isActive ? "bg-sky-100" : ""
        }`}
      >
        <Image src={iconSrc} alt={alt} />
        <span className="ml-[10]">{children}</span>
      </Link>
    </li>
  );
}
