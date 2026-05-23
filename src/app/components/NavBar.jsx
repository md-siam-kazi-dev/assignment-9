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

import {  LayoutDashboard, LogIn, LogOut, Menu, Rows3,Home,Cat, Book, XIcon } from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";




import { useEffect, useState } from "react";
import { FcAbout } from "react-icons/fc";

export function NavbarDemo() {
  const [showMenu, setShowMenu] = useState(false);
  const [user,setUser] = useState({});

  const {data,isPending} = useSession();
  const router = useRouter();


  
  console.log(user);
  const navItems = [
    {
      name: <><Home />Home</>,
      link: "/",
    },
    {
      name: <><Cat /> All Pets</>,
      link: "/allpets",
    },
    
    {
      name:<><Book />About</>,
      link:''
    }
   
  ];
  useEffect(() => {
    setUser(data?.user);
  },[data?.user])

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
      {showMenu ? <XIcon />:<Menu />}
    </button>
  </div>

  {showMenu && (
    <div className="absolute w-80 right-0 mt-3 flex flex-col bg-white shadow-lg p-5 rounded-xl p-2 min-w-[120px] border">
      <Link href='/dashboard' className=" font-bold p-3 flex gap-3" onClick={()=> setShowMenu(!showMenu)}><LayoutDashboard /> DashBoard</Link>
      <Link href='/dashboard/listing' className=" font-bold p-3 flex gap-3" onClick={()=> setShowMenu(!showMenu)}><Rows3 />My Listing</Link>
      <button className="btn bg-black" 
        onClick={async() => {
          await authClient.signOut();
          setUser(null)
           router.refresh()
            router.replace('/')
           
          setShowMenu(false);
        }}
        className="w-full text-left px-3 py-2 btn btn-primary rounded-lg"
      >
       <LogOut /> Sign Out
      </button>
    </div>
  )}
</div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/login">
                <NavbarButton variant="secondary " className='flex'><LogIn />Login</NavbarButton>
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
            className="bg-white z-44"
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative flex gap-2 bg-white text-neutral-600 dark:text-neutral-300"
              >
                <span className="flex gap-2.5 ">{item.name}</span>
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
                className="relative flex gap-3 bg-white text-neutral-600 dark:text-neutral-300"
              >
              <LayoutDashboard />  Dashboard
              </Link>
                <button
                  className="btn btn-primary"
                  onClick={async() => {await authClient.signOut();
                    router.refresh()
                    router.replace('/signup')
                    setUser(null);
                  }}
                >
                <LogOut />Sign Out
                </button>{" "}
                
              </>
            ) : (
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => {setIsMobileMenuOpen(false);router.push('/login')}}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => {setIsMobileMenuOpen(false),router.push('/signup')}}
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
