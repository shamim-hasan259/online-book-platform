import BorrowBook from "@/components/BorrowBook";
import Image from "next/image";

const BookDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://online-book-platform-pi.vercel.app/book.json"
  );
  const books = await res.json();
  const book = books.find((b) => b.id == id);
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            width={400}
            height={200}
            src={book.image}
            alt={book.title}
            className="object-cover h-full max-w-full rounded-2xl shadow-lg mx-auto"
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {book.title}
          </h1>

          <p className="text-lg text-gray-600">
            <span className="font-semibold">{book.author}</span>
          </p>

          <p className="text-gray-700 leading-relaxed">{book.description}</p>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
              {book.category}
            </span>

            <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
              {book.available_quantity} copies left
            </span>
          </div>

          <BorrowBook />
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
