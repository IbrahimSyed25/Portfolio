import styles from "./Certifications.module.css";
function Certifications() {
  return (
    <div className={styles.outercontainer}>
      <div className={styles.certifications}>
        <h3>Certifications</h3>
        <ul className={styles.list}>
          <li>
            {" "}
            Automation Anywhere Certified Advanced RPA Professional A2019
          </li>
          <li>
            {" "}
            The complete JavaScript Course 2024: From Zero to Expert -Udemy
          </li>

          <li> The complete React Course 2024: From Zero to Expert - Udemy</li>
        </ul>
      </div>
    </div>
  );
}

export default Certifications;
