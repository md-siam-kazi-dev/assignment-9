"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
 
export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "All Pets",
      link: "/allpets",
    },
    {
      name: "My Requests",
      link: "/myrequests",
    },
    {
      name: "Add Pet",
      link: "/addpet",
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="fixed z-40 bg-white w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex gap-2 items-center ">
            <img src="/logo.png" className="w-10 h-10"></img>
            <h1 className="text-xl font-bold ">PawNest</h1>
          </div>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Link href='/login'><NavbarButton variant="secondary">Login</NavbarButton></Link>
            <Link href='/signup'><NavbarButton variant="primary" >Sign up</NavbarButton></Link>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex gap-2 items-center ">
            <img src="/logo.png" className="w-10 h-10"></img>
            <h1 className="text-xl font-bold ">PawNest</h1>
          </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu className="bg-white"
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative bg-white text-neutral-600 dark:text-neutral-300"
              >
                <span className="block ">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Sign Up
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
 
      {/* Navbar */}
    </div>
  );
}