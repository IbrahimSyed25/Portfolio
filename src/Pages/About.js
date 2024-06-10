import styles from "./About.module.css";
const content =
  "Experienced RPA Developer with 3 years of expertise in Automation Anywhere.Proficient in designing, developing, and implementing automation solutions to optimize processes and enhance efficiency. Skilled in task bots, meta bots, web scraping, and document scraping. Expertise in Control Room management and adept at utilizing agile methodologies. Strong problem-solving abilities, excellent communication skills, and a commitment to continuous improvement.";
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
