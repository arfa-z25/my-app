"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import ApplyLeave from "../components/ApplyLeave";
import MessageHR from "../components/MessageHR";

export default function Profile({ params }) {
  const [unwrappedParams, setUnwrappedParams] = useState(null);
  const [employee, setEmployee] = useState({
    First_Name: "",
    Last_Name: "",
    Department: "",
    phone_no: "",
    Role: "",
    email: "",
    password: "",
    job_Title: "",
    pic: "",
  });
  const router = useRouter();
  const [activeForm, setActiveForm] = useState(null); // "message" or "leave"



  useEffect(() => {
    params.then((resolvedParams) => {
      setUnwrappedParams(resolvedParams);
    });
  }, [params]);

  useEffect(() => {
    if (unwrappedParams) {
      const { slug } = unwrappedParams;

      const fetchEmployee = async () => {
        try {
          const response = await axios.get("/api/Data");
          const user = response.data.find((user) => user.id === parseInt(slug));
          if (user) {
            setEmployee(user);
          } else {
            console.log("No user found with the provided ID.");
          }
        } catch (error) {
          console.error("Error fetching user:", error);
          alert("Unable to fetch employee data.");
        }
      };

      fetchEmployee();
    }
  }, [unwrappedParams]);

  const handleProfilePicUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const response = await axios.post("/api/uploadProfilePic", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setEmployee((prev) => ({
        ...prev,
        pic: response.data.imageUrl,
      }));
      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      alert("Failed to upload profile picture.");
    }
  };

  const logout = (e)=>
  {
  e.preventDefault();
  const isConfirmed = window.confirm("Are you sure you want to logout?");
  if (isConfirmed) {
  router.push('/login');
  }
  else {
    // If cancelled, you can simply return or add any additional action if needed
    console.log("Logout action cancelled.");
  }
};

  if (!unwrappedParams) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 h-full">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white p-6 shadow-lg rounded-lg">
          <div className="text-center">
            <img
              src={
                employee.pic ||
                "https://i.pravatar.cc/150?img=10" // Default avatar
              }
              alt="Employee Avatar"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicUpload}
              className="mt-2 text-sm text-gray-600"
            />
            <h2 className="text-xl font-bold mt-4">
              {employee.First_Name} {employee.Last_Name}
            </h2>
            <p className="text-gray-600">{employee.Role}</p>
          </div>

          <nav className="mt-6 space-y-4">
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={() => setActiveForm(null)}
            >
              Dashboard
            </button>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={() => setActiveForm("message")}
            >
              Message HR
            </button>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={() => setActiveForm("leave")}
            >
              Apply Leave
            </button>

            
          </nav>

          <button
              className="w-full bg-slate-300 text-bold text-black py-2 rounded hover:bg-blue-600 mt-40"
              onClick={logout}
            >
              Sign OUT
            </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white p-6 shadow-lg rounded-lg">
  <h1 className="text-2xl font-bold mb-6 text-center">Employee Information</h1>
  <div className="grid grid-cols-1 gap-4">
    <div className="bg-blue-50 p-4 rounded-lg text-center">
      <strong>First Name:</strong>
      <p>{employee.First_Name}</p>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg text-center">
      <strong>Last Name:</strong>
      <p>{employee.Last_Name}</p>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg text-center">
      <strong>Email:</strong>
      <p>{employee.email}</p>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg text-center">
      <strong>Phone:</strong>
      <p>{employee.phone_no}</p>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg text-center">
      <strong>Department:</strong>
      <p>{employee.Department}</p>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg text-center">
      <strong>Role:</strong>
      <p>{employee.Role}</p>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg text-center">
      <strong>Job Title:</strong>
      <p>{employee.job_Title}</p>
    </div>
  </div>
</main>


        {/* Active Form */}
        {activeForm && (
          <section className="w-full lg:w-1/3 bg-white p-6 shadow-lg rounded-lg">
            {activeForm === "message" && <MessageHR />}
            {activeForm === "leave" && <ApplyLeave />}
          </section>
        )}
      </div>
    </div>
  );
}
