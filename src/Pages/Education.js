import styles from "./Education.module.css";
const education = [
  {
    Course: "Bachelor of Engineering",
    duration: "2015-2019",
    specialization: "Computer Science and Engineering",
    Percentage: 73,
    Institution: "University College Of Engineering(BIT Campus), Trichy",
  },
  {
    Course: "Higher Secondary",
    duration: "2013-2015",
    specialization: "Maths- Biology",
    Percentage: 92.75,
    Institution: "Balakrishna Matric Hr Sec School, Tirunelveli",
  },
];

function Education() {
  return (
    <div className="d-flex flex-column">
      <h3 style={{ textAlign: "center" }}> Academic Journey</h3>
      <div className={styles.outerContainer}>
        {education.map((e, i) => (
          <div className={styles.container}>
            <h4>
              {e.Course}({e.duration})
            </h4>
            <p>{e.Institution}</p>
            <p>{e.specialization}</p>
            <p>Score: {e.Percentage}%</p>
          </div>
        ))}
        {/* <div className={styles.container}></div>
    <div className={styles.container}></div>
    <div className={styles.container}></div> */}
        <div className={styles.container}>
          <h4>Secondary School Leaving Certificate(2012-2013)</h4>
          <p>Ordnance Factory High School, Trichy</p>

          <p>Score: 93%</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
