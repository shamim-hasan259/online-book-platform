import BookCard from "@/components/BookCard";
import Category from "@/components/Category";
import Search from "@/components/Search";
import React from "react";
export const metadata = {
  title: "Book -- AllBooks",
};
const AllBooksPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  const res = await fetch(
    "https://online-book-platform-pi.vercel.app/book.json"
  );
  const books = await res.json();
  const filteredCategory = category
    ? books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      )
    : books;
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center my-8 gap-4">
          <h2 className="font-bold text-xl lg:text-2xl">Featured Books</h2>
          <Search />
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-3">
            <Category name={category} />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCategory.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBooksPage;
