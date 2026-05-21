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
import { Spinner } from "@/components/ui/spinner";
import { authClient, useSession } from "@/lib/auth-client";
import { router } from "better-auth/api";
import { Hamburger, HamburgerIcon, Menu } from "lucide-react";

import Link from "next/link";
import { redirect } from "next/navigation";
import Router from "next/router";
import { useState } from "react";

export function NavbarDemo() {
  const [showMenu, setShowMenu] = useState(false);

  const {data,isPending} = useSession();


  const user = data?.user;
  console.log(user);
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
      name:'About',
      link:'/about'
    }
   
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
          {isPending ? (
            <Spinner />
          ) : user ? (
            <div className="relative">
  
  <div className="flex gap-2 items-center">
    <img
      src={user.image}
      className="w-8 h-8 rounded-full"
      alt="user"
    />

    <h1 className="font-semibold">
      {user.name}
    </h1>

    <button
      onClick={() => setShowMenu(!showMenu)}
      className="cursor-pointer"
    >
      <Menu size={18} />
    </button>
  </div>

  {showMenu && (
    <div className="absolute right-0 mt-3 flex flex-col bg-white shadow-lg p-5 rounded-xl p-2 min-w-[120px] border">
      <Link href='/dashboard' className=" font-bold p-3" onClick={()=> setShowMenu(!showMenu)}>DashBord</Link>
      <Link href='/listing' className=" font-bold p-3" onClick={()=> setShowMenu(!showMenu)}>My Listing</Link>
      <button className="btn bg-black" 
        onClick={async() => {
          await authClient.signOut();
          Router.push('/')
          setShowMenu(false);
        }}
        className="w-full text-left px-3 py-2 btn btn-primary rounded-lg"
      >
        Sign Out
      </button>
    </div>
  )}
</div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/login">
                <NavbarButton variant="secondary">Login</NavbarButton>
              </Link>
              <Link href="/signup">
                <NavbarButton variant="primary">Sign up</NavbarButton>
              </Link>
            </div>
          )}
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

          <MobileNavMenu
            className="bg-white"
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative bg-white text-neutral-600 dark:text-neutral-300"
              >
                <span className="block ">{item.name}</span>
              </Link>
            ))}
            {isPending ? (
              <Spinner />
            ) : user ? (
              <>
                <div className="flex gap-2 items-center">
                  <img src={user.image} className="w-8 h-8 rounded-full"></img>
                  <h1 className="font-semibold">{user.name}</h1>
                </div>
                <Link
                
                href='/dashboard'
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative bg-white text-neutral-600 dark:text-neutral-300"
              >
                Dashboard
              </Link>
                <button
                  className="btn btn-primary"
                  onClick={() => authClient.signOut()}
                >
                  Sign Out
                </button>{" "}
                
              </>
            ) : (
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
            )}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
