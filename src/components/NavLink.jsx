"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();
  return (
    <>
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
    </>
  );
};

export default NavLink;
