import BookCard from "@/components/BookCard";
import React from "react";

const AllBooksPage = async () => {
  const res = await fetch(
    "https://online-book-platform-pi.vercel.app/book.json"
  );
  const books = await res.json();
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooksPage;
