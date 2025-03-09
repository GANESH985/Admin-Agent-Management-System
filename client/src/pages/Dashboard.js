import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Dashboard = () => {
  const [agents, setAgents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          navigate("/login")
          return
        }
        const response = await axios.get("http://localhost:5000/api/agents/list", {
          headers: { Authorization: `Bearer ${token}` },
        })
        setAgents(response.data);
      } catch (error) {
        console.error("Error fetching agents:", error)
      }
    }
    fetchAgents()
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <button
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => navigate("/add-agent")}
      >
        Add Agent
      </button>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Mobile</th>
          </tr>
        </thead>
        <tbody>
  {agents.map((agent) => (
    <tr key={agent._id} className="text-center">
      <td className="border p-2">{agent.name}</td>
      <td className="border p-2">{agent.email}</td>
      <td className="border p-2">{agent.mobile}</td>
      <td className="border p-2">
        {agent.tasks.length > 0 ? (
          <ul>
            {agent.tasks.map((task, index) => (
              <li key={index}>
                {task.firstName} - {task.phone} - {task.notes}
              </li>
            ))}
          </ul>
        ) : (
          "No tasks assigned"
        )}
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  )
}

export default Dashboard
