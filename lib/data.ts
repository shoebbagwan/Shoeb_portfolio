export const profile = {
  name: "Shoeb Bagwan",
  role: "AI/ML Engineer",
  location: "Mumbai, India",
  email: "mohammedshoebbagwan@gmail.com",
  phone: "+91-8591780180",
  github: "https://github.com/shoebbagwan",
  githubHandle: "shoebbagwan",
  linkedin: "https://www.linkedin.com/in/shoeb-bagwan",
  linkedinHandle: "shoeb-bagwan",
  resumeFile: "/Shoeb_Bagwan_Resume.pdf",
  tagline:
    "I build AI systems and ship them as real, working products.",
  summary:
    "Final-year AI & ML engineer who ships complete, working systems rather than notebooks. My work spans Retrieval-Augmented Generation, audio signal processing, and full-stack ML products — built end to end, from data pipeline to deployed interface. AWS Academy certified in Cloud Foundations and Data Engineering, with active open-source contributions.",
};

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "C++", "SQL", "HTML", "CSS"],
  },
  {
    label: "AI / ML & NLP",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "ANNs",
      "Generative AI",
      "NLP",
      "RAG",
      "Scikit-learn",
      "LangChain",
      "Gemini API",
      "FAISS",
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["FastAPI", "React", "Node.js", "Pandas", "Librosa", "Streamlit", "Leaflet.js"],
  },
  {
    label: "Databases & Cloud",
    skills: ["PostgreSQL", "SQLite", "AWS", "REST APIs"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export const experience = [
  {
    role: "Artificial Intelligence & Machine Learning Intern",
    org: "Internship Studio",
    location: "Remote",
    period: "Dec 2025 — Jan 2026",
    points: [
      "Built an Artificial Neural Network (ANN) classifier in Python to identify Iris flower species from sepal and petal measurements, applying PCA for dimensionality reduction and achieving high classification accuracy.",
      "Worked the full ML lifecycle hands-on — data preprocessing, feature scaling, model training, and evaluation.",
    ],
  },
];

export const projects = [
  {
    index: "01",
    name: "RAG-Based PDF Chatbot",
    tagline: "Ask questions of a PDF and get answers that don't hallucinate.",
    description:
      "A Retrieval-Augmented Generation chatbot that answers strictly from the content of user-uploaded PDFs. Semantic search over embedded document chunks keeps every answer grounded in the source text instead of the model's imagination.",
    highlights: [
      "Semantic search over embedded chunks eliminates hallucinated answers",
      "Deployed on Streamlit; engineered around real API rate limits with batched processing",
      "Migrated embedding models mid-project without breaking the retrieval index",
    ],
    stack: ["Python", "LangChain", "Google Gemini", "FAISS", "Streamlit"],
    github: "https://github.com/shoebbagwan",
    featured: true,
  },
  {
    index: "02",
    name: "Vocal Metrics — Speech Emotion Recognition",
    tagline: "Reads emotion from how something is said, not what is said.",
    description:
      "A full-stack application that detects 8 distinct human emotions directly from raw audio waveforms, using acoustic signal properties rather than transcribed text.",
    highlights: [
      "Extracts MFCCs with Librosa for acoustic feature engineering",
      "PyTorch classification model served through a FastAPI backend",
      "React frontend supports both real-time and pre-recorded audio input",
    ],
    stack: ["Python", "PyTorch", "FastAPI", "React", "Librosa"],
    github: "https://github.com/shoebbagwan/vocal-metrics-SER",
    featured: true,
  },
  {
    index: "03",
    name: "ChargePath",
    tagline: "Finds an EV charging station before your battery becomes the problem.",
    description:
      "A full-stack web application that helps electric vehicle drivers locate nearby charging stations with live availability status on an interactive map.",
    highlights: [
      "Interactive mapping interface built with Leaflet.js",
      "Node.js backend serves real-time station data to the React frontend",
    ],
    stack: ["React", "Node.js", "Leaflet.js"],
    github: "https://github.com/shoebbagwan/chargepath",
    featured: false,
  },
  {
    index: "04",
    name: "AttireAI",
    tagline: "Outfit recommendations that account for your body type and the weather.",
    description:
      "A personal styling application that recommends outfits based on body type, local weather, and occasion, using a Scikit-learn recommendation model served through FastAPI.",
    highlights: [
      "Scikit-learn recommendation model served through a FastAPI backend",
      "SQLite data layer with a React frontend for end-to-end personalization",
    ],
    stack: ["React", "FastAPI", "Scikit-learn", "SQLite"],
    github: "https://github.com/shoebbagwan/ai-cloth-recommender",
    featured: false,
  },
];

export const openSource = [
  {
    repo: "django-email-learning",
    contribution: "Contributed docstrings to Django model classes",
    ref: "Merged PR #632",
  },
  {
    repo: "easypaydirect-mcp",
    contribution: "Documented query and response fields in tool documentation",
    ref: "PR #14",
  },
];

export const education = {
  degree: "Bachelor of Engineering, Computer Science (AI & ML)",
  school: "Theem College of Engineering, Mumbai",
  period: "2022 — 2026",
  score: "CGPA 6.6 / 10",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Database Management Systems",
    "Artificial Intelligence",
    "Cloud Computing",
  ],
};

export const certifications = [
  { name: "AWS Academy Cloud Foundations", date: "March 2025" },
  { name: "AWS Academy Data Engineering", date: "September 2025" },
  { name: "Green Skills and Artificial Intelligence", date: "Edunet Foundation" },
];

export const languages = ["English", "Hindi"];
