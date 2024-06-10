import styles from "./Mainskills.module.css";
const skills = [
  {
    button: "FrontEnd",
    info: ["HTML", "CSS", "Bootstrap", "JavaScript", "ReactJS"],
  },
  { button: "Database", info: ["SQL", "MySQL"] },
  { button: "RPA", info: ["Automation Anywhere", "UIPath"] },
  { button: "Other", info: ["Python"] },
];
function MainSkills() {
  return (
    <div className={styles.outercontainer}>
      {skills.map((s, i) => {
        return (
          <div className={styles.container} key={i}>
            <h5>{s.button}</h5>
            <div className={styles.detailsContainer}>
              {s.info.map((e, i) => (
                <div key={i}>{e}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainSkills;
