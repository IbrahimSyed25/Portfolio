import styles from "./About.module.css";
const content =
  "Versatile software developer with 3 years of experience, including 2 years in RPA and 1 year in React.js front-end development. Expertise in automating processes, boosting operational efficiency, and building responsive web interfaces. Strong problem-solver with a knack for analyzing business needs and delivering innovative solutions. Proven ability to thrive in agile environments and collaborate with cross-functional teams.";
function About() {
  return (
    <>
      <div className={styles.outerContainer}>
        <h1>About Me</h1>
        <div className={styles.detailsContainer}>
          <div className={styles.container}>
            {" "}
            <img src="medal.png" alt="medal" />
            <p>Experience</p>
            <p>3 Years</p>
            <p>RPA Development</p>
          </div>
          <div className={styles.container}>
            {" "}
            <img src="medal.png" alt="medal" />
            <p>Graduate</p>
            <p>Bachelor of Engineering</p>
            <p>Computer Science and Engineering</p>
          </div>
        </div>
        <div>{content}</div>
      </div>
    </>
  );
}

export default About;
