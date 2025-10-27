import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <span className="text-primary fw-bold">Next.js_Demo2</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bold" href="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" href="/docs">Docs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" href="/csr">CSR</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" href="/ssr">SSR</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" href="/ssg">SSG</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" href="/isr">ISR</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
