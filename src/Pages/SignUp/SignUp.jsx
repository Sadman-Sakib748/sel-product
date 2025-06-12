import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUserProfile, googleSignIn } = useAuth();

  const postUserToDB = async (userInfo) => {
    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      return data;
    } catch (err) {
      console.error("DB error:", err);
      toast.error("Failed to save user");
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await createUser(data.email, data.password);
      await updateUserProfile(data.name, data.photoURL);

      const userInfo = { name: data.name, email: data.email };
      const res = await postUserToDB(userInfo);

      if (res?.insertedId || res?.message === "User already exists") {
        toast.success("Account created successfully!");
        reset();
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (error) {
      console.error(error);
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await googleSignIn();
      const userInfo = {
        name: result.user.displayName,
        email: result.user.email,
      };

      const res = await postUserToDB(userInfo);
      toast.success("Signed in with Google!");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      toast.error("Google Sign-In failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - Hobby</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-800 to-indigo-900 px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-xl rounded-xl p-6 backdrop-blur-md bg-opacity-80 dark:bg-opacity-70 border border-white dark:border-gray-700">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Create Account
          </h2>

          {loading ? (
            <div className="flex justify-center my-10">
              <svg
                className="animate-spin h-8 w-8 text-purple-600"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 mt-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Photo URL</label>
                  <input
                    type="text"
                    {...register("photoURL", { required: "Photo URL is required" })}
                    placeholder="Your Photo URL"
                    className="w-full px-3 py-2 mt-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500"
                  />
                  {errors.photoURL && <p className="text-red-500 text-sm">{errors.photoURL.message}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/,
                        message: "Invalid email format",
                      },
                    })}
                    placeholder="Your Email"
                    className="w-full px-3 py-2 mt-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-800 dark:text-gray-200">Password</label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*\d)(?=.*[a-z]).{6,}$/,
                        message:
                          "Use upper, lower, number, and special char",
                      },
                    })}
                    placeholder="Your Password"
                    className="w-full px-3 py-2 mt-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition duration-200"
                >
                  Sign Up
                </button>
              </form>

              <div className="my-4 text-center text-sm text-gray-600 dark:text-gray-300">
                ─ OR ─
              </div>

              <button
                onClick={handleGoogleSignIn}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition duration-200"
              >
                Continue with Google
              </button>

              <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
                Already have an account?{" "}
                <Link to="/signIn" className="text-purple-300 underline hover:text-purple-400">
                  Sign In
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
