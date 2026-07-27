import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function ResumeResults() {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const savedAnalysis = localStorage.getItem("resumeAnalysis");
    if (savedAnalysis) {
      setAnalysis(JSON.parse(savedAnalysis));
    }
  }, []);

  if (!analysis) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        {/* Header */}
        <header className="resume-results-header">

          <div>
            <p className="dashboard-greeting">
              AI Career Assistant 🤖
            </p>

            <h1>Resume Analysis Results</h1>

            <p className="dashboard-description">
              Here's what our AI found in your resume.
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

        {/* Resume Info */}
        <section className="resume-result-file">

          <div className="resume-file-icon">
            📄
          </div>

          <div>
            <strong>My_Resume.pdf</strong>
            <span>Resume analyzed successfully</span>
          </div>

          <button
            className="scan-again-button"
            onClick={() => {
              window.location.href = "/resume";
            }}
          >
            Scan Another Resume
          </button>

        </section>

        {/* Score Section */}
        <section className="resume-score-overview">

          <div className="score-overview-left">

            <div className="ai-badge">
              ✨ AI Resume Score
            </div>

            <h2>Your Resume Match Score</h2>

            <p>
              Your resume has a strong match with the selected
              placement opportunities.
            </p>

          </div>

          <div className="large-score-circle">

            <strong>
               {analysis ? `${analysis.match_percentage}%` : "--"}
            </strong>

            <span>
              Match
            </span>

          </div>

        </section>

        {/* Statistics */}
        <section className="resume-analysis-stats">

          <div className="resume-analysis-stat">

            <div className="analysis-stat-icon green">
              ✓
            </div>

            <div>
              <span>Matched Skills</span>
              <strong>
                {analysis ? analysis.matched_skills.length : 0}
              </strong>
            </div>

          </div>

          <div className="resume-analysis-stat">

            <div className="analysis-stat-icon red">
              !
            </div>

            <div>
              <span>Missing Skills</span>
              <strong>
                {analysis ? analysis.missing_skills.length : 0}
              </strong>
            </div>

          </div>

          <div className="resume-analysis-stat">

            <div className="analysis-stat-icon blue">
              📁
            </div>

            <div>
              <span>Projects Found</span>
              <strong>3</strong>
            </div>

          </div>

          <div className="resume-analysis-stat">

            <div className="analysis-stat-icon purple">
              ⭐
            </div>

            <div>
              <span>Resume Strength</span>
              <strong>Good</strong>
            </div>

          </div>

        </section>

        {/* Main Results Grid */}
        <section className="resume-results-grid">

          {/* Matched Skills */}
          <div className="resume-result-card">

            <div className="result-card-heading">

              <div>
                <h2>Matched Skills ✅</h2>

                <p>
                  Skills already found in your resume
                </p>
              </div>

              <span className="result-count green-count">
                12 Skills
              </span>

            </div>

            <div className="result-skills">

              {analysis?.matched_skills?.map((skill, index) => (
  <span key={index}>{skill}</span>
))}
              <span>HTML</span>
              <span>CSS</span>
              <span>Python</span>
              <span>Java</span>
              <span>SQL</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Node.js</span>
              <span>REST API</span>
              <span>MongoDB</span>

              {analysis?.missing_skills?.map((skill, index) => (
              <div key={index}>
                <span>☐</span>
                <strong>{skill}</strong>
  </div>
))}

            </div>

          </div>

          {/* Missing Skills */}
          <div className="resume-result-card">

            <div className="result-card-heading">

              <div>
                <h2>Missing Skills ⚠️</h2>

                <p>
                  Skills you can improve for better matches
                </p>
              </div>

              <span className="result-count red-count">
                4 Skills
              </span>

            </div>

            <div className="missing-skills">

              <div>
                <span>☐</span>
                <strong>TypeScript</strong>
              </div>

              <div>
                <span>☐</span>
                <strong>Next.js</strong>
              </div>

              <div>
                <span>☐</span>
                <strong>Docker</strong>
              </div>

              <div>
                <span>☐</span>
                <strong>AWS Basics</strong>
              </div>

            </div>

          </div>

        </section>

        {/* AI Suggestions */}
        <section className="ai-suggestions-card">

          <div className="suggestions-heading">

            <div className="suggestions-icon">
              🤖
            </div>

            <div>
              <h2>AI Improvement Suggestions</h2>

              <p>
                Recommendations to make your resume stronger.
              </p>
            </div>

          </div>

          <div className="suggestions-list">

            <div className="suggestion-item">

              <div className="suggestion-number">
                01
              </div>

              <div>
                <strong>
                  Add measurable project achievements
                </strong>

                <p>
                  Mention what you built, what technologies you
                  used, and the result of your project.
                </p>
              </div>

            </div>

            <div className="suggestion-item">

              <div className="suggestion-number">
                02
              </div>

              <div>
                <strong>
                  Improve your technical skills section
                </strong>

                <p>
                  Add relevant technologies such as TypeScript,
                  Next.js and cloud fundamentals.
                </p>
              </div>

            </div>

            <div className="suggestion-item">

              <div className="suggestion-number">
                03
              </div>

              <div>
                <strong>
                  Customize your resume for each job
                </strong>

                <p>
                  Highlight the skills that are most relevant
                  to the job description.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Action Buttons */}
        <section className="resume-result-actions">

          <button
            className="secondary-resume-button"
            onClick={() => {
              window.location.href = "/resume";
            }}
          >
            ← Scan Another Resume
          </button>

          <button
            className="primary-resume-button"
            onClick={() => {
              window.location.href = "/jobs";
            }}
          >
            Find Matching Jobs →
          </button>

        </section>

      </main>

    </div>
  );
}

export default ResumeResults;