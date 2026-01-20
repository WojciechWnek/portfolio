import Timeline from "../ui/timeline";

const Experience = () => {
  const data = [
    {
      dates: "Aug 2022 - Sep 2025",
      company: "Profil Software",
      role: "Frontend Developer",
      description:
        "Worked on multiple commercial web applications, designing scalable architectures, implementing new features, and ensuring code quality. Collaborated with cross-functional international teams, integrated backend systems and third-party APIs, and mentored junior developers to maintain high standards.",
      projects: [
        {
          title: "JumpseatSMS",
          technologies: ["React", "TS", "TanStack Query", "Stripe", "Bootstrap"],
          description:
            "Aviation safety management platform. Built hazard reporting, risk management, and Stripe integration features with focus on frontend architecture, reliability, and UX.",
          link: "https://profil-software.com/case-study/jumpseatsms",
        },
        {
          title: "VIT",
          technologies: ["React", "TS", "TanStack Query", "Vite", "SASS"],
          description:
            "Social media automation platform for scraping, scheduling, and posting videos. Developed workflows and ensured performance, reliability, and smooth user experience.",
          link: "https://profil-software.com/case-study/vit",
        },
        {
          title: "Take3Breaths",
          technologies: ["Next.js", "React", "TS", "Redux", "Tailwind"],
          description:
            "Web app guiding meditation and breathing sessions. Implemented key features, optimized frontend performance, and ensured maintainability and usability.",
          link: "https://profil-software.com/case-study/take3breaths",
        },
      ],
    },
    {
      dates: "May 2022 - Jul 2022",
      company: "Profil Software",
      role: "Intern",
      description:
        "During my internship, I learned web development fundamentals and the developer workflow, including Git, Linux, Chrome Dev Tools, and Docker. Built frontend features for small projects using React, Angular, and Vue, and gained hands-on experience with HTML, CSS/SASS, and JavaScript.",
      projects: [
        {
          title: "Planted",
          technologies: ["JS", "React", "SASS"],
          description:
            "Internship project: web app for monitoring indoor plant watering schedules. Implemented frontend features and UI, applying the skills learned during the internship.",
          link: "#",
        },
      ],
    },
  ];

  return (
    <section id="experience">
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
