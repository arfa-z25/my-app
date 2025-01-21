"use client";
import { useState } from "react";
import axios from "axios";

export default function MessageHR() {
  const [message, setMessage] = useState({
    content: "",
    employee_id: "",
  });

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure employee_id is converted to an integer before sending
      const formattedMessage = {
        ...message,
        employee_id: parseInt(message.employee_id, 10), // Convert to integer
      };

      const response = await axios.post("/api/Chat", formattedMessage);
      alert("Message sent successfully!");
      console.log(response.data);

      // Reset form after successful submission
      setMessage({
        content: "",
        employee_id: "",
      });
    } catch (error) {
      console.error("Error in sending message:", error);
      alert("I am unable to reach. Please try again.");
    }
  };

  return (
    <aside className="w-full bg-white p-6 shadow-lg h-full">
      <h3 className="text-lg font-bold mb-4">Message HR</h3>
      <form onSubmit={handleMessageSubmit}>
        <textarea
          className="w-full p-2 border rounded mt-2"
          rows="4"
          name="content"
          placeholder="Write your message here..."
          value={message.content}
          onChange={handleMessageChange}
          required
        />
        <input
          type="text"
          className="w-full p-2 border rounded mt-2"
          name="employee_id"
          placeholder="Enter your Employee ID"
          value={message.employee_id}
          onChange={handleMessageChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded mt-4"
        >
          Send Message
        </button>
      </form>
    </aside>
  );
}
