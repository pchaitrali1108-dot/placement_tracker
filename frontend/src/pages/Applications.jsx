import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Applications() {
  const [filter, setFilter] = useState("All");

  const applications = [
    {
      id: 1,
      company: "Tech Solutions",
      companyIcon: "T",
      role: "Frontend Developer",
      location: "Pune",
      type: "Full Time",
      appliedDate: "20 July 2026",
      status: "Interview",
      statusClass: "interview",
      nextStep: "Interview scheduled",
    },
    {
      id: 2,
      company: "Innovate Labs",
      companyIcon: "I",
      role: "Software Developer",
      location: "Nashik",
      type: "Full Time",
      appliedDate: "18 July 2026",
      status: "Applied",
      statusClass: "applied",
      nextStep: "Application under review",
    },
    {
      id: 3,
      company: "ABC Technologies",
      companyIcon: "A",
      role: "React Developer",
      location: "Mumbai",
      type: "Full Time",
      appliedDate: "15 July 2026",
      status: "Selected",
      statusClass: "selected",
      nextStep: "Congratulations! 🎉",
    },
    {
      id: 4,
      company: "Digital Works",
      companyIcon: "D",
      role: "JavaScript Developer",
      location: "Pune",
      type: "Internship",
      appliedDate: "12 July 2026",
      status: "Rejected",
      statusClass: "rejected",
      nextStep: "Try other opportunities",
    },
  ];

  const filteredApplications =
    filter === "All"
      ? applications
      : applications.filter(
          (application) => application.status === filter
        );

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        {/* Header */}
        <header className="applications-header">

          <div>
            <p className="dashboard-greeting">
              Your Placement Journey 📋
            </p>

            <h1>My Applications</h1>

            <p className="dashboard-description">
              Track all your job applications and their current status.
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
        <section className="application-stats">

          <div className="application-stat-card">
            <div className="application-stat-icon purple">
              📋
            </div>

            <div>
              <span>Total Applications</span>
              <h2>8</h2>
            </div>
          </div>

          <div className="application-stat-card">
            <div className="application-stat-icon blue">
              🔵
            </div>

            <div>
              <span>Applied</span>
              <h2>4</h2>
            </div>
          </div>

          <div className="application-stat-card">
            <div className="application-stat-icon orange">
              🟠
            </div>

            <div>
              <span>Interviews</span>
              <h2>3</h2>
            </div>
          </div>

          <div className="application-stat-card">
            <div className="application-stat-icon green">
              🏆
            </div>

            <div>
              <span>Selected</span>
              <h2>1</h2>
            </div>
          </div>

        </section>

        {/* Filter */}
        <section className="applications-toolbar">

          <div>
            <h2>Application History</h2>

            <p>
              Keep track of your placement progress
            </p>
          </div>

          <div className="application-filters">

            {["All", "Applied", "Interview", "Selected", "Rejected"].map(
              (item) => (
                <button
                  key={item}
                  className={
                    filter === item
                      ? "filter-button active"
                      : "filter-button"
                  }
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              )
            )}

          </div>

        </section>

        {/* Applications List */}
        <section className="applications-list">

          {filteredApplications.length > 0 ? (

            filteredApplications.map((application) => (

              <div
                className="application-card"
                key={application.id}
              >

                {/* Company */}
                <div className="application-company">

                  <div className="application-company-icon">
                    {application.companyIcon}
                  </div>

                  <div>
                    <h3>{application.role}</h3>
                    <p>{application.company}</p>
                  </div>

                </div>

                {/* Information */}
                <div className="application-details">

                  <div>
                    <span>Location</span>
                    <strong>
                      📍 {application.location}
                    </strong>
                  </div>

                  <div>
                    <span>Type</span>
                    <strong>
                      💼 {application.type}
                    </strong>
                  </div>

                  <div>
                    <span>Applied On</span>
                    <strong>
                      📅 {application.appliedDate}
                    </strong>
                  </div>

                </div>

                {/* Status */}
                <div className="application-status">

                  <span
                    className={`application-status-pill ${application.statusClass}`}
                  >
                    {application.status === "Interview" && "🟠"}
                    {application.status === "Applied" && "🔵"}
                    {application.status === "Selected" && "🟢"}
                    {application.status === "Rejected" && "🔴"}

                    {" "}

                    {application.status}
                  </span>

                  <span className="application-next-step">
                    {application.nextStep}
                  </span>

                </div>

                {/* Button */}
                <button
                  className="application-view-button"
                  onClick={() =>
                    alert(
                      `Job: ${application.role}\nCompany: ${application.company}\nStatus: ${application.status}`
                    )
                  }
                >
                  View Details
                </button>

              </div>

            ))

          ) : (

            <div className="no-applications">

              <div className="no-applications-icon">
                📋
              </div>

              <h3>No applications found</h3>

              <p>
                You don't have any applications with this status yet.
              </p>

            </div>

          )}

        </section>

        {/* Progress Card */}
        <section className="application-progress-card">

          <div className="progress-content">

            <div className="progress-icon">
              🚀
            </div>

            <div>
              <h2>Keep Going! 💪</h2>

              <p>
                You're making progress. Keep applying to jobs that
                match your skills and career goals.
              </p>
            </div>

          </div>

          <button
            className="browse-jobs-button"
            onClick={() => {
              window.location.href = "/jobs";
            }}
          >
            Browse More Jobs →
          </button>

        </section>

      </main>

    </div>
  );
}

export default Applications;