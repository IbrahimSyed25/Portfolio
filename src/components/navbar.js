import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function NavBar({ clickedLink, setClickedLink }) {
  // const [clickedLink, setClickedLink] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  function handleClick(e) {
    setClickedLink(null);
    setClickedLink(e.target.innerText);
    setExpanded(false);
  }
  return (
    <>
      <Navbar
        expand="md"
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
        className="fixed-top"
      >
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src="logo (2).png"
            alt="Logo"
            className="img-fluid"
            style={{ width: "24%" }}
          />
          <span>SyedIbrahim</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={clickedLink === "Home" ? "clicked" : ""}
              onClick={handleClick}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/#skills"
              className={clickedLink === "Skills" ? "clicked" : ""}
              onClick={handleClick}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#experience"
              className={clickedLink === "Experience" ? "clicked" : ""}
              onClick={handleClick}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#projects"
              className={clickedLink === "Projects" ? "clicked" : ""}
              onClick={handleClick}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#education"
              className={clickedLink === "Education" ? "clicked" : ""}
              onClick={handleClick}
            >
              Education
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/#contact"
              className={clickedLink === "Contact" ? "clicked" : ""}
              onClick={handleClick}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
