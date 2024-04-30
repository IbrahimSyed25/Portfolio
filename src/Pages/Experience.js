import styles from "./Experience.module.css";
const experienceArray = [
  {
    role: "Zoho Developer",
    company: "Tzar Industries Pvt Ltd",
    responsibilities: [
      "Designed and developed RPA solutions using Automation Anywhere, including process automation, workflow automation, and data extraction.",
      "Developed and maintained automation scripts, workflows, and bots using Automation Anywhere's proprietary scripting language.",
      "Conducted testing, debugging, and troubleshooting of automation solutions to ensure functionality and performance. Deployed and monitored RPA bots in production environments, and provide ongoing support and maintenance as needed",
    ],
    Duration: "Jan, 2020 -  Apr,2020",
  },
  {
    role: "RPA Developer",
    company: "Tata Consultancy Services",
    responsibilities: [
      "Designed, customized, and integrated various Zoho applications like CRM, Creator, Books, and Inventory to align with business needs",
      "Utilized Deluge scripting language for configuration and customization.",
      " Developed and managed integrations with third-party systems via APIs.",
      "Performed testing, debugging, and troubleshooting for optimal functionality and performance of Zoho applications",
    ],
    Duration: "Apr, 2021 -  Mar,2024",
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
