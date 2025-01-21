"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Manage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("/api/Data");
        setEmployees(response.data); // Ensure the API returns the correct structure
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);


  const filterdata = async(e)=>{
    
    const array = employees.filter((employee) => employee.Department.toLowerCase() === filter.toLowerCase());
      setEmployees(array);
  


  }
  const resetFilter = () => {
    setFilter("");
    setEmployees(employees);
  };
  

  return (
    <div className="font-sans bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Employee Management</h1>
      </div>

      {/* Navigation */}
      <div className="bg-gray-100 border-b border-gray-300 px-6">
        <div className="flex space-x-6">
          <div className="py-3 border-b-2 border-blue-600 text-blue-600 font-medium">
            Manage Employees
          </div>
          <div className="py-3 text-gray-500 hover:text-blue-600 cursor-pointer">
            <Link href="/sidebar/flight">Request Time Off</Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Manage Employees</h2>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={filterdata}>
            Filter Employee
          </button>
          <button
               className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                 onClick={resetFilter}
                                            >
              Reset Filter
        </button>

          <input
            type="text"
            placeholder="Filter by department..."
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-md overflow-hidden">
          {loading ? (
            <div className="p-6 text-center text-gray-500">Loading...</div>
          ) : employees.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No employees found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                {/* Table Header */}
                <thead className="bg-gray-100 text-gray-600 text-sm">
                  <tr>
                    <th className="px-6 py-4 text-left">Employee Name</th>
                    <th className="px-6 py-4 text-left">Phone Number</th>
                    <th className="px-6 py-4 text-left">Department</th>
                    <th className="px-6 py-4 text-left">Job Title</th>
                    <th className="px-6 py-4 text-left">Role</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="text-gray-700 text-sm">
                  {employees.map((employee) => (
                    <tr
                      key={employee.email} // Ensure `id` exists in your API data
                      className="hover:bg-gray-50 border-b border-gray-200"
                    >
                      <td className="px-6 py-4 flex items-center space-x-3">
                        <img
                          src={employee.pic || "/default-avatar.png"} // Provide a fallback image
                          alt={employee.First_Name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="font-semibold">
                            {employee.First_Name} {employee.Last_Name}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {employee.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{employee.phone_no}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs rounded-md font-medium bg-green-100 text-green-600">
                          {employee.Department}
                        </span>
                      </td>
                      <td className="px-6 py-4">{employee.job_Title}</td>
                      <td className="px-6 py-4">{employee.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          <div className="p-4 flex justify-between items-center bg-gray-50">
            <span className="text-sm text-gray-600">
              Showing 1 to {employees.length} of {employees.length} employees
            </span>
            <div className="flex space-x-2">
              <button className="text-gray-500 px-3 py-1 rounded hover:bg-gray-200">
                Previous
              </button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded">
                1
              </button>
              <button className="text-gray-500 px-3 py-1 rounded hover:bg-gray-200">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
