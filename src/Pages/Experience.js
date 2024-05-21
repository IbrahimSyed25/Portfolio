import styles from "./Experience.module.css";
const experienceArray = [
  {
    role: "Front-End React.js Developer",
    company: "Tata Consultancy Services",
    responsibilities: [
      "Developed and Maintained Web Applications: Created responsive and interactive user interfaces using React.js, collaborating with UX/UI designers to implement design specifications.",
      " Optimized Performance: Built and optimized reusable components for maximum performance across various devices and browsers, enhancing user experience.",
      " Integrated APIs: Connected front-end functionalities with RESTful APIs, ensuring seamless data flow and coordination with back-end services.",
      " Ensured Code Quality: Participated in code reviews, maintained high code quality, wrote clean, maintainable, and efficient code adhering to best practices.",
    ],
    Duration: "Feb, 2023 -  Mar, 2024",
  },
  {
    role: "RPA Developer",
    company: "Tata Consultancy Services",
    responsibilities: [
      " Designed and Developed RPA Solutions: Utilized Automation Anywhere for process automation, workflow automation, and data extraction.",
      " Script Development and Maintenance: Created and maintained automation scripts, workflows, and bots using Automation Anywhere's scripting language",
      " Testing and Debugging: Conducted comprehensive testing, debugging, and troubleshooting to ensure functionality and performance of automation solutions.",
      " Deployment and Support: Deployed and monitored RPA bots in production environments, providing ongoing support and maintenance.",
    ],
    Duration: "Apr, 2021 -  Jan, 2023",
  },
];
function Experience() {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h3 className={styles.title}> Career Highlights</h3>
      <div className={styles.outerContainer}>
        {experienceArray.map((e, i) => (
          <div className={styles.container} key={i}>
            {/* <div className="d-flex justify-content-between"> </div> */}
            <h3> {e.role}</h3>
            <h4>{e.company}</h4>
            <h5>{e.Duration}</h5>
            <div className="d-flex flex-column">
              <ul>
                {e.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
