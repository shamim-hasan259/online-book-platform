import Link from "next/link";
const Category = async ({ name }) => {
  const res = await fetch(
    "https://online-book-platform-pi.vercel.app/categories.json"
  );
  const categories = await res.json();
  return (
    <div className="shadow px-8 py-5 bg-white  flex flex-col gap-3">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`?category=${category.name.toLowerCase()}`}
        >
          <button
            className={`w-full px-4 py-2 rounded font-semibold cursor-pointer ${
              category.name.toLowerCase() == name?.toLowerCase()
                ? "bg-linear-to-l from-purple-500 to-purple-800 text-white"
                : "bg-neutral-300"
            }`}
          >
            {category.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
