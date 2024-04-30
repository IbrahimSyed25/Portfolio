import styles from "./About.module.css";
const content =
  "Experienced RPA Developer with three years of expertise in streamlining business processes through automation solutions, adept at leveraging agile methodologies and problem-solving skills to deliver efficient results. Transitioning to React.js frontend development with a passion for crafting intuitive user interfaces, keen on leveraging analytical abilities and programming proficiency to excel in the dynamic domain of web development. Eager to showcase versatility and readiness to embrace new challenges through a portfolio highlighting both RPA and React.js projects, aiming to contribute to innovative solutions and make a positive impact in the realm of software development.";
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
