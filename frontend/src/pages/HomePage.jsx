import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}
      <nav className="home-navbar">

        <Link to="/" className="home-logo">
          <div className="home-logo-icon">🎓</div>

          <div>
            <h2>Placement</h2>
            <span>Tracker</span>
          </div>
        </Link>

        <div className="home-nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
        </div>

        <div className="home-nav-buttons">
          <Link to="/login" className="home-login-btn">
            Login
          </Link>

          <Link to="/register" className="home-register-btn">
            Register
          </Link>
        </div>

      </nav>


      {/* ================= HERO ================= */}
      <section className="hero-section" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            ✨ Smart Placement Management
          </div>

          <h1>
            Your Smart Journey
            <br />
            <span>To Your Dream Career 🚀</span>
          </h1>

          <p>
            Find the right jobs, track your applications, improve your
            resume with AI, and stay ready for your next placement
            opportunity — all in one place.
          </p>

          <div className="hero-buttons">

            <Link to="/register" className="hero-primary-btn">
              Get Started →
            </Link>

            <Link to="/login" className="hero-secondary-btn">
              I Already Have an Account
            </Link>

          </div>

          <div className="hero-trust">

            <div>
              <strong>💼</strong>
              <span>Find Jobs</span>
            </div>

            <div>
              <strong>🤖</strong>
              <span>AI Resume</span>
            </div>

            <div>
              <strong>📊</strong>
              <span>Track Progress</span>
            </div>

          </div>

        </div>


        {/* HERO IMAGE */}
        <div className="hero-image-container">

          <div className="hero-image-glow"></div>

          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
            alt="Students working together on career opportunities"
            className="hero-image"
          />

          {/* Floating Cards */}

          <div className="floating-card floating-card-one">
            <div className="floating-icon">🎯</div>

            <div>
              <strong>92%</strong>
              <span>Job Match</span>
            </div>
          </div>


          <div className="floating-card floating-card-two">
            <div className="floating-icon green-icon">✓</div>

            <div>
              <strong>Selected!</strong>
              <span>Placement Update</span>
            </div>
          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="features-section" id="features">

        <div className="section-heading">

          <span>POWERFUL FEATURES</span>

          <h2>
            Everything You Need For
            <br />
            Your Placement Journey
          </h2>

          <p>
            One platform to manage your complete placement preparation
            and job search.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon purple-icon">
              💼
            </div>

            <h3>Find Jobs</h3>

            <p>
              Discover placement opportunities based on your skills,
              interests and career goals.
            </p>

            <Link to="/jobs">
              Explore Jobs →
            </Link>

          </div>


          <div className="feature-card">

            <div className="feature-icon blue-icon">
              📋
            </div>

            <h3>Track Applications</h3>

            <p>
              Keep all your applications organized and easily track
              their progress from applied to selected.
            </p>

            <Link to="/applications">
              Track Applications →
            </Link>

          </div>


          <div className="feature-card">

            <div className="feature-icon orange-icon">
              🤖
            </div>

            <h3>AI Resume Scanner</h3>

            <p>
              Analyze your resume, discover missing skills and get
              intelligent recommendations for improvement.
            </p>

            <Link to="/resume">
              Scan Resume →
            </Link>

          </div>


          <div className="feature-card">

            <div className="feature-icon green-icon-bg">
              📊
            </div>

            <h3>Placement Dashboard</h3>

            <p>
              See your applications, interviews, selected companies
              and placement progress from one dashboard.
            </p>

            <Link to="/dashboard">
              View Dashboard →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= AI SECTION ================= */}
      <section className="ai-home-section">

        <div className="ai-home-content">

          <div className="ai-small-badge">
            🤖 POWERED BY AI
          </div>

          <h2>
            Make Your Resume
            <br />
            <span>Placement Ready</span>
          </h2>

          <p>
            Upload your resume and let our AI analyze your skills,
            projects and experience. Get a match score and personalized
            suggestions to improve your placement chances.
          </p>

          <div className="ai-points">

            <div>
              <span>✓</span>
              <p>Identify your strongest skills</p>
            </div>

            <div>
              <span>✓</span>
              <p>Find missing skills</p>
            </div>

            <div>
              <span>✓</span>
              <p>Get personalized suggestions</p>
            </div>

          </div>

          <Link to="/resume" className="ai-home-button">
            Try Resume Scanner →
          </Link>

        </div>


        <div className="ai-score-preview">

          <div className="score-preview-card">

            <div className="score-preview-top">
              <span>🤖 AI Resume Analysis</span>
              <span>✨</span>
            </div>

            <p>Your Resume Match</p>

            <div className="home-score-circle">
              <strong>82%</strong>
              <span>Match</span>
            </div>

            <div className="home-score-details">

              <div>
                <strong>12</strong>
                <span>Matched Skills</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Missing Skills</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="how-section" id="how-it-works">

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            Start Your Placement Journey
            <br />
            In 3 Simple Steps
          </h2>

        </div>


        <div className="steps-container">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              👤
            </div>

            <h3>Create Your Profile</h3>

            <p>
              Register and create your student profile with your
              education, skills and career interests.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              🔍
            </div>

            <h3>Find Opportunities</h3>

            <p>
              Explore jobs that match your skills and apply to
              opportunities that interest you.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              🏆
            </div>

            <h3>Get Placed</h3>

            <p>
              Track your applications, prepare for interviews and
              move closer to your dream career.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="home-cta">

        <div>

          <span>🚀 READY TO GET STARTED?</span>

          <h2>
            Your Dream Career
            <br />
            Starts With One Step.
          </h2>

          <p>
            Create your account and start your placement journey today.
          </p>

          <Link to="/register" className="cta-button">
            Create Free Account →
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="home-footer">

        <div className="footer-brand">

          <div className="home-logo-icon">
            🎓
          </div>

          <div>
            <h3>Placement Tracker</h3>

            <p>
              Your smart companion for placement success.
            </p>
          </div>

        </div>

        <p className="footer-copy">
          © 2026 Placement Tracker. Built for students 🚀
        </p>

      </footer>

    </div>
  );
}

export default HomePage;