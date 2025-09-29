import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription?: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description:
      "Welcome to my portfolio — I am a student in Automotive Diagnostics and Embedded Electronics at OFPPT, Morocco.",
    metadata: {
      title: "Home | Portfolio",
      description:
        "Portfolio of an Automotive Diagnostics and Embedded Electronics student at OFPPT, Morocco.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "Technical skills in automotive diagnostics, embedded systems, electronics, and vehicle maintenance.",
    metadata: {
      title: "Skills | Portfolio",
      description:
        "Key skills in automotive diagnostics, electronics, and embedded systems.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Practical projects and workshops completed during my automotive diagnostics training.",
    metadata: {
      title: "Projects | Portfolio",
      description:
        "Projects related to automotive diagnostics and embedded electronics from my OFPPT training.",
    },
  },
  contact: {
    title: "Contact",
    description:
      "Let’s connect — feel free to reach out for collaborations or opportunities.",
    metadata: {
      title: "Contact | Portfolio",
      description: "Get in touch for collaboration or professional opportunities.",
    },
  },
  contributions: {
    title: "Contributions",
    description:
      "Community involvement, shared works, open-source resources, and automotive knowledge.",
    metadata: {
      title: "Contributions | Portfolio",
      description:
        "My contributions and shared resources in automotive diagnostics and technology.",
    },
  },
  resume: {
    title: "Resume",
    description: "My academic background, technical training, and career profile.",
    metadata: {
      title: "Resume | Portfolio",
      description:
        "Detailed resume — education, skills, and professional experience in automotive diagnostics.",
    },
  },
  experience: {
    title: "Experience",
    description:
      "Internships, workshops, and practical training in automotive maintenance and diagnostics.",
    metadata: {
      title: "Experience | Portfolio",
      description:
        "Hands-on experience in vehicle maintenance, diagnostics, and embedded systems at OFPPT.",
    },
  },
};
