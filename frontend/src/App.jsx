

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import ResumeUpload from "./pages/ResumeUpload";
import ResumeResults from "./pages/ResumeResults";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/applications" element={<Applications />} />

        <Route path="/resume" element={<ResumeUpload />} />

        <Route
          path="/resume-results"
          element={<ResumeResults />}
        />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
