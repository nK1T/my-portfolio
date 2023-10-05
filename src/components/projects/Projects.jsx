import styles from "./projects.module.scss";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/3d_portfolio.png",
      projectName: "3D Portfolio",
      projectLink: "https://your3dportfolio.netlify.app/",
      projectDescription:
        "Innovatively conceived and designed a 3D static portfolio website with ReactJS, featuring bespoke components to highlight unique aspects. Seamlessly incorporated 3D objects using libraries like three.js and styled components, enhancing the website's visual appeal and interactive elements.",
      projectTech: [
        "React",
        "CSS",
        "JavaScript",
        "three.js",
      ],
      projectExternalLinks: {
        github: "https://github.com/nK1T/3D-Portfolio-Website",
        externalLink: "https://your3dportfolio.netlify.app/",
      },
    },
    {
      projectName: "CarsHub",
      projectLink: "https://netlify.com",
      image: "/carshub.png",
      projectDescription:
        "Crafted a dynamic car hub website using Next.js, TypeScript, and Tailwind CSS, ensuring a modern and responsive design Integrated libraries like Headlessui to enhance user interface components and interactions.",
      projectTech: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Headless UI",
        "RapidAPI",
      ],
      projectExternalLinks: {
        github: "https://github.com/nK1T/CarsHub",
        externalLink: "https://carshub-nk1t.vercel.app/",
      },
    },
    {
      image: "/myntra_clone.png",
      projectName: "Myntra Clone",
      projectLink: "https://netlify.com",
      projectDescription:
      "Developed a Myntra clone using a tech stack featuring HTML, CSS, and JavaScript, with a focus on delivering a seamless e-commerce experience.",
      projectTech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      projectExternalLinks: {
        github: "https://github.com/nK1T/Myntra-Clone",
        externalLink: "https://myntrakaclone.netlify.app/",
      },
    },
    {
      image: "/getdoc.png",
      projectName: "Medical Website",
      projectLink: "https://getdoc.netlify.app/",
      projectDescription:
        "Crafted a responsive and visually appealing medical website using HTML, CSS, and JavaScript. This comprehensive site includes dedicated sections such as About Us, Contact, and Testimonials, providing a user-friendly platform for information, engagement, and client feedback in the healthcare domain.",
      projectTech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      projectExternalLinks: {
        github: "https://github.com/nK1T/Medical-Website",
        externalLink: "https://getdoc.netlify.app/",
      },
    },
  ];
  return (
    <div className={styles.projects} id="work">
      <motion.div
        className={styles.title}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Explore My Digital Canvas</h2>
      </motion.div>
      <div className={styles.projectscontainer}>
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className={styles.project}
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className={styles.projectimage}>
                  <div className={styles.projectimageoverlay}></div>
                  <div className={styles.projectimagecontainer}>
                    <img
                      src={image}
                      alt={projectName}
                      width={600}
                      height={300}
                    />
                  </div>
                </div>
                <div className={styles.projectinfo}>
                  <p className={styles.projectinfooverline}>Featured Project</p>
                  <h3 className={styles.projectinfotitle}>{projectName}</h3>
                  <div className={styles.projectinfodescription}>
                    <p>{projectDescription}</p>
                  </div>
                  <ul className={styles.projectinfotechlist}>
                    {projectTech.map((tech) => (
                      <li className={styles.projectinfotechlistitem} key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className={styles.projectinfolinks}>
                    <li className={styles.projectinfolinksitem}>
                      <a
                        target="_blank"
                        href={projectExternalLinks.github}
                        className={styles.projectinfolinksitemlink} rel="noreferrer"
                      >
                        <FiGithub />
                      </a>
                    </li>
                    <li className={styles.projectinfolinksitem}>
                      <a
                        target="_blank"
                        href={projectExternalLinks.externalLink}
                        className={styles.projectinfolinksitemlink} rel="noreferrer"
                      >
                        <FiExternalLink />
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
