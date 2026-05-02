"use client";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
const BorrowBook = () => {
  const { data } = useSession();
  const borrowBook = () => {
    console.log(data);
    if (!data.user) {
      toast.error("use not exisist");
      redirect("/auth/login");
    }
    toast.success("borrow book successfully");
  };

  return (
    <div>
      <button
        onClick={borrowBook}
        className="px-4 py-2 bg-linear-to-l from-purple-500 to-purple-800 text-white rounded"
      >
        Borrow Book
      </button>
    </div>
  );
};

export default BorrowBook;
