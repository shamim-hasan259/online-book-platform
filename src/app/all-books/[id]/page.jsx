import BorrowBook from "@/components/BorrowBook";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const BookDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://online-book-platform-pi.vercel.app/book.json"
  );

  const books = await res.json();

  const book = books.find((b) => b.id == id);

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-6">
        <Link href="/">
          <Button text="← Back" />
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100">
        <div className="w-full">
          <Image
            width={1000}
            height={600}
            src={book.image}
            alt={book.title}
            className="w-full  md:h-[450px] object-cover"
          />
        </div>

        <div className="p-5 sm:p-8 md:p-10 space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {book.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-600">
              By{" "}
              <span className="font-semibold text-gray-800">{book.author}</span>
            </p>
          </div>

          <p className="text-gray-700 leading-8 text-sm sm:text-base">
            {book.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-4 py-1.5 text-sm bg-blue-100 text-blue-700 rounded-full font-medium">
              {book.category}
            </span>

            <span className="px-4 py-1.5 text-sm bg-green-100 text-green-700 rounded-full font-medium">
              {book.available_quantity} copies left
            </span>
          </div>

          <div className="pt-3">
            <BorrowBook />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
