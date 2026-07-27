import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");

  const jobs = [
    {
      id: 1,
      company: "Tech Solutions",
      companyIcon: "T",
      role: "Frontend Developer",
      location: "Pune",
      type: "Full Time",
      experience: "Fresher",
      match: "92%",
      skills: ["React", "JavaScript", "CSS"],
      description:
        "Build modern and responsive web applications using React and JavaScript.",
    },
    {
      id: 2,
      company: "Modern Tech Labs",
      companyIcon: "M",
      role: "Full Stack Developer",
      location: "Mumbai",
      type: "Full Time",
      experience: "Fresher",
      match: "86%",
      skills: ["React", "Node.js", "MongoDB"],
      description:
        "Work on both frontend and backend development for modern web applications.",
    },
    {
      id: 3,
      company: "Innovate Labs",
      companyIcon: "I",
      role: "Software Developer",
      location: "Nashik",
      type: "Full Time",
      experience: "0-1 Year",
      match: "81%",
      skills: ["Java", "SQL", "Git"],
      description:
        "Develop, test and maintain software applications with a collaborative team.",
    },
    {
      id: 4,
      company: "Digital Works",
      companyIcon: "D",
      role: "JavaScript Developer",
      location: "Pune",
      type: "Internship",
      experience: "Fresher",
      match: "78%",
      skills: ["JavaScript", "HTML", "CSS"],
      description:
        "Create interactive web experiences and work with modern frontend technologies.",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      job.role.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchText)
      );

    const matchesLocation =
      location === "All Locations" ||
      job.location === location;

    return matchesSearch && matchesLocation;
  });

  const handleApply = (job) => {
    alert(`Application started for ${job.role} at ${job.company}`);
  };

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        {/* Header */}
        <header className="jobs-header">

          <div>
            <p className="dashboard-greeting">
              Career Opportunities 💼
            </p>

            <h1>Find Your Next Opportunity</h1>

            <p className="dashboard-description">
              Discover jobs that match your skills and placement goals.
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

        {/* Search Section */}
        <section className="job-search-card">

          <div className="search-box">

            <span className="search-icon">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search by job title, company or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <div className="location-box">

            <span>
              📍
            </span>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>All Locations</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Nashik</option>
            </select>

          </div>

        </section>

        {/* Job Heading */}
        <div className="jobs-section-heading">

          <div>
            <h2>Recommended Jobs ✨</h2>

            <p>
              {filteredJobs.length} opportunities found for you
            </p>
          </div>

          <div className="job-count">
            {filteredJobs.length} Jobs
          </div>

        </div>

        {/* Jobs */}
        <section className="jobs-list">

          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (

              <div className="job-card" key={job.id}>

                <div className="job-card-top">

                  <div className="job-company">

                    <div className="large-company-icon">
                      {job.companyIcon}
                    </div>

                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.company}</p>
                    </div>

                  </div>

                  <div className="match-percentage">
                    ✨ {job.match} Match
                  </div>

                </div>

                <div className="job-info-row">

                  <span>
                    📍 {job.location}
                  </span>

                  <span>
                    💼 {job.type}
                  </span>

                  <span>
                    🎓 {job.experience}
                  </span>

                </div>

                <p className="job-description">
                  {job.description}
                </p>

                <div className="job-skills">

                  {job.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

                <div className="job-card-bottom">

                  <span className="posted-text">
                    Posted recently
                  </span>

                  <div className="job-actions">

                    <button
                      className="view-job-button"
                      onClick={() =>
                        alert(
                          `${job.role}\n\nCompany: ${job.company}\nLocation: ${job.location}\n\n${job.description}`
                        )
                      }
                    >
                      View Details
                    </button>

                    <button
                      className="apply-job-button"
                      onClick={() => handleApply(job)}
                    >
                      Apply Now →
                    </button>

                  </div>

                </div>

              </div>

            ))
          ) : (

            <div className="no-jobs">

              <div className="no-jobs-icon">
                🔍
              </div>

              <h3>No jobs found</h3>

              <p>
                Try searching for another job title, company or skill.
              </p>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default Jobs;