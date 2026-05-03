import Link from "next/link";
const Category = async ({ name }) => {
  const res = await fetch(
    "https://online-book-platform-pi.vercel.app/categories.json"
  );
  const categories = await res.json();
  return (
    <div>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`?category=${category.name.toLowerCase()}`}
        >
          <button
            className={`w-full px-4 py-2 rounded font-semibold cursor-pointer bg-neutral-100 text-violet-400
         
          
         
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
