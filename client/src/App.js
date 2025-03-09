import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import AddAgent from "./pages/AddAgent"
import Signup from "./pages/Signup"
import ProtectedRoute from "./components/ProtectedRoute"
import UploadCSV from "./pages/UploadCSV"
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-agent" element={<AddAgent />} />
        <Route path="/upload-csv" element={<UploadCSV />} />

      </Routes>
    </Router>
  )
}

export default App
