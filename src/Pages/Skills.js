import MainSkills from "./MainSkills";
import Certifications from "./Certifications";
import styles from "./Skills.module.css";

// skills.map((skill, i) => console.log(skill.button));

function Skills() {
  return (
    <div className={styles.outercontainer}>
      <h3 style={{ textAlign: "center", padding: "2%" }}>
        {" "}
        Skills and Certifications{" "}
      </h3>
      <MainSkills />
      <Certifications />
    </div>
  );
}

export default Skills;
