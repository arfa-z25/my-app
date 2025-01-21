"use client";
import axios from "axios";
import { useState } from "react";


export default function Signup() {
  const [employee, setemployee] = useState({
    First_Name: " ",
    Last_Name: " ",
    Department: " ",
    phone_no: " ",
    Role: " ",
    email: " ",
    password: " ",
    job_Title: " ",
  });



  const handleChange = (e) => {
    // Extract the name and value from the input field that triggered the event
    const { name, value } = e.target;
    // Update the task state with the new value for the corresponding field
    setemployee((prevemp) => ({
      ...prevemp, // Copy the previous state
      [name]: value, // Update the field with the new value
    }));
  };

  const create = async (e) => {
    e.preventDefault();
    // Client-side validation
    if (!employee.First_Name || !employee.Last_Name || !employee.email) {
      console.log("Please fill in all required fields");
      return;
    }

    try {
      const res = await axios.post("/api/Data", employee);
      console.log(res);
      setemployee({
        First_Name: " ",
        Last_Name: " ",
        Department: " ",
        phone_no: " ",
        Role: " ",
        email: " ",
        password: " ",
        job_Title: " ",
      });
     
    } catch (error) {
      console.log("Cannot create data in table", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-auto bg-gradient-to-r from-blue-500 via-gray-700 to-black">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mt-16">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Create Account
        </h1>
        <form onSubmit={create}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="First_Name"
              placeholder="Enter your first name"
              value={employee.First_Name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              name="Last_Name"
              value={employee.Last_Name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-gray-700"
            >
              Organization Name
            </label>
            <input
              type="text"
              id="organization"
              name="Department"
              value={employee.Department}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your organization name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone_no"
              value={employee.phone_no}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              name="Role"
              value={employee.Role}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="hr">HR</option>
              <option value="employee">Employee</option>
            </select>
          </div>
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
              value={employee.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
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
              value={employee.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="job_Title"
              value={employee.job_Title}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your job Title"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
