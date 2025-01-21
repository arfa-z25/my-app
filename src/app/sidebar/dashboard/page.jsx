"use client";
import {useState , useEffect} from "react";
import axios from "axios";

export default function AdminDashboard() {

  const [messages , setmessage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchmessage = async () => {
      try {
        const response = await axios.get("/api/Chat");
        setmessage(response.data); // Ensure the API returns the correct structure
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchmessage();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      {/* Parent Container */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6 space-y-6">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Admin Dashboard
        </h1>

        {/* Flex Container for Blocks */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Project Progress Block */}
          <div className="flex-1 bg-blue-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Project Progress
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Project A</span>
                <span className="text-gray-500">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Project B</span>
                <span className="text-gray-500">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Project C</span>
                <span className="text-gray-500">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-yellow-500 h-3 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Employee Messages Block */}
          <div className="flex-1 bg-green-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Employee Messages
            </h2>
            {messages.map((message)=>(
              <ul className="space-y-3" >
              <li className="p-3 bg-white shadow rounded-md" key={message.id}>
                <p className="font-medium text-gray-800">{message.employee_id}</p>
                <p className="text-sm text-gray-500">
                  {message.content}
                </p>
              </li>
              
              
            </ul>
          ))};
            
          </div>

          {/* HR Tasks Block */}
          <div className="flex-1 bg-yellow-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-yellow-600 mb-4">
              HR Tasks
            </h2>
            <ul className="space-y-3">
              <li className="p-3 bg-white shadow rounded-md">
                <span className="font-medium text-gray-800">
                  Onboard new employees
                </span>
                <p className="text-sm text-gray-500">Deadline: 15th Jan</p>
              </li>
              <li className="p-3 bg-white shadow rounded-md">
                <span className="font-medium text-gray-800">
                  Schedule employee appraisals
                </span>
                <p className="text-sm text-gray-500">Deadline: 20th Jan</p>
              </li>
              <li className="p-3 bg-white shadow rounded-md">
                <span className="font-medium text-gray-800">
                  Update payroll system
                </span>
                <p className="text-sm text-gray-500">Deadline: 25th Jan</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
