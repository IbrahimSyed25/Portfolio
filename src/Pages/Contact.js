import styles from "./contacts.module.css";
const contactArray = [
  { src: "call.png", info: "+91-9344090804", alt: "Mobile" },
  {
    key: "instagram",
    src: "instagram.png",
    info: "https://www.instagram.com/itz_ibrahimsyed/",
    alt: "Instagram",
  },
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
function Contact() {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.lines} style={{ color: "grey" }}>
        Lets Get In Touch
      </h2>

      <div className={styles.contactsArray}>
        <div className="div-left">
          <div className="d-flex flex-wrap">
            <img src="call.png" className={styles.icon} alt="mobile" />
            <span className={styles.info} style={{ padding: "15px" }}>
              +91 9344090804
            </span>
          </div>
          <div className="d-flex ">
            <img src="mail.png" className={styles.icon} alt="email" />
            <div className="d-flex flex-wrap" style={{ padding: "15px" }}>
              <span className={styles.info}>syedibrahims25@outlook.com</span>
            </div>
          </div>
        </div>

        <div className="div-right " style={{ borderRight: "20px" }}>
          <div className="d-flex flex-wrap justify-content-between">
            {contactArray.map(
              (c) =>
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
    </div>
  );
}

export default Contact;
