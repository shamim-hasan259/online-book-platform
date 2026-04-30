"use client";

import Marquee from "react-fast-marquee";

const booksNews = [
  {
    _id: "1",
    title: "New Arrival: Atomic Habits by James Clear ",
  },
  {
    _id: "2",
    title: "Trending Now: Clean Code - Must Read for Developers ",
  },
  {
    _id: "3",
    title: "Science Pick: A Brief History of Time by Stephen Hawking",
  },
  {
    _id: "4",
    title: "Special Offer: Get Premium Membership with Discount ",
  },
  {
    _id: "5",
    title: "Story Section Updated: New Fiction Books Added ",
  },
];

const BookMarquee = () => {
  return (
    <div className="flex items-center gap-4 bg-gray-100 py-4 px-4  mt-10 rounded-lg shadow-sm ">
      <button className="bg-linear-to-l from-purple-500 to-purple-800  text-white px-4 py-2 rounded-md font-semibold whitespace-nowrap">
        Latest Books
      </button>

      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        <div className="flex gap-10">
          {booksNews.map((item) => (
            <span key={item._id} className="text-gray-700 font-medium">
              {item.title}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BookMarquee;
