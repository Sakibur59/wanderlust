"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/my-bookings", label: "My Bookings" },
    { href: "/add-destination", label: "Add Destination" },
  ];

  return (
    <div className="p-4 bg-white shadow-sm relative z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-4 items-center">
          {navLinks.map((link) => (
            <li key={link.href} className="font-bold">
              <Link href={link.href} className="hover:text-cyan-500 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo — centered on mobile, in-flow on desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Image
            src="/assets/Wanderlast.png"
            alt="Logo"
            width={130}
            height={130}
          />
        </div>

        {/* Desktop Right */}
        <ul className="hidden md:flex gap-3 items-center">
          <li className="font-bold">
            <Link href="/profile" className="hover:text-cyan-500 transition-colors">
              Profile
            </Link>
          </li>
          {user ? (
            <>
              <li className="flex items-center gap-2">
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user.name}
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <span className="font-medium text-sm">{user.name}</span>
              </li>
              <li>
                <Button
                  size="sm"
                  onClick={handleSignOut}
                  variant="danger"
                  className="rounded-none"
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li className="font-bold">
                <Link href="/login" className="hover:text-cyan-500 transition-colors">
                  Login
                </Link>
              </li>
              <li className="font-bold">
                <Link href="/signup" className="hover:text-cyan-500 transition-colors">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto p-2 text-gray-700"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden mt-3 border-t pt-4 flex flex-col gap-4 max-w-7xl mx-auto">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href} className="font-bold">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-500 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="font-bold">
              <Link href="/profile" onClick={() => setMenuOpen(false)} className="hover:text-cyan-500 transition-colors">
                Profile
              </Link>
            </li>
          </ul>

          {user ? (
            <div className="flex items-center justify-between border-t pt-3">
              <div className="flex items-center gap-2">
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user.name}
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <span className="font-medium text-sm">{user.name}</span>
              </div>
              <Button
                size="sm"
                onClick={handleSignOut}
                variant="danger"
                className="rounded-none"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-4 border-t pt-3">
              <Link href="/login" onClick={() => setMenuOpen(false)} className="font-bold hover:text-cyan-500 transition-colors">
                Login
              </Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)} className="font-bold hover:text-cyan-500 transition-colors">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;