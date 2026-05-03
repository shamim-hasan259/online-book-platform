"use client";
import BookCard from "@/components/BookCard";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import NoBookFound from "@/components/NoBookFound";
import { SearchField } from "@heroui/react";
import { useEffect, useState } from "react";
const AllBooksPage = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState();
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredBook, setFilteredBook] = useState();
  const allBooks = async () => {
    setLoading(true);
    const res = await fetch(
      "https://online-book-platform-pi.vercel.app/book.json"
    );
    const books = await res.json();
    setBooks(books);
    setFilteredBook(books);
    setLoading(false);
    return allBooks;
  };
  const allCategories = async () => {
    setLoading(true);
    const res = await fetch(
      "https://online-book-platform-pi.vercel.app/categories.json"
    );
    const categories = await res.json();
    setCategories(categories);
    setLoading(false);
    return allCategories;
  };

  useEffect(() => {
    allBooks();
  }, [searchText]);

  useEffect(() => {
    allCategories();
  }, []);
  // searching
  const handleSearch = () => {
    const searchBook = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setBooks(searchBook);
  };
  const handleFilterByCategory = (name) => {
    const filteredBookData = filteredBook.filter(
      (book) => book.category == name
    );
    setBooks(filteredBookData);
  };
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center my-8 gap-4">
          <h2 className="text-2xl font-bold text-center bg-linear-to-l from-purple-500 to-purple-800 bg-clip-text text-transparent line-clamp-1">
            Featured Books
          </h2>
          <SearchField
            name="search"
            render={(props) => <div {...props} data-custom="foo" />}
          >
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search Book"
              />
              <SearchField.ClearButton />
              <Button onClick={handleSearch} text={"Search book"} />
            </SearchField.Group>
          </SearchField>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-3">
            <div className="shadow px-8 py-5 bg-white  flex flex-col gap-3">
              {loading ? (
                <Loading />
              ) : (
                categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      handleFilterByCategory(category.name);
                      setActive(category.name);
                    }}
                    className={`w-full px-4 py-2 rounded font-semibold cursor-pointer ${
                      active === category.name
                        ? "bg-linear-to-l from-purple-500 to-purple-800 text-white"
                        : " bg-neutral-100 text-violet-400"
                    }`}
                  >
                    {category.name}
                  </button>
                ))
              )}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            {books.length === 0 && <NoBookFound />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loading ? (
                <Loading />
              ) : (
                books.map((book) => <BookCard key={book.id} book={book} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBooksPage;
