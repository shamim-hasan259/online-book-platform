import Link from "next/link";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="relative mt-10">
      <div className="h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-extrabold text-2xl bg-linear-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Book Platform
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              A modern online library platform where users can explore, borrow,
              and manage books easily from anywhere.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-black dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-books"
                  className="hover:text-black dark:hover:text-white"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-black dark:hover:text-white"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>Email: support@bookhub.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Location: Bangladesh</li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-black dark:hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-black dark:hover:text-white">
                <BsTwitter size={20} />
              </a>
              <a href="#" className="hover:text-black dark:hover:text-white">
                <BsGithub size={20} />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Start Reading
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discover thousands of books and start borrowing today.
            </p>

            <Link href="/all-books">
              <Button text={"Browse Book"} />
            </Link>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} BookHub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
