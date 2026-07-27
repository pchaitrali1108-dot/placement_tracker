import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Jobs",
      path: "/jobs",
      icon: "💼",
    },
    {
      name: "Applications",
      path: "/applications",
      icon: "📋",
    },
    {
      name: "Resume Scanner",
      path: "/resume",
      icon: "📄",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "👤",
    },
  ];

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">

        <div className="sidebar-logo-icon">
          🎓
        </div>

        <div>
          <h2>Placement</h2>
          <span>Tracker</span>
        </div>

      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        <p className="sidebar-section-title">
          MENU
        </p>

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>
          </NavLink>
        ))}

      </nav>

      {/* Logout */}
      <div className="sidebar-bottom">

        <NavLink
          to="/login"
          className="sidebar-link"
        >
          <span className="sidebar-icon">
            🚪
          </span>

          <span>
            Logout
          </span>
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;