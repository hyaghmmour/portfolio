import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hamza Yaghmmour",
  initials: "HY",
  url: "https://hamzayaghmmour.io",
  location: "Washington, D.C.",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Passionate About Tech, Driven by Results",
  summary:
    "I'm a Full Stack Software Engineer specializing in mobile and web development, with a focus on infrastructure automation. I've led projects in GenAI at Boeing and financial inclusion platforms like MoneyFlap, excelling in technologies like React.js, Flutter, Node.js, GoLang, and AWS.",
  avatarUrl: "/profile.jpg",
  skills: [
    "React.js",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "TypeScript",
    "gRPC",
    "RabbitMQ",
    "Terraform",
    "Redux",
    "Ansible",
    "Flutter",
    "Dart",
    "AWS",
    "NLP", 
    "GenAI", 
    "Java"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hyaghmmour@gmail.com",
    tel: "+17035379281",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/hyaghmmour",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hyaghmmour",
        icon: Icons.linkedin,

        navbar: true,
      },

      Email: {
        name: "Send Email",
        url: "mailto:hyaghmmour@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Boeing Intelligence & Analytics",
      href: "https://www.bia-boeing.com/",
      badges: [],
      location: "Annapolis Junction, MD",
      title: "Software Engineer II",
      logoUrl: "/boeing.png",
      start: "March 2023",
      end: "Present",
      description:
        "I spearheaded several internal projects, including groundbreaking GenAI initiatives and the development of a cloud suite leveraging Kubernetes, RabbitMQ, gRPC, and Terraform, all in full compliance with contractual obligations. I mentored interns across various technical disciplines, helping accelerate their professional growth and ensuring their active contribution to key projects. Additionally, I implemented Ansible for configuration management and Docker for containerization, optimizing system provisioning and application deployment across development, testing, and production environments.",
    },
    {
      company: "Boeing Intelligence & Analytics",
      href: "https://www.bia-boeing.com/",
      badges: [],
      location: "Annapolis Junction, MD",
      title: "Software Engineer I",
      logoUrl: "/boeing.png",
      start: "June 2022",
      end: "March 2023",
      description:
        "I designed and developed an entity-extraction application using NLP libraries and tools, enhancing virus detection capabilities. I integrated SpaCy for advanced NLP processing and implemented Jenkins as a CI/CD pipeline, automating the build, test, and deployment processes for rapid code delivery.",
    },
    {
      company: "Airspace Link",
      href: "https://airspacelink.com/",
      badges: [],
      location: "Detroit, MI",
      title: "Software Engineer I",
      logoUrl: "/al.jpeg",
      start: "December 2021",
      end: "May 2022",
      description:
        "I conducted comprehensive testing for a React application, including unit, integration, and user acceptance tests. I developed and maintained features in compliance with FAA regulations to optimize drone pathing. Thriving in a startup environment, I contributed to rapid growth by delivering high-quality features on tight schedules and collaborating across cross-functional teams.",
    },
    {
      company: "Boeing Intelligence & Analytics",
      href: "https://www.bia-boeing.com/",
      badges: [],
      location: "Annapolis Junction, MD",
      title: "Software Engineer Intern",
      logoUrl: "/boeing.png",
      start: "June 2021",
      end: "August 2021",
      description:
        "Collaborated with a cohort of interns to design and implement an efficient solution to extract and tokenize valuable information from a multitude of documents with NLP technologies. Leveraging tools such as ElasticSearch, AWS, and Jenkins.",
    },
    {
      company: "HCM Tradeseal",
      href: "https://hcmtradeseal.com/",
      badges: [],
      location: "Ann Arbor, MI",
      title: "Software Engineer Intern",
      logoUrl: "/hcm.png",
      start: "September 2020",
      end: "May 2021",
      description:
        "Worked closely with leadership to learn efficient debugging practices. Created scripts with Python3 to effectively streamline creation of slideshow presentations.",
    },
  ],
  education: [
    {
      school: "George Mason University",
      href: "https://www.gmu.edu/",
      degree: "B.S. Computer Science",
      logoUrl: "/gmu.png",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "MoneyFlap",
      href: "https://www.moneyflap.com",
      dates: "Aug 2022 - Present`",
      active: true,
      description:
        "With the world of finance evolving towards the blockchain, MoneyFlap was created as a way to bridge the gap between underserved and first-world countries. Providing accounts on all EVM chains, global issuance of virtual/physical cards, and deposits, withdraws and transfers available in 180+ countries.",
      technologies: [
        "Flutter",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.moneyflap.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mf.png",
      video:
        "",
    },
    {
      title: "Vaccess.io",
      href: "https://devpost.com/software/vaccess-io",
      dates: "March 2020 - June 2020",
      active: true,
      description:
        "Developed, designed and implemented an efficient mock solution for a unique way to handle vaccine distribution during Covid-19.",
      technologies: [
        "React.js",
        "Java",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://devpost.com/software/vaccess-io",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/vaccess.jpg",
      video: "",
    },
    {
      title: "Student Spot",
      href: "https://devpost.com/software/student-spot",
      dates: "April 2021",
      active: true,
      description:
        "Designed and developed an application to help tailor a effective study plan for students by leveraging Artificial Intelligence.",
      technologies: [
        "React.js",
        "Typescript",
        "Artificial Intelligence",
        "Python",
        "Flask",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://devpost.com/software/student-spot",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/ss.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "GMU Hackathon",
      dates: "March 2022",
      location: "San Francisco, California",
      description:
        "Designed and developed an application to help tailor a effective study plan for students by leveraging Artificial Intelligence.",
      image: "/gmu.png",
      links: [

      ],
    },
    {
      title: "Hack The Pandemic",
      dates: "March 2021",
      location: "Stockholm, Sweden",
      description:
        "Designed and developed a unique way to predict the spread of Covid-19.",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "MIT Africa Takes On Covid-19",
      dates: "May 2020",
      location: "Lagos, Nigeria",
      description:
        "Developed an EMR Solution in Nigeria for streamlining communication between patients and doctors, without risking infection.",
      image: "/mit.png",
      mlh: "",
      links: [],
    },
    {
      title: "Luminata Covid-19 Global AI Hackathon",
      dates: "April 2020",
      location: "Global",
      description:
        "Developed a solution that effectively destributed Covid-19 vaccines based off demographic data.",
      image: "",
      links: [

      ],
    },
    {
      title: "IBM Call For Code",
      dates: "March 2020",
      location: "Remote - USA",
      description:
        "Developed an effective analytics solution for predicting severity of Covid-19 spread leveraging only IBM Cloud Technologies.",
      icon: "public",
      image: "/ibm.jpg",
      links: [],
    },


  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect - Associate",
      period: "July 2024",
      // end: "",
      logo: "/aws.png",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      period: "March 2023",
      // end: "March 2026",
      logo: "/aws.png",
    },
  ],
} as const;
