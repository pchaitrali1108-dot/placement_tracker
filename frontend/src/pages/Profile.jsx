import Sidebar from "../components/Sidebar";

function Profile() {
  const student = {
    name: "Aditi Parad",
    email: "aditi@example.com",
    phone: "+91 XXXXX XXXXX",
    location: "Nashik, India",
    course: "Diploma in Computer Technology",
    department: "Computer Technology",
    year: "Second Year",
    graduation: "2027",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Java",
      "Python",
      "SQL",
      "Git",
      "GitHub",
      "Node.js",
    ],

    projects: [
      {
        name: "Travexa",
        icon: "🌍",
        description:
          "AI-powered travel planning web application built using React and modern web technologies.",
        technologies: ["React", "JavaScript", "API"],
      },
      {
        name: "Placement Tracker",
        icon: "🎓",
        description:
          "Student placement management platform with job tracking and AI resume analysis.",
        technologies: ["React", "Node.js", "AI"],
      },
    ],
  };

  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Header */}
        <header className="profile-page-header">
          <div>
            <p className="dashboard-greeting">
              Student Profile 👋
            </p>

            <h1>My Profile</h1>

            <p className="dashboard-description">
              Manage your personal information and placement profile.
            </p>
          </div>
        </header>

        {/* Profile Overview */}
        <section className="profile-overview-card">

          <div className="profile-large-avatar">
            {student.name.charAt(0)}
          </div>

          <div className="profile-overview-info">

            <h2>{student.name}</h2>

            <p>
              {student.course}
            </p>

            <span className="profile-status">
              ● Available for Placement
            </span>

          </div>

          <button
            className="edit-profile-button"
            onClick={() => alert("Edit Profile feature coming soon!")}
          >
            ✏️ Edit Profile
          </button>

        </section>

        {/* Personal + Education */}
        <section className="profile-content-grid">

          {/* Personal Information */}
          <div className="profile-card">

            <div className="profile-card-heading">

              <div>
                <h2>Personal Information</h2>

                <p>
                  Your basic student information
                </p>
              </div>

              <span className="profile-card-icon">
                👤
              </span>

            </div>

            <div className="profile-fields">

              <div className="profile-field">
                <span>Full Name</span>
                <strong>{student.name}</strong>
              </div>

              <div className="profile-field">
                <span>Email</span>
                <strong>{student.email}</strong>
              </div>

              <div className="profile-field">
                <span>Phone</span>
                <strong>{student.phone}</strong>
              </div>

              <div className="profile-field">
                <span>Location</span>
                <strong>{student.location}</strong>
              </div>

            </div>

          </div>

          {/* Education */}
          <div className="profile-card">

            <div className="profile-card-heading">

              <div>
                <h2>Education 🎓</h2>

                <p>
                  Your academic information
                </p>
              </div>

              <span className="profile-card-icon">
                🎓
              </span>

            </div>

            <div className="profile-fields">

              <div className="profile-field">
                <span>Course</span>
                <strong>{student.course}</strong>
              </div>

              <div className="profile-field">
                <span>Department</span>
                <strong>{student.department}</strong>
              </div>

              <div className="profile-field">
                <span>Year</span>
                <strong>{student.year}</strong>
              </div>

              <div className="profile-field">
                <span>Graduation</span>
                <strong>{student.graduation}</strong>
              </div>

            </div>

          </div>

        </section>

        {/* Technical Skills */}
        <section className="profile-card skills-profile-card">

          <div className="profile-card-heading">

            <div>
              <h2>Technical Skills 💻</h2>

              <p>
                Your current technical skills
              </p>
            </div>

            <span className="profile-card-icon">
              💻
            </span>

          </div>

          <div className="profile-skills">

            {student.skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}

          </div>

        </section>

        {/* Projects */}
        <section className="profile-card projects-profile-card">

          <div className="profile-card-heading">

            <div>
              <h2>Projects 🚀</h2>

              <p>
                Your recent projects
              </p>
            </div>

            <button
              className="add-project-button"
              onClick={() => alert("Add Project feature coming soon!")}
            >
              + Add Project
            </button>

          </div>

          <div className="profile-projects">

            {student.projects.map((project) => (
              <div
                className="profile-project"
                key={project.name}
              >

                <div className="project-icon">
                  {project.icon}
                </div>

                <div>

                  <h3>{project.name}</h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tags">

                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Resume */}
        <section className="profile-resume-card">

          <div className="profile-resume-icon">
            📄
          </div>

          <div className="profile-resume-info">

            <h2>My Resume</h2>

            <p>
              My_Resume.pdf • Last updated recently
            </p>

          </div>

          <button
            className="view-resume-button"
            onClick={() => {
              window.location.href = "/resume";
            }}
          >
            View Resume Scanner →
          </button>

        </section>

      </main>

    </div>
  );
}

export default Profile;