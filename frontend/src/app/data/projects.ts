export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    slug: "hydropower-portal",
    title: "Hydropower Portal",
    description: "Comprehensive web portal for managing hydropower projects",
    technologies: ["Python", "C++", "Django", "DRF", "PostgreSQL", "Pandas", "Numpy"],
    highlights: [
      "7 core modules including Dashboard Analysis, Financial Analysis",
      "Complex engineering and financial calculations",
      "Team leadership of 5 developers"
    ],
    image: "/images/projects/hydropower-portal.png",
    githubUrl: "https://gitlab.baezeni.net/",
    liveUrl: "https://tinfosportal.z23.web.core.windows.net/"
  },
  {
    slug: "bz-publish-ai-features",
    title: "BZ-Publish AI Features",
    description: "AI enhancements for financial platform",
    technologies: ["Python", "Django", "Prophet", "Selenium", "BeautifulSoup", "OpenAI API"],
    highlights: [
      "Time-series forecasting model",
      "AI-powered chatbot with OpenAI integration",
      "Automated data scraping system"
    ],
    image: "/images/projects/bz-publish.png",
    githubUrl: "https://gitlab.baezeni.net/",
    liveUrl: "https://www.bzpublish.com/"
  },
  {
    slug: "coal-document-processing",
    title: "Automated Coal Document Processing",
    description: "OCR system for automating data extraction from coal shipment documents",
    technologies: ["Python", "Tesseract OCR", "OpenCV", "pypdfium2", "SendGrid API", "Azure OCR"],
    highlights: [
      "OCR pipeline development",
      "Automated data extraction with regex",
      "Email notification system",
      "Significant improvement in processing speed"
    ],
    image: "/images/projects/coal-document-processing.png",
    githubUrl: "https://gitlab.baezeni.net/",
    liveUrl: "https://www.jawapower.co.id/"
  }
];
