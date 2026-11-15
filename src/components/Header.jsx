import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-db.png";

const links = [
  { to: "/explainers", label: "Explainers" },
  { to: "/scriptures", label: "Stotras" },
  { to: "/history", label: "Heritage" },
  { to: "/books", label: "Books" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link to="/" className="brand" aria-label="Daivik Bharat home">
          <img src={logo} alt="" width="36" height="36" />
          <span className="brand__name">
            <span lang="hi" className="brand__deva">दैविक भारत</span>
            <span className="brand__latin">Daivik Bharat</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
