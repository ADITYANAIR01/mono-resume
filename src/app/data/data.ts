import { ResumeData } from "@/app/schemas/ResumeSchema";

export const dummyData: ResumeData = {
  ResumeConfig: {
    ResumeHasBackgroundPattern: false,
    ResumeHasPDFPreview: true,
    ResumeHasHTMLPreview: false,
    ResumeHasLightBackground: false,
    ResumeHasOverview: true,
    ResumeHasCertifications: true,
    ResumeHasAchievements: true,
    ResumeHasExperience: true,
    ResumeHasEducation: true,
    ResumeHasSkills: true,
    ResumeHasProjects: true,
    ResumeHasExtracurricular: true,
    ResumeHasVolunteering: true,
    ResumeHasPublications: true,
  },
  ResumeTitles: {
    OverviewTitle: "Overview",
    EducationTitle: "Education",
    SkillsTitle: "Skills",
    ExperienceTitle: "Experience",
    ProjectsTitle: "Projects",
    CertificationsTitle: "Certifications",
    AchievementsTitle: "Achievements",
    VolunteeringTitle: "Volunteering",
    PublicationsTitle: "Publications",
    ExtracurricularTitle: "Extracurricular",
  },
  HeaderFirstName: "John",
  HeaderLastName: "Doe",
  HeaderFancyName: true,
  HeaderUnderlinedName: true,
  HeaderTitle: "Data Analyst / ML Researcher",
  HeaderAddress: "Mumbai, Maharashtra, India",
  ContactData: [    {
      ContactIcon: "github",
      ContactLink: "https://github.com/example",
      ContactText: "github.com/example",
      isEnabled: true,
    },
    {
      ContactIcon: "gitlab",
      ContactLink: "https://gitlab.com/example",
      ContactText: "gitlab.com/example",
      isEnabled: true,
    },
    {      ContactIcon: "linkedin",
      ContactLink: "https://linkedin.com/in/example",
      ContactText: "linkedin.com/in/example",
      isEnabled: true,
    },
    {
      ContactIcon: "x-twitter",
      ContactLink: "https://x.com/example",
      ContactText: "x.com/example",
      isEnabled: true,
    },
    {
      ContactIcon: "email",
      ContactLink: "mailto:johndoe@email.com",
      ContactText: "johndoe@email.com",
      isEnabled: true,
    },
    {
      ContactIcon: "phone",
      ContactLink: "tel:+919876543210",
      ContactText: "+919876543210",
      isEnabled: true,
    },
  ],
  EducationData: [
    {
      EducationInstitutionName: "UNIVERSITY OF ENGINEERING, DELHI",
      EducationCourseName: "Master of Engineering",
      EducationFromTime: "2022",
      EducationToTime: "Present",
      EducationMajor: "Big Data Analysis",
      EducationHasMinor: false,
      EducationMinor: "",
      EducationHasSpecialization: true,
      EducationSpecialization: "Data Filtering",
      EducationGPA: "8.47",
      EducationHasGPA: true,
    },
    {
      EducationInstitutionName: "ENGINEERING UNIVERSITY, MUMBAI",
      EducationCourseName: "Bachelor of Engineering",
      EducationFromTime: "2018",
      EducationToTime: "2022",
      EducationMajor: "Computer Science",
      EducationHasMinor: true,
      EducationMinor: "Artificial Intelligence",
      EducationHasSpecialization: false,
      EducationSpecialization: "",
      EducationHasGPA: true,
      EducationGPA: "8.73",
    },
  ],
  SkillsData: [
    {
      SkillsTitle: "LANGUAGES",
      SkillsName: [
        "C/C++",
        "Java",
        "Python",
        "Kotlin",
        "PHP",
        "HTML",
        "CSS",
        "Javascript",
        "Go",
        "Rust",
      ],
    },
    {
      SkillsTitle: "FRAMEWORKS",
      SkillsName: [
        "React.js",
        "Next.js",
        "Node.js",
        "Bun.js",
        "Vite.js",
        "Nuxt.js",
        "Symphony",
        "Laravel",
        "Angular",
        "Tailwind CSS",
        "Bootstrap",
        "Redux.js",
      ],
    },
    {
      SkillsTitle: "TOOLS",
      SkillsName: [
        "Git",
        "Docker",
        "Vercel",
        "AWS",
        "GitHub",
        "Kubernetes",
        "Linux",
      ],
    },
  ],
  ExperienceData: [
    {
      ExperienceOrganization: "MICROSOFT INDIA",
      ExperienceWorkTitle: "INTERN",
      ExperienceTimeFrom: "May 2021",
      ExperienceTimeTo: "July 2021",
      ExperienceLocation: "Hyderabad, Telangana",
      ExperienceDescription: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      ],
    },
    {
      ExperienceOrganization: "IIIT DELHI",
      ExperienceWorkTitle: "RESEARCHER",
      ExperienceTimeFrom: "August 2023",
      ExperienceTimeTo: "Present",
      ExperienceLocation: "Delhi",
      ExperienceDescription: [
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      ],
    },
  ],
  ProjectsData: [
    {
      ProjectName: "VACCINE TRACKER",
      ProjectHasLink: true,
      ProjectLink: "https://example.com",
      ProjectTimeFrom: "Aug 2021",
      ProjectHasTimeTo: true,
      ProjectTimeTo: "Jan 2022",
      ProjectHasTechStack: true,
      ProjectTechStack: ["API", "AWS", "Netlify", "React.js", "Bootstrap"],
      ProjectDescription: [
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      ],      ProjectHasGitHub: true,
      ProjectGitHubLink: "https://github.com/example/vaccine-tracker",
      ProjectHasGitLab: true,
      ProjectGitLabLink: "https://gitlab.com/example/vaccine-tracker",
      ProjectHasOtherLink: true,
      ProjectOtherLink: "https://example.com",
    },
    {
      ProjectName: "GPT BASED ON TAMIL LANGUAGE",
      ProjectHasLink: false,
      ProjectLink: "",
      ProjectTimeFrom: "Sep 2022",
      ProjectHasTimeTo: true,
      ProjectTimeTo: "Sep 2023",
      ProjectHasTechStack: true,
      ProjectTechStack: ["Git", "Python", "Vercel"],
      ProjectDescription: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      ],      ProjectHasGitHub: true,
      ProjectGitHubLink: "https://github.com/example/gpt-tamil",
      ProjectHasGitLab: false,
      ProjectGitLabLink: "",
      ProjectHasOtherLink: false,
      ProjectOtherLink: "",
    },
    {
      ProjectName: "AI BASED FRAUD DETECTION",
      ProjectHasLink: true,
      ProjectLink: "https://example.com",
      ProjectTimeFrom: "Jan 2023",
      ProjectHasTimeTo: false,
      ProjectTimeTo: "Present",
      ProjectHasTechStack: false,
      ProjectTechStack: [],
      ProjectDescription: [
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      ],
      ProjectHasGitHub: false,
      ProjectGitHubLink: "",
      ProjectHasGitLab: false,
      ProjectGitLabLink: "",
      ProjectHasOtherLink: true,
      ProjectOtherLink: "https://example.com",
    },
  ],
  OverviewData: {
    HasOverview: true,
    Overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed purus quis massa hendrerit pulvinar. Vestibulum facilisis risus at aliquet posuere.",
  },
  CertificationsData: [
    {
      certificationCourseName: "Game making using LaTeX",
      certificationHaveCourseLink: true,
      certificationLinkToCourse: "https://example.com",
      certificationCoursePlatformName: "Coursera",
      certificationHaveCertificate: true,
      certificationLinkToCertificate: "https://example.com",
    },
    {
      certificationCourseName: "Machine Learning using React.js",
      certificationHaveCourseLink: false,
      certificationLinkToCourse: "",
      certificationCoursePlatformName: "Udemy",
      certificationHaveCertificate: true,
      certificationLinkToCertificate: "https://example.com",
    },
    {
      certificationCourseName: "Big HTML Analysis using Typescript",
      certificationHaveCourseLink: false,
      certificationLinkToCourse: "",
      certificationCoursePlatformName: "Linkedin",
      certificationHaveCertificate: true,
      certificationLinkToCertificate: "https://example.com",
    },
    {
      certificationCourseName: "DSA Basics using Flutter",
      certificationHaveCourseLink: true,
      certificationLinkToCourse: "https://example.com",
      certificationCoursePlatformName: "Oracle Academy",
      certificationHaveCertificate: false,
      certificationLinkToCertificate: "",
    },
  ],
  AchievementsData: [
    {
      achievementMain: "Winner",
      achievementEvent: "IBM HACK 8.0",
      achievementHaveCertificate: true,
      achievementLinkToCertificate: "https://example.com",
    },
    {
      achievementMain: "2nd Rank",
      achievementEvent: "UX Champs by Cisco",
      achievementHaveCertificate: true,
      achievementLinkToCertificate: "https://example.com",
    },
    {
      achievementMain: "Runner Up",
      achievementEvent: "CODE-IT-ON by Compute Club",
      achievementHaveCertificate: false,
      achievementLinkToCertificate: "",
    },
    {
      achievementMain: "Finalist",
      achievementEvent: "CODE WARS by BigTech",
      achievementHaveCertificate: true,
      achievementLinkToCertificate: "https://example.com",
    },
  ],
  VolunteeringData: [
    {
      VolunteeringTitle: "Community Clean-Up Initiative",
      VolunteeringOrganization: "Local Community Center",
      VolunteeringYear: "2022",
    },
    {
      VolunteeringTitle: "Food Drive Volunteer",
      VolunteeringOrganization: "Food Bank",
      VolunteeringYear: "2021",
    },
    {
      VolunteeringTitle: "Animal Shelter Helper",
      VolunteeringOrganization: "City Animal Shelter",
      VolunteeringYear: "2020",
    },
  ],
  PublicationsData: [
    {
      PublicationTitle:
        "Machine Learning in Healthcare: A Comprehensive Review",
      PublicationAuthors: "John Doe, Jane Smith, Alice Johnson",
      PublicationJournal: "Journal of Medical AI",
      PublicationYear: "2023",
      PublicationDOI: "https://doi.org/10.1234/jmai.2023.001",
    },
    {
      PublicationTitle: "Quantum Computing: Challenges and Opportunities",
      PublicationAuthors: "Bob Wilson, Carol Brown",
      PublicationJournal: "Quantum Information Processing",
      PublicationYear: "2022",
      PublicationDOI: "https://doi.org/10.5678/qip.2022.002",
    },
  ],
  ExtracurricularData: [
    {
      ExtracurricularTitle: "Debate Club President",
      ExtracurricularOrganization: "University Debate Society",
      ExtracurricularYears: "2021-2022",
    },
    {
      ExtracurricularTitle: "Basketball Team Captain",
      ExtracurricularOrganization: "University Sports Club",
      ExtracurricularYears: "2020-2021",
    },
    {
      ExtracurricularTitle: "Music Band Member",
      ExtracurricularOrganization: "University Music Club",
      ExtracurricularYears: "2019-2020",
    },
  ],
};
export const defaultSectionOrder = [
  "Overview",
  "Skills",
  "Experience",
  "Publications",
  "Projects",
  "Education",
  "Certifications",
  "Achievements",
  "Extracurricular",
  "Volunteering",
];
