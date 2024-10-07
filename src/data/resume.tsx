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
    "Java", 
    "Amazon SQS", 
    "AWS Neptune", 
    "Amazon EC2", 
    "Oauth2.0"
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
      start: "Mar 2023",
      end: "Present",
      description:
        "Designed and devloped core infrastructure for cloud automation suite using tools such as Terraform, RabbitMQ, AWS, Go, and Ansible, reducing cloud deployment time by 75% while still remaining compliant in accordance to government contracts. Managed and mentored a cohort of interns for internal GenAI intiatives, helping them write cleaner and more production ready code.",
    },
    {
      company: "Boeing Intelligence & Analytics",
      href: "https://www.bia-boeing.com/",
      badges: [],
      location: "Annapolis Junction, MD",
      title: "Software Engineer I",
      logoUrl: "/boeing.png",
      start: "Jun 2022",
      end: "Mar 2023",
      description:
        "Spearheaded NLP initiatives by leveraging and optimizing libraries such as SpaCy for efficient entity extraction and tokenization of large quanities of documents. Collaborated with other engineers to create an automated pipeline for virus detection software leveraging LLMs and graphical databases such as AWS Neptune.",
    },
    {
      company: "Airspace Link",
      href: "https://airspacelink.com/",
      badges: [],
      location: "Detroit, MI",
      title: "Software Engineer I",
      logoUrl: "/al.jpeg",
      start: "Dec 2021",
      end: "May 2022",
      description:
        "Collaborated with sentior engineers to understand and implement drone flight patterns compliant with the FAA. Optimized UAT testing in React, leveraging Jest and snapshot testing procedures.",
    },
    {
      company: "Boeing Intelligence & Analytics",
      href: "https://www.bia-boeing.com/",
      badges: [],
      location: "Annapolis Junction, MD",
      title: "Software Engineer Intern",
      logoUrl: "/boeing.png",
      start: "Jun 2021",
      end: "Aug 2021",
      description:
        "Participated with a cohort of other interns to create efficient entity extraction software in AWS, designed developed a modern and user-friendly UI with React, and advanced search querying with ElasticSearch.",
    },
    {
      company: "HCM Tradeseal",
      href: "https://hcmtradeseal.com/",
      badges: [],
      location: "Ann Arbor, MI",
      title: "Software Engineer Intern",
      logoUrl: "/hcm.png",
      start: "Sep 2020",
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
      dates: "Mar 2020 - Jun 2020",
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
      dates: "Apr 2021",
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
      dates: "Mar 2022",
      location: "Fairfax, Virginia",
      description:
        "Designed and developed an application to help tailor a effective study plan for students by leveraging Artificial Intelligence.",
      image: "/gmu.png",
      links: [

      ],
    },
    {
      title: "Hack The Pandemic",
      dates: "Mar 2021",
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
      dates: "Apr 2020",
      location: "Global",
      description:
        "Developed a solution that effectively destributed Covid-19 vaccines based off demographic data.",
      image: "",
      links: [

      ],
    },
    {
      title: "IBM Call For Code",
      dates: "Mar 2020",
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
      period: "Jul 2024",
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
