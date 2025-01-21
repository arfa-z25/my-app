"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    p_id: "",
    p_name: "",
    p_status: "",
    p_budget: "",
    p_deadline: "",
  });

  useEffect(() => {
    // Fetch projects from the API
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/Project");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
  
    try {
      // Convert p_id to an integer and ensure p_budget is a string
      const formattedProject = {
        ...newProject,
        p_id: parseInt(newProject.p_id, 10), // Convert p_id to integer
        p_budget: String(newProject.p_budget), // Ensure p_budget is a string
        p_deadline: new Date(newProject.p_deadline).toISOString(), // Convert p_deadline to ISO 8601 format
      };
  
      const response = await axios.post("/api/Project", formattedProject);
      setProjects((prev) => [...prev, response.data]);
  
      // Reset the form after adding the project
      setNewProject({
        p_id: "",
        p_name: "",
        p_status: "",
        p_budget: "",
        p_deadline: "",
      });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };
  

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Projects</h1>

      {/* Add New Project Form */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
        <form onSubmit={handleAddProject}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="p_id"
              placeholder="Project ID"
              value={newProject.p_id}
              onChange={handleInputChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="text"
              name="p_name"
              placeholder="Project Name"
              value={newProject.p_name}
              onChange={handleInputChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="text"
              name="p_status"
              placeholder="Status"
              value={newProject.p_status}
              onChange={handleInputChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="number"
              name="p_budget"
              placeholder="Budget"
              value={newProject.p_budget}
              onChange={handleInputChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="datetime-local"
              name="p_deadline"
              placeholder="Deadline"
              value={newProject.p_deadline}
              onChange={handleInputChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
          >
            Add Project
          </button>
        </form>
      </div>

      {/* Projects List */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Projects List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Project ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Budget</th>
                <th className="py-2 px-4 border-b">Deadline</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.p_id}>
                  <td className="py-2 px-4 border-b">{project.p_id}</td>
                  <td className="py-2 px-4 border-b">{project.p_name}</td>
                  <td className="py-2 px-4 border-b">{project.p_status}</td>
                  <td className="py-2 px-4 border-b">{project.p_budget}</td>
                  <td className="py-2 px-4 border-b">{project.p_deadline}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDeleteProject(project.p_id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
