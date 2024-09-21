import styles from './ProjectsStyles.module.css';
import Netflix from '../../assets/Netflix.png';
import Starbucks from '../../assets/Starbucks.png';
import Razorpay from '../../assets/Razorpay.png';
import Viberr from '../../assets/Video-Hub.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Netflix}
          link="https://github.com/ronnygaur/Video-Hub"
          h3="VideoHub"
          p="Streaming App"
        />
        <ProjectCard
          src={Starbucks}
          link="https://github.com/ronnygaur/Starbuck-s-UI-UX-"
          h3="Starbuck Coffee"
          p="Coffee Restaurant"
        />
        <ProjectCard
          src={Razorpay}
          link="https://github.com/ronnygaur/Razorpay"
          h3="Razorpay "
          p="Payment Portal"
        />
        <ProjectCard
          src={Viberr}
          link="https://github.com/ronnygaur/Video-Hub"
          h3="Video Streaming"
          p="Streaming App"
        />
      </div>
    </section>
  );
}

export default Projects;
