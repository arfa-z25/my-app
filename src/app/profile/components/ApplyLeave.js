"use client";
import { useState } from "react";
import axios from "axios";

export default function ApplyLeave() {
  const [leaveRequest, setLeaveRequest] = useState({
    leave_type: "",
    start_date: "",
    end_date: "",
    reason: "",
    employee_id: "",
  });

  const handleLeaveChange = (e) => {
    const { name, value } = e.target;
    setLeaveRequest((prev) => ({ ...prev, [name]: value }));
  };

  const create_Leave = async (e) => {
    e.preventDefault();
    try {
      // Ensure employee_id is converted to an integer before sending
      const formattedleave = {
        ...leaveRequest,
         start_date: new Date(leaveRequest.start_date),  // Convert string to Date
         end_date: new Date(leaveRequest.end_date), 
        employee_id: parseInt(leaveRequest.employee_id, 10), // Convert to integer
      };

      const response = await axios.post("/api/Leave", formattedleave);
      alert("Message sent successfully!");
      console.log(response.data);

      // Reset form after successful submission
      setLeaveRequest({
        leave_type: "",
        start_date: "",
        end_date: "",
        reason: "",
        employee_id: "",
      });
    } catch (error) {
      console.error("Error in sending message:", error);
      alert("I am unable to reach. Please try again.");
    }
  };

  return (
    <aside className="w-full lg:w-2/3 bg-white p-8 ml-24 shadow-lg rounded-lg h-full">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Apply for Leave</h3>
      <form onSubmit={create_Leave} className="space-y-4">
        {/* Leave Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Leave Type
          </label>
          <select
            name="leave_type" // Name should match state
            value={leaveRequest.leave_type} // Ensure the value is linked to state
            onChange={handleLeaveChange}
            className="w-full p-3 border rounded-lg text-gray-700 focus:ring focus:ring-blue-500"
          >
            <option value="">Select Leave Type</option>
            <option value="Casual">Casual</option>
            <option value="Sick">Sick</option>
            <option value="Annual">Annual</option>
          </select>
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="datetime-local"
            name="start_date" // Name should match state
            value={leaveRequest.start_date} // Ensure the value is linked to state
            onChange={handleLeaveChange}
            className="w-full p-3 border rounded-lg text-gray-700 focus:ring focus:ring-blue-500"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="datetime-local"
            name="end_date" // Name should match state
            value={leaveRequest.end_date} // Ensure the value is linked to state
            onChange={handleLeaveChange}
            className="w-full p-3 border rounded-lg text-gray-700 focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Reason */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reason
          </label>
          <textarea
            name="reason"
            value={leaveRequest.reason}
            onChange={handleLeaveChange}
            className="w-full p-3 border rounded-lg text-gray-700 focus:ring focus:ring-blue-500"
            rows="4"
            placeholder="Provide the reason for leave..."
          />
        </div>

        {/* Employee ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter your Employee ID
          </label>
          <input
            type="text"
            name="employee_id" // Name should match state
            value={leaveRequest.employee_id} // Ensure the value is linked to state
            onChange={handleLeaveChange}
            className="w-full p-3 border rounded-lg text-gray-700 focus:ring focus:ring-blue-500"
            rows="4"
            placeholder="Provide the employee ID.."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Apply for Leave
        </button>
      </form>
    </aside>
  );
}
