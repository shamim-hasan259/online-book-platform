"use client";
import { useState } from "react";
// import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import userImg from "../assets/user.png";
import { usePathname } from "next/navigation";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { data } = useSession();
  // const user = data?.user;

  // const handleLogOut = async () => {
  //   await authClient.signOut();
  // };
  const pathname = usePathname();

  return (
    <div className="border-b px-4">
      <nav className="flex justify-between items-center py-3 container mx-auto">
        <h2 className="font-extrabold text-2xl bg-linear-to-l from-purple-500 to-purple-800 bg-clip-text text-transparent line-clamp-1">
          Book Platform
        </h2>

        <ul className="hidden md:flex items-center gap-6 text-sm list-none">
          <li>
            <Link
              className={`${
                pathname === "/" && "border border-b-purple-500 pb-2"
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/all-books" && "border border-b-purple-500 pb-2"
              }`}
              href="/all-books"
            >
              All Books
            </Link>
          </li>

          <li>
            <Link
              className={`${
                pathname === "/profile" && "border border-b-purple-500 pb-2"
              }`}
              href="/profile"
            >
              My Profile
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <>
            <Image
              height={40}
              width={40}
              src={userImg}
              alt="userImg"
              className="rounded-full"
            />
            <Button text={"Logout"} />
          </>

          <Link href="/auth/login">
            <Button text={"Login"} />
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <CiMenuFries size={20} />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col justify-center items-center gap-4 pb-4 text-sm list-none">
          <li>
            <Link
              className={`${
                pathname === "/" && "border border-b-purple-500 pb-2"
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === "/all-books" && "border border-b-purple-500 pb-2"
              }`}
              href="/all-books"
            >
              All Books
            </Link>
          </li>

          <li>
            <Link
              className={`${
                pathname === "/profile" && "border border-b-purple-500 pb-2"
              }`}
              href="/profile"
            >
              My Profile
            </Link>
          </li>
          <>
            <div className="flex items-center gap-2">
              <Image
                height={35}
                width={35}
                src={userImg}
                alt="userImg"
                className="rounded-full"
              />
            </div>
            <button className="px-4 py-2 bg-linear-to-l from-purple-500 to-purple-800 text-white rounded">
              Logout
            </button>
          </>
          <Link href="/auth/login">
            <button className="px-4 py-2 bg-linear-to-l from-purple-500 to-purple-800 text-white rounded ">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
