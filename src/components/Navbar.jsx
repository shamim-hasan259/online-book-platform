"use client";

import { useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import userImg from "../assets/user.png";
import { usePathname } from "next/navigation";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data } = useSession();
  const user = data?.user;
  const handleLogOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="border-b px-4 bg-white">
      <nav className="flex justify-between items-center py-4 container mx-auto">
        <h2 className="font-extrabold text-2xl bg-linear-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
          Book Platform
        </h2>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link
              href="/"
              className={`hover:text-purple-600 transition ${
                pathname === "/"
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-books"
              className={`hover:text-purple-600 transition ${
                pathname === "/all-books"
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : ""
              }`}
            >
              All Books
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className={`hover:text-purple-600 transition ${
                pathname === "/profile"
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : ""
              }`}
            >
              My Profile
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <Image
                height={40}
                width={40}
                src={user.image || userImg}
                alt="user"
                className="rounded-full object-cover"
              />
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-linear-to-l from-purple-500 to-purple-800 text-white rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/auth/login">
              <Button text="Login" />
            </Link>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <AiOutlineClose /> : <CiMenuFries />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden pb-6 pt-2 bg-white border-t">
          <ul className="flex flex-col items-center gap-5 text-sm font-medium">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-books" onClick={() => setMenuOpen(false)}>
                All Books
              </Link>
            </li>
            <li>
              <Link href="/profile" onClick={() => setMenuOpen(false)}>
                My Profile
              </Link>
            </li>
          </ul>

          <div className="flex flex-col items-center gap-4 mt-6">
            {user ? (
              <div className="flex flex-col items-center gap-3">
                <Image
                  height={50}
                  width={50}
                  src={user.image || userImg}
                  alt="user"
                  className="rounded-full"
                />
                <button
                  onClick={handleLogOut}
                  className="px-4 py-2 bg-linear-to-l from-purple-500 to-purple-800 text-white rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
                <Button text="Login" />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
