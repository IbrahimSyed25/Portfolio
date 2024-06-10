import styles from "./Projects.module.css";
function Projects() {
  return (
    <div className={styles.outerContainer}>
      <h3> Projects</h3>
      <div className={styles.projectcontainer}>
        <div className={styles.container}>
          <h5>Accordian Component</h5>
          <img src="accordian component.png" alt="projects" />
          <div className={styles.links}>
            <a
              href="https://accordiancomponentreact.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Live Demo</button>
            </a>
            <a
              href="https://github.com/IbrahimSyed25/AccordianComponentReact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Github Link</button>
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <h5>Pizza Menu</h5>
          <img src="pizza menu.png" alt="projects" />
          <div className={styles.links}>
            <a
              href="https://pizza-menu-fastrestaurent.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Live Demo</button>
            </a>
            <a
              href="https://github.com/IbrahimSyed25/pizza-menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Github Link</button>
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <h5>React Quiz</h5>
          <img src="quiz.png" alt="projects" />
          <div className={styles.links}>
            <a
              href="https://react-quiz15.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Live Demo</button>
            </a>
            <a
              href="https://github.com/IbrahimSyed25/ReactQuiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Github Link</button>
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <h5>Travel Checklist</h5>
          <img src="travellist.png" alt="projects" />
          <div className={styles.links}>
            <a
              href="https://travelchecklistreact.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Live Demo</button>
            </a>
            <a
              href="https://github.com/IbrahimSyed25/TravelChecklist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Github Link</button>
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <h5>Flash Cards</h5>
          <img src="Flashcards.png" alt="projects" />
          <div className={styles.links}>
            <a
              href="https://reactflashcards.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Live Demo</button>
            </a>
            <a
              href="https://github.com/IbrahimSyed25/flashcards"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Github Link</button>
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <h5>Fitness Website</h5>
          <img src="fitnesswebsite.png" alt="projects" />
          <div className={styles.links}>
            <a
              href="https://reactgymguideweb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Live Demo</button>
            </a>
            <a
              href="https://github.com/IbrahimSyed25/FitnessExerciseApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> Github Link</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
