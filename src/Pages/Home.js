import { Link, useLocation } from "react-router-dom";
import styles from "./Home.module.css";
import NavBar from "../components/navbar";
import CVFile from "../Pages/Documents/SyedPdf_compressed.pdf";
import { useEffect } from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
const content =
  "Experienced RPA Developer with three years of expertise in streamlining business processes through automation solutions, adept at leveraging agile methodologies and problem-solving skills to deliver efficient results. Transitioning to React.js frontend development with a passion for crafting intuitive user interfaces, keen on leveraging analytical abilities and programming proficiency to excel in the dynamic domain of web development. Eager to showcase versatility and readiness to embrace new challenges through a portfolio highlighting both RPA and React.js projects, aiming to contribute to innovative solutions and make a positive impact in the realm of software development.";

function Home({ clickedLink, setClickedLink }) {
  // const location = useLocation();
  // Use useParams to get the section from the URL
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const contactArray = [
    {
      key: "Linkedin",
      src: "linkedin.png",
      info: "https://www.linkedin.com/in/syed-ibrahim-313a3b50/",
      alt: "linkedin",
    },
    {
      key: "Github",
      src: "github.png",
      info: "https://github.com/IbrahimSyed25",
      alt: "github",
    },
  ];
  function handleClick() {
    setClickedLink(() => "Contact");
    <NavBar clickedLink={"Contact"} />;
  }
  function handleDownload() {
    // Create a URL for the CV file
    const url = CVFile; // No need to create object URL

    // Create a link element
    const link = document.createElement("a");
    link.href = url;

    // Set the filename for the download
    link.setAttribute("download", "CV.pdf");

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Cleanup: remove the link (optional)
    document.body.removeChild(link);
  }
  return (
    <>
      <div className={styles.outerContainer}>
        <img src="Rahim.jpg" alt="myImage" className={styles.image} />
        <div className={styles.summary}>
          <div>
            <h4>
              Hello, I'm <span>Syed Ibrahim</span>
            </h4>
            <h5>Associate Software Engineer</h5>

            <p>{content}</p>
          </div>

          <div className="d-flex justify-content-start" style={{ gap: "25px" }}>
            <button onClick={handleDownload}>Download CV</button>
            <Link to="/contact">
              <button onClick={handleClick}>Contact</button>
            </Link>
          </div>
          <div className="d-flex flex-wrap justify-content-start">
            {contactArray.map(
              (c, i) =>
                c.alt !== "Mobile" && (
                  <div key={c.alt}>
                    <a href={c.info} key={c.alt}>
                      <img src={c.src} alt={c.alt} className={styles.icon} />
                    </a>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      <section id="skills">
        <Skills />
        {/* Content for About Section */}
      </section>
      <section id="experience">
        <Experience />
        {/* Content for About Section */}
      </section>
      <section id="projects">
        <Projects />
        {/* Content for About Section */}
      </section>
      <section id="education">
        <Education />
        {/* Content for About Section */}
      </section>
      <section id="contact">
        <Contact />
        {/* Content for About Section */}
      </section>
    </>
  );
}

export default Home;
