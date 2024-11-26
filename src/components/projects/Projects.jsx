import styles from "./projects.module.scss";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/talentfinercom.png",
      projectName: "Talentfiner.com",
      projectLink: "https://your3dportfolio.netlify.app/",
      projectDescription:
        "EdTech platform allowing users to explore, view, and purchase courses, providing a seamless and intuitive experience for educational content discovery and enrollment. Integrated secure payment processing with Razorpay, ensuring efficient and safe transactions for users purchasing courses",
      projectTech: [
        "React",
        "SCSS",
        "PHP",
        "MySQL",
      ],
      projectExternalLinks: {
        github: "https://github.com/nK1T/3D-Portfolio-Website",
        externalLink: "https://talentfiner.com/",
      },
    },
    {
      image: "/talentfinerin.png",
      projectName: "HRIS",
      projectLink: "https://gulmohardigitech15.netlify.app/",
      projectDescription:
        "An authentication-based HRIS (Human Resource Information System) for comprehensive employee management, including employee details, leave requests, payroll processing, and attendance tracking.",
      projectTech: [
        "React",
        "SCSS",
        "PHP",
        "MySQL",
      ],
      projectExternalLinks: {
        github: "https://github.com/nK1T/CompanyWebsite",
        externalLink: "https://talentfiner.in/login",
      },
    },
    {
      projectName: "Honeytradi",
      projectLink: "https://netlify.com",
      image: "/honeytradi.png",
      projectDescription:
        "A, real-time crypto trading signals platform to assist users in optimizing their trading strategies through automated buy signals and market insights. Executed automated status updates for signals based on real-time market conditions , ensuring users receive timely, accurate trading advice to enhance decision-making.",
      projectTech: [
        "React",
        "SCSS",
        "NodeJS",
        "MongoDB",
        "ExpressJS",
      ],
      projectExternalLinks: {
        github: "https://github.com/nK1T/CarsHub",
        externalLink: "https://honeytradi.com/",
      },
    },
    {
      image: "/giigbit.png",
      projectName: "Giigbit",
      projectLink: "https://netlify.com",
      projectDescription:
      "A comprehensive job portal serving both job seekers and recruiters, enabling users to efficiently find the ideal job or candidate. Implemented features to provide a seamless, personalized job exploration experience, including advanced search filters, job recommendations, and candidate matching capabilities.",
      projectTech: [
        "React",
        "SCSS",
        "NodeJS",
        "MongoDB",
        "ExpressJS",
      ],
      projectExternalLinks: {
        github: "https://github.com/nK1T/Myntra-Clone",
        externalLink: "https://giigbit.com/",
      },
    },
    {
      image: "/metemint.png",
      projectName: "Metemint",
      projectLink: "https://getdoc.netlify.app/",
      projectDescription:
        "Metemint is the official portfolio website for the Metemint Coin, detailing its origin, vision, and journey in the blockchain ecosystem. Discover the story behind its creation, key milestones, use cases, and future roadmap. Metemint serves as a hub for enthusiasts and investors, showcasing the coin's mission to revolutionize digital transactions with transparency and innovation.",
      projectTech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      projectExternalLinks: {
        github: "https://github.com/nK1T/Medical-Website",
        externalLink: "https://metemint.io/",
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
                    {/* <li className={styles.projectinfolinksitem}>
                      <a
                        target="_blank"
                        href={projectExternalLinks.github}
                        className={styles.projectinfolinksitemlink} rel="noreferrer"
                      >
                        <FiGithub />
                      </a>
                    </li> */}
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
