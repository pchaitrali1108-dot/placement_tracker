import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <main className="dashboard-main">

        {/* Top Header */}
        <header className="dashboard-header">

          <div>
            <p className="dashboard-greeting">
              Good morning 👋
            </p>

            <h1>Welcome back, Aditi!</h1>

            <p className="dashboard-description">
              Here's your placement journey at a glance.
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

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon purple">
              💼
            </div>

            <div>
              <span>Total Jobs</span>
              <h2>24</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon blue">
              📋
            </div>

            <div>
              <span>Applications</span>
              <h2>8</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              🎯
            </div>

            <div>
              <span>Interviews</span>
              <h2>3</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              🏆
            </div>

            <div>
              <span>Selected</span>
              <h2>1</h2>
            </div>
          </div>

        </section>

        {/* Main Dashboard Grid */}
        <section className="dashboard-grid">

          {/* Recent Applications */}
          <div className="dashboard-card">

            <div className="card-title-row">

              <div>
                <h2>Recent Applications</h2>

                <p>
                  Track your latest job applications
                </p>
              </div>

              <a href="/applications">
                View All
              </a>

            </div>

            <div className="application-list">

              {/* Application 1 */}
              <div className="application-row">

                <div className="company-icon">
                  T
                </div>

                <div className="application-info">

                  <strong>
                    Frontend Developer
                  </strong>

                  <span>
                    Tech Solutions
                  </span>

                </div>

                <span className="status-pill interview">
                  Interview
                </span>

              </div>

              {/* Application 2 */}
              <div className="application-row">

                <div className="company-icon">
                  I
                </div>

                <div className="application-info">

                  <strong>
                    Software Developer
                  </strong>

                  <span>
                    Innovate Labs
                  </span>

                </div>

                <span className="status-pill applied">
                  Applied
                </span>

              </div>

              {/* Application 3 */}
              <div className="application-row">

                <div className="company-icon">
                  A
                </div>

                <div className="application-info">

                  <strong>
                    React Developer
                  </strong>

                  <span>
                    ABC Technologies
                  </span>

                </div>

                <span className="status-pill selected">
                  Selected
                </span>

              </div>

            </div>

          </div>

          {/* AI Resume Card */}
          <div className="resume-score-card">

            <div className="ai-badge">
              🤖 AI Resume Analysis
            </div>

            <h2>
              Your Resume Match
            </h2>

            <p>
              Your latest resume analysis against a job description.
            </p>

            <div className="score-circle">

              <strong>
                82%
              </strong>

              <span>
                Match
              </span>

            </div>

            <div className="score-details">

              <div>
                <span>
                  Matched Skills
                </span>

                <strong>
                  12
                </strong>
              </div>

              <div>
                <span>
                  Missing Skills
                </span>

                <strong>
                  4
                </strong>
              </div>

            </div>

            <button
              className="primary-action"
              onClick={() => {
                window.location.href = "/resume-results";
              }}
            >
              View AI Analysis →
            </button>

          </div>

        </section>

        {/* Recommended Jobs */}
        <section className="dashboard-card">

          <div className="card-title-row">

            <div>

              <h2>
                Recommended Jobs ✨
              </h2>

              <p>
                Jobs that match your profile and skills
              </p>

            </div>

            <a href="/jobs">
              Explore Jobs
            </a>

          </div>

          <div className="recommended-grid">

            {/* Job 1 */}
            <div className="job-mini-card">

              <div className="job-top">

                <div className="company-icon">
                  G
                </div>

                <span className="match-tag">
                  92% Match
                </span>

              </div>

              <h3>
                Frontend Developer
              </h3>

              <p>
                Google-like Technologies
              </p>

              <div className="job-tags">

                <span>
                  React
                </span>

                <span>
                  JavaScript
                </span>

                <span>
                  CSS
                </span>

              </div>

              <button
                className="outline-action"
                onClick={() => {
                  window.location.href = "/jobs";
                }}
              >
                View Job
              </button>

            </div>

            {/* Job 2 */}
            <div className="job-mini-card">

              <div className="job-top">

                <div className="company-icon">
                  M
                </div>

                <span className="match-tag">
                  86% Match
                </span>

              </div>

              <h3>
                Full Stack Developer
              </h3>

              <p>
                Modern Tech Labs
              </p>

              <div className="job-tags">

                <span>
                  Node.js
                </span>

                <span>
                  MongoDB
                </span>

                <span>
                  React
                </span>

              </div>

              <button
                className="outline-action"
                onClick={() => {
                  window.location.href = "/jobs";
                }}
              >
                View Job
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;