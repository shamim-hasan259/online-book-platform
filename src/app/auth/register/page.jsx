"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsEyeSlash } from "react-icons/bs";
import { FaEye, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const signOut = async () => {
    await authClient.signOut();
  };
  const googleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleRegisterFunc = async (userData) => {
    const { name, photoUrl, email, password } = userData;
    const { data, error } = await authClient.signUp.email({
      name,
      image: photoUrl,
      email,
      password,
    });

    if (data) {
      signOut();
      toast.success("register successfully");
      router.push("/auth/login");
    }
    if (error) {
      toast.error(`${error.message}`);
    }
  };
  return (
    <div>
      <div className="container mx-auto flex justify-center items-center">
        <div className="bg-slate-100 shadow rounded-lg px-10 py-5 mt-20 ">
          <h2 className="font-bold text-2xl mb-5 text-center bg-linear-to-l from-purple-500 to-purple-800 bg-clip-text text-transparent line-clamp-1">
            Register Now
          </h2>
          <form onSubmit={handleSubmit(handleRegisterFunc)}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter your email"
                {...register("name", {
                  required: "Name field is required",
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Photo Url</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter your photo url"
                {...register("photoUrl", {
                  required: "PhotoUrl field is required",
                })}
              />
              {errors.photoUrl && (
                <p className="text-red-500">{errors.photoUrl.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email field is required",
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset relative bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Password</legend>
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password field is required",
                })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[40%] right-5"
              >
                {showPassword ? <FaEye size={20} /> : <BsEyeSlash size={20} />}
              </span>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </fieldset>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-linear-to-l from-purple-500 to-purple-800 text-white rounded">
                Register
              </button>
              <button
                className="flex items-center justify-center w-full px-4 py-2 bg-linear-to-l from-purple-500 to-purple-800 text-white rounded"
                onClick={googleLogin}
              >
                <FaGoogle size={20} className="me-2" />
                Login with google
              </button>
            </div>
          </form>
          <p className="text-center mt-5">
            Already Have An Account ?{" "}
            <Link className="text-purple-500" href="/auth/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
