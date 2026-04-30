"use client";
import { Card } from "@heroui/react";
import Image from "next/image";

import Link from "next/link";
const BookCard = ({ book }) => {
  console.log(book);
  return (
    <Card className="shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <Image
        width={300}
        height={300}
        src={book.image}
        alt={book.title}
        className="h-full max-w-full mx-auto object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold">{book.title}</h2>

        <p className="text-sm text-gray-500"> {book.author}</p>

        <p className="text-xs text-gray-600 line-clamp-2">{book.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
            {book.category}
          </span>

          <span className="text-xs font-medium">
            Qty: {book.available_quantity}
          </span>
        </div>

        <Link href={`/all-books/${book.id}`}>
          <button className="bg-linear-to-l from-purple-500 to-purple-800 text-white w-full px-4 py-2 rounded cursor-pointer">
            Show Book Details
          </button>
        </Link>
      </div>
    </Card>
  );
};
export default BookCard;
