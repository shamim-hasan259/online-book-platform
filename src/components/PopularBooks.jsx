import BookCard from "./BookCard";
const PopularBooks = async () => {
  const res = await fetch(
    "https://online-book-platform-pi.vercel.app/book.json"
  );
  const data = await res.json();
  const books = data.slice(0, 4);
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center bg-linear-to-l from-purple-500 to-purple-800 bg-clip-text text-transparent line-clamp-1">
          Most Popular Books
        </h2>
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
