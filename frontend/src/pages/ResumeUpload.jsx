import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { screenResume } from "../services/api";

function ResumeUpload() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile) {
      setFile(droppedFile);
    }
  };

 const handleAnalyze = async () => {
  if (!file) {
    alert("Please upload your resume first.");
    return;
  }

  try {
    const jobDescription =
      "Software developer role requiring programming, web development, and problem-solving skills.";

    const result = await screenResume(file, jobDescription);

    localStorage.setItem("resumeAnalysis", JSON.stringify(result));

    navigate("/resume-results");
  } catch (error) {
    console.error(error);
    alert("Failed to analyze resume. Make sure the AI backend is running.");
  }
};

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        {/* Header */}
        <header className="resume-header">

          <div>
            <p className="dashboard-greeting">
              AI Career Assistant 🤖
            </p>

            <h1>Resume Scanner</h1>

            <p className="dashboard-description">
              Upload your resume and let AI analyze your skills.
            </p>
          </div>

          {/* Clickable Profile */}
          <div
            className="profile-badge"
            onClick={() => {
              window.location.href = "/profile";
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="profile-avatar">
              A
            </div>

            <div>
              <strong>Aditi Parad</strong>
              <span>Computer Technology</span>
            </div>
          </div>

        </header>

        {/* Main Scanner */}
        <section className="resume-scanner-grid">

          {/* Upload Card */}
          <div className="resume-upload-card">

            <div className="ai-badge">
              🤖 AI Powered Resume Analysis
            </div>

            <h2>Upload Your Resume</h2>

            <p className="resume-card-description">
              Upload your latest resume in PDF format to analyze
              your skills and placement readiness.
            </p>

            {/* Upload Area */}
            <div
              className={`resume-drop-zone ${
                dragActive ? "drag-active" : ""
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
            >

              <div className="upload-icon">
                📄
              </div>

              {file ? (
                <>
                  <h3>{file.name}</h3>

                  <p>
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </>
              ) : (
                <>
                  <h3>Drag & Drop your resume here</h3>

                  <p>
                    or click the button below to browse
                  </p>
                </>
              )}

              <label className="browse-resume-button">

                Choose Resume

                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  hidden
                />

              </label>

              <span className="upload-format">
                PDF only • Maximum 5 MB
              </span>

            </div>

            {/* Analyze */}
            <button
              className="analyze-resume-button"
              onClick={handleAnalyze}
            >
              🤖 Analyze My Resume →
            </button>

          </div>

          {/* Information Card */}
          <div className="resume-info-card">

            <div className="resume-info-icon">
              ✨
            </div>

            <h2>What will AI analyze?</h2>

            <p>
              Our AI will compare your resume with job requirements
              and identify areas that can improve your placement chances.
            </p>

            <div className="analysis-item">
              <span className="analysis-check">✓</span>

              <div>
                <strong>Skills</strong>
                <span>
                  Identify your technical and soft skills
                </span>
              </div>
            </div>

            <div className="analysis-item">
              <span className="analysis-check">✓</span>

              <div>
                <strong>Experience</strong>
                <span>
                  Analyze projects, internships and experience
                </span>
              </div>
            </div>

            <div className="analysis-item">
              <span className="analysis-check">✓</span>

              <div>
                <strong>Job Match</strong>
                <span>
                  Compare your profile with job requirements
                </span>
              </div>
            </div>

            <div className="analysis-item">
              <span className="analysis-check">✓</span>

              <div>
                <strong>Suggestions</strong>
                <span>
                  Get AI-powered improvement recommendations
                </span>
              </div>
            </div>

          </div>

        </section>

        {/* Process */}
        <section className="resume-process-card">

          <h2>How it works</h2>

          <div className="resume-process">

            <div className="process-step">

              <div className="process-number">
                1
              </div>

              <div>
                <strong>Upload</strong>
                <span>Upload your resume</span>
              </div>

            </div>

            <div className="process-line"></div>

            <div className="process-step">

              <div className="process-number">
                2
              </div>

              <div>
                <strong>AI Analysis</strong>
                <span>AI analyzes your resume</span>
              </div>

            </div>

            <div className="process-line"></div>

            <div className="process-step">

              <div className="process-number">
                3
              </div>

              <div>
                <strong>Results</strong>
                <span>See your match score</span>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default ResumeUpload;