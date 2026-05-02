"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const EditProfilePage = () => {
  const editProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    await authClient.updateUser({
      name,
      image,
    });
    redirect("/profile");
  };
  return (
    <section className="h-[60vh]">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-slate-100 shadow rounded-lg px-10 py-5 mt-20 ">
          <h2 className="font-bold text-2xl mb-5 text-center bg-linear-to-l from-purple-500 to-purple-800 bg-clip-text text-transparent line-clamp-1">
            Edit Profile
          </h2>
          <form onSubmit={editProfile}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
              />
            </fieldset>
            <fieldset className="fieldset relative bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">PhotUrl</legend>
              <input
                type="text"
                name="image"
                className="input"
                placeholder="Enter your photoUrl"
              />
            </fieldset>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-linear-to-l from-purple-500 to-purple-800 text-white rounded">
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProfilePage;
