"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";

// type HamburgerMenuProps = {
//   menuItems?: [{ displayText: string; href: string }];
// };

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger>
        <Menu size={28} />
      </SheetTrigger>
      <SheetContent className="border-l-0 bg-background">
        <SheetHeader className="mb-4 text-left">
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: `border-primary px-3 py-2.5 text-base font-semibold hover:!bg-primary hover:text-white md:px-4 md:py-3 ${
                pathname === "/" &&
                "border-white bg-white hover:!bg-white hover:!text-black"
              }`,
            })}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Inicio</span>
          </Link>
          <Link
            href="/nouns-dao-amigos"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: `border-primary px-3 py-2.5 text-base font-semibold hover:!bg-primary hover:text-white md:px-4 md:py-3 ${
                pathname === "/nouns-dao-amigos" &&
                "border-white bg-white hover:!bg-white hover:!text-black"
              }`,
            })}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>DAO</span>
          </Link>
          <Link
            href="/prop-house"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: `border-primary px-3 py-2.5 text-base font-semibold hover:!bg-primary hover:text-white md:px-4 md:py-3 ${
                pathname === "/prop-house" &&
                "border-white bg-white hover:!bg-white hover:!text-black"
              }`,
            })}
            onClick={() => setIsMenuOpen(false)}
          >
            Prop House
          </Link>
          <Link
            href="/token-amigo"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: `border-primary px-3 py-2.5 text-base font-semibold hover:!bg-primary hover:text-white md:px-4 md:py-3 ${
                pathname === "/token-amigo" &&
                "border-white bg-white hover:!bg-white hover:!text-black"
              }`,
            })}
            onClick={() => setIsMenuOpen(false)}
          >
            AMIGO
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
