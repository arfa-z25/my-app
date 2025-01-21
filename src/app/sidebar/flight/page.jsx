"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [employeeId, setEmployeeId] = useState("");
  const [actionMessage, setActionMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Fetch leaves from API
  const fetchLeaves = async () => {
    setLoading(true); // Set loading state to true initially
    try {
      const response = await axios.get("/api/Leave");
      setLeaves(response.data);
    } catch (error) {
      console.error("Error fetching leaves:", error);
    } finally {
      setLoading(false);
    }
  };

  // Reject leave request
  const rejectLeave = async (id) => {
    try {
      const res = await axios.delete('/api/Leave/' , {data: {id: id}});
      console.log(res);
      alert("Leave is Rejected!!");
      fetchLeaves(); // Refresh the list after rejecting the leave
    } catch (error) {
      console.error("Error rejecting leave:", error);
    }
  };

  // Approve leave request
  const approveLeave = async (id) => {
    try {
      // Update the leave.reason to "Approved"
      const response = await axios.put(`/api/Leave/${id}`, {
        reason: "Approved",
      });
      console.log(response);
      alert("Leave is Approved!!");
      fetchLeaves(); // Refresh the list after approving the leave
    } catch (error) {
      console.error("Error approving leave:", error);
    }
  };

  // Handle the form submission for rejecting leaves based on employee_id
  const handleRejectByEmployeeId = async () => {
    const id = parseInt(employeeId); // Ensure employeeId is an integer
    if (isNaN(id)) {
      alert("Please enter a valid employee ID.");
      return;
    }

    const leaveToReject = leaves.find((leave) => leave.employee_id === id);

    if (leaveToReject) {
      rejectLeave(leaveToReject.leave_id); // Reject the leave request based on the found employee_id
      setActionMessage(`Leave for Employee ID: ${id} has been rejected.`);
    } else {
      setActionMessage("Leave request not found for the provided employee ID.");
    }
  };

  useEffect(() => {
    fetchLeaves(); // Fetch leaves when the component mounts
  }, []);

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-6 bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Request Time Off</h2>
            <p className="text-gray-600 text-sm">Manage your employee requests</p>
          </div>
          <button
            onClick={() => setShowForm(true)} // Show the form when clicked
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            View Requests
          </button>
        </div>

        {/* Form to enter employee ID for rejection */}
        {showForm && (
          <div className="mb-4 p-4 bg-gray-100 rounded shadow-md">
            <h3 className="text-lg font-semibold">Enter Employee ID to Reject Leave</h3>
            <input
              type="number"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="border p-2 rounded mr-2"
              placeholder="Employee ID"
            />
            <button
              onClick={handleRejectByEmployeeId}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Reject Leave
            </button>
            <button
              onClick={() => setShowForm(false)} // Close the form
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 ml-2"
            >
              Cancel
            </button>
            {actionMessage && <p className="mt-2 text-sm">{actionMessage}</p>}
          </div>
        )}

        {/* Leaves Table */}
        <div className="bg-white p-4 rounded shadow-md">
          {loading ? (
            <p>Loading...</p>
          ) : leaves.length === 0 ? (
            <p>No leave requests found.</p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="p-2">Employee ID</th>
                  <th className="p-2">Leave Type</th>
                  <th className="p-2">Leave From</th>
                  <th className="p-2">Leave To</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaves.map((leave) => (
                  <tr key={leave.leave_id} className="hover:bg-gray-100">
                    <td className="p-2 flex items-center">{leave.employee_id}</td>
                    <td className="p-2">{leave.leave_type}</td>
                    <td className="p-2">{leave.start_date}</td>
                    <td className="p-2">{leave.end_date}</td>
                    <td className="p-2 flex">
                      <button
                        onClick={() => approveLeave(leave.leave_id)}
                        className="text-green-500 hover:text-green-700 mr-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => rejectLeave(leave.leave_id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
