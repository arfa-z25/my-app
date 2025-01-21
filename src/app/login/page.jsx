"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email_user, set_email] = useState("");
  const [pass, set_pass] = useState("");

  const router = useRouter(); // Moved here for proper usage

  // Function to check user
  const checkuser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/Data");
  
      // Find the user with the matching email
      const user = response.data.find(user => user.email === email_user);
  
      if (user) {
        // Check if the password matches
        if (user.password === pass) {
          const role = user.Role.toLowerCase(); // Normalize the role for case-insensitive matching
          const slug = user.id;
  
          console.log("User found:", user);
          console.log("Redirecting based on role:", role);
  
          // Redirect based on role
          if (role === "employee") {
            router.push(`/profile/${slug}`);
          } else if (role === "hr") {
            router.push('/sidebar/dashboard');
          }
        } else {
          alert("Incorrect password.");
        }
      } else {
        alert("User with this email not found.");
      }
  
      // Clear email and password input fields after validation
      set_email("");
      set_pass("");
    } catch (error) {
      console.error("Error in fetching user:", error);
      alert("There was an error processing your request.");
    }
  };
  
  const handle_email = (e) => {
    set_email(e.target.value);
  };

  const handle_pass = (e) => {
    set_pass(e.target.value);
  };

  return (
    <div
      className="w-full h-screen bg-gradient-to-r from-blue-500 via-gray-700 to-black flex justify-center items-center"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
        <form onSubmit={checkuser}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email_user}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              onChange={handle_email}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={pass}
              onChange={handle_pass}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <Link href={'/Signup'}>Create Account</Link>
        </p>
      </div>
    </div>
  );
}
