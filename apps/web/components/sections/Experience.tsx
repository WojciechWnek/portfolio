import ReferenceCard from "../experience/ReferenceCard";
import Timeline from "../experience/Timeline";

const Experience = () => {
  const data = [
    {
      dates: "Aug 2022 - Sep 2025",
      company: "Profil Software",
      role: "Frontend Developer",
      description: [
        "Worked on multiple commercial web applications, designing scalable frontend architectures and delivering production-ready features. ",
        "Collaborated with international, cross-functional teams to integrate backend systems, third-party APIs, and payment solutions. ",
        "Maintained high code quality through reviews, refactoring, and mentoring junior developers.",
        "Took ownership of features from requirements to production, focusing on long-term maintainability and product quality.",
      ],
      projects: [
        {
          title: "JumpseatSMS",
          technologies: ["React", "TS", "TanStackQuery", "Stripe", "Bootstrap"],
          description:
            "Aviation safety management platform. Built hazard reporting, risk management, and Stripe integration features with focus on frontend architecture, reliability, and UX.",
          link: "https://profil-software.com/case-studies/aviation-software/jumpseatsms/",
        },
        {
          title: "VIT",
          technologies: ["React", "TS", "TanStackQuery", "Vite", "Sass"],
          description:
            "Social media automation platform for scraping, scheduling, and posting videos. Developed workflows and ensured performance, reliability, and smooth user experience.",
          link: "https://profil-software.com/case-studies/digital-marketing-software/vit/",
        },
        {
          title: "Take3Breaths",
          technologies: ["Nextjs", "React", "TS", "Redux", "Tailwind"],
          description:
            "Web app guiding meditation and breathing sessions. Implemented key features, optimized frontend performance, and ensured maintainability and usability.",
          link: "https://profil-software.com/case-studies/healthcare-telemedicine-iot-software-develpoment/take3breaths/",
        },
      ],
    },
    {
      dates: "May 2022 - Jul 2022",
      company: "Profil Software",
      role: "Intern",
      description: [
        "During my internship, I learned web development fundamentals and the developer workflow, including Git, Linux, Chrome Dev Tools, and Docker.",
        "Built frontend features for small projects using React, Angular, and Vue, and gained hands-on experience with HTML, CSS/SASS, and JavaScript.",
      ],
      projects: [
        {
          title: "Planted",
          technologies: ["JS", "React", "Sass"],
          description:
            "Internship project: web app for monitoring indoor plant watering schedules. Implemented frontend features and UI, applying the skills learned during the internship.",
        },
      ],
    },
  ];

  const REFERENCES = [
    {
      name: "Michał Skałkowski",
      role: "COO",
      company: "Profil Software",
      image:
        "https://media.licdn.com/dms/image/v2/C4E03AQGuosWj3m0StA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1632823870907?e=1770249600&v=beta&t=TJDv00KbPO9hjjUM5AKgFcl4ymrhUxtC9vOunyIQW4U",
      references:
        "I had the pleasure of working with Wojciech at Profil Software, where I serve as COO. Wojciech started with us as an intern and quickly grew into the role of Frontend Developer, staying with the company for over three and a half years. \n\nFrom the very beginning, he stood out as someone who learns fast and adapts quickly to new challenges. I often received feedback from our tech leads highlighting the consistently high quality of his code. \n\nWhat made Wojciech truly exceptional was not only his technical skills but also his soft skills. He communicates seamlessly with both team members and clients, and he was always eager to help others. His ability to quickly integrate into new projects and teams was invaluable. \n\nI am very grateful for the years Wojciech spent with us and truly appreciated his contribution to our company. It was with genuine regret that I learned about his decision to move on due to relocation. Any team would be lucky to have him.",
    },
  ];

  return (
    <section id="experience">
      <Timeline data={data} />
      <div className="w-full pb-20 font-sans md:px-10 lg:pb-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="2xs:px-8 mt-10 mb-20 w-full px-5 text-3xl leading-tight font-black tracking-tight md:px-0 md:text-4xl xl:text-5xl">
            Reference
          </h2>
          <div className="2xs:px-8 flex flex-col items-center px-5">
            {REFERENCES.map((item, index) => (
              <ReferenceCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
