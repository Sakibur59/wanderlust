"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <nav className="flex justify-between p-4 bg-white">
      <ul className="flex gap-2">
        <li className="font-bold">
          <Link href="/">Home</Link>
        </li>
        <li className="font-bold">
          <Link href="/destinations">Destinations</Link>
        </li>
        <li className="font-bold">
          <Link href="/my-bookings">My Bookings</Link>
        </li>
        <li className="font-bold">
          <Link href="/add-destination">Add Destination</Link>
        </li>
      </ul>
      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          alt="Logo"
          width={150}
          height={150}
        />
      </div>
      <ul className="flex gap-3 items-center">
        <li className="font-bold">
          <Link href="/profile">
            {/* <FaRegUser /> */}
            Profile
          </Link>
        </li>
        {user ? (
          <>
            <li className="flex items-center gap-2">
              <Avatar>
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt="John Doe"
                  src={user?.image}
                />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              {user.name}
            </li>
            <li>
              <Button
                onClick={handleSignOut}
                variant="danger"
                className={"rounded-none"}
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li className="font-bold">
              <Link href={"/login"}>Login</Link>
            </li>
            <li className="font-bold">
              <Link href={"/signup"}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
