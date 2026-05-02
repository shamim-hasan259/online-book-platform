"use client";

import { useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
// import Image from "next/image";

import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import userImg from "../assets/user.png";
import Button from "./Button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";
const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const { data } = useSession();
  const user = data?.user;
  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("logout successfully");
    router.refresh();
  };
  return (
    <div className="border-b px-4 bg-white">
      <nav className="flex justify-between items-center py-4 container mx-auto">
        <h2 className="font-extrabold text-2xl bg-linear-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
          Book Platform
        </h2>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink />
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              {/* <Image
                height={40}
                width={40}
                src={user.image || userImg}
                alt="user"
                className="rounded-full object-cover"
              /> */}
              <span className="font-bold ">{user?.name}</span>
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
            <NavLink />
          </ul>

          <div className="flex flex-col items-center gap-4 mt-6">
            {user ? (
              <div className="flex flex-col items-center gap-3">
                {/* <Image
                  height={50}
                  width={50}
                  src={user.image || userImg}
                  alt="user"
                  className="rounded-full"
                /> */}
                <span className="font-bold ">{user?.name}</span>
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
