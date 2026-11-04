import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiJupyter,
  SiMysql,
  SiPandas,
  SiPython,
  SiScikitlearn,
  SiPostgresql,
  SiDjango,
  SiNumpy,
  SiFlask,
  SiDocker,
  SiStreamlit,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiLaravel,
  SiPhp,
  SiTailwindcss,
  SiGoogle,
  SiSqlite,
} from "react-icons/si";
import { TbChartBar, TbDatabase, TbBrain, TbShieldLock, TbRobot, TbPackage } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Project
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
  scikitlearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  jupyter: {
    title: "Jupyter Notebook",
    bg: "black",
    fg: "white",
    icon: <SiJupyter />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <SiDjango />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  nodejs: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <SiNodedotjs />,
  },
  express: {
    title: "Express.js",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  javascript: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss />,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: <SiLaravel />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <FaJava />,
  },
  geminiApi: {
    title: "Gemini API",
    bg: "black",
    fg: "white",
    icon: <SiGoogle />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
  dataViz: {
    title: "Data Visualization",
    bg: "black",
    fg: "white",
    icon: <TbChartBar />,
  },
  database: {
    title: "Database Design",
    bg: "black",
    fg: "white",
    icon: <TbDatabase />,
  },
  ml: {
    title: "Machine Learning",
    bg: "black",
    fg: "white",
    icon: <TbBrain />,
  },
  security: {
    title: "OWASP Security",
    bg: "black",
    fg: "white",
    icon: <TbShieldLock />,
  },
  rag: {
    title: "RAG / LLM",
    bg: "black",
    fg: "white",
    icon: <TbRobot />,
  },
  xgboost: {
    title: "XGBoost",
    bg: "black",
    fg: "white",
    icon: <TbPackage />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  // =====================================================
  // 1. VeriDerma AI — Enterprise RAG Chatbot
  // =====================================================
  {
    id: "veriderma-ai",
    category: "AI / LLM",
    title: "VeriDerma AI — Skincare RAG Chatbot",
    src: `${BASE_PATH}/veriderma-ai/landing.svg`,
    screenshots: ["landing.png"],
    github: "https://github.com/SofiaAzzahra09/Chatbot-Toko-Skincare",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.rag,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.security,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Enterprise AI Chatbot with RAG & LLM
          </TypographyP>
          <TypographyP className="font-mono ">
            VeriDerma AI is an enterprise-grade intelligent customer support chatbot
            for XYZ Skincare, powered by Retrieval-Augmented Generation (RAG) and
            Large Language Models. It provides real-time product recommendations,
            order tracking, and skincare consultation with 28 automated tests and
            OWASP-compliant security.
          </TypographyP>
          <ProjectsLinks repo="https://github.com/SofiaAzzahra09/Chatbot-Toko-Skincare" />
          <TypographyH3 className="my-4 mt-8">RAG Pipeline Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Built a complete Retrieval-Augmented Generation pipeline with vector
            similarity search across 9 knowledge base documents, enabling the chatbot
            to answer product questions with factual accuracy instead of hallucinating.
          </p>
          <TypographyH3 className="my-4 mt-8">Enterprise Security (OWASP)</TypographyH3>
          <p className="font-mono mb-2">
            Implemented production-grade security including rate limiting, input
            sanitization, CORS protection, and comprehensive error handling following
            OWASP Top 10 guidelines.
          </p>
          <TypographyH3 className="my-4 mt-8">Full Test Suite</TypographyH3>
          <p className="font-mono mb-2">
            28 automated unit tests covering API endpoints, RAG retrieval accuracy,
            security middleware, and edge cases — ensuring reliable deployments
            with CI/CD-ready test infrastructure.
          </p>
        </div>
      );
    },
  },

  // =====================================================
  // 2. Customer Churn Intelligence Platform
  // =====================================================
  {
    id: "customer-churn",
    category: "ML / Data Science",
    title: "Customer Churn Intelligence Platform",
    src: `${BASE_PATH}/customer-churn/landing.svg`,
    screenshots: ["landing.png"],
    github: "https://github.com/SofiaAzzahra09/Uji-Customer-Churn-Platform",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.streamlit,
        PROJECT_SKILLS.pandas,
      ],
      backend: [
        PROJECT_SKILLS.scikitlearn,
        PROJECT_SKILLS.ml,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.security,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            CRISP-DM MLOps Customer Churn Predictor
          </TypographyP>
          <TypographyP className="font-mono ">
            An enterprise ML platform that predicts customer churn using the CRISP-DM
            methodology with Random Forest, Gradient Boosting, and Logistic Regression.
            Features interactive Streamlit dashboards, automated model evaluation,
            and 12 passing unit tests.
          </TypographyP>
          <ProjectsLinks repo="https://github.com/SofiaAzzahra09/Uji-Customer-Churn-Platform" />
          <TypographyH3 className="my-4 mt-8">Multi-Model Comparison</TypographyH3>
          <p className="font-mono mb-2">
            Trains and compares 3 ML algorithms with cross-validation, hyperparameter
            tuning, and comprehensive metrics (accuracy, precision, recall, F1, AUC-ROC)
            to select the best-performing model.
          </p>
          <TypographyH3 className="my-4 mt-8">Interactive Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Streamlit-powered analytics dashboard with real-time churn predictions,
            feature importance visualization, customer segmentation charts, and
            exportable reports.
          </p>
          <TypographyH3 className="my-4 mt-8">Production-Ready Pipeline</TypographyH3>
          <p className="font-mono mb-2">
            Complete MLOps pipeline with data validation, feature engineering,
            model versioning, Docker containerization, and automated testing
            infrastructure.
          </p>
        </div>
      );
    },
  },

  // =====================================================
  // 3. Supply Chain Risk Intelligence
  // =====================================================
  {
    id: "supply-chain",
    category: "AI / Analytics",
    title: "Supply Chain Risk Intelligence",
    src: `${BASE_PATH}/supply-chain/landing.svg`,
    screenshots: ["landing.png"],
    github: "https://github.com/SofiaAzzahra09/Supply-Chain-Risk-Intelligence",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.ml,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.security,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Supply Chain Forecasting & Risk Assessment
          </TypographyP>
          <TypographyP className="font-mono ">
            An enterprise intelligence platform for supply chain risk assessment
            and demand forecasting. Uses ML models to predict disruptions, optimize
            inventory, and provide real-time risk scoring across the entire supply
            chain network — with 22 automated tests.
          </TypographyP>
          <ProjectsLinks repo="https://github.com/SofiaAzzahra09/Supply-Chain-Risk-Intelligence" />
          <TypographyH3 className="my-4 mt-8">Demand Forecasting Engine</TypographyH3>
          <p className="font-mono mb-2">
            Time-series forecasting using multiple ML models (ARIMA, Prophet,
            XGBoost) to predict demand patterns, seasonal trends, and anomalies
            across product categories.
          </p>
          <TypographyH3 className="my-4 mt-8">Risk Scoring System</TypographyH3>
          <p className="font-mono mb-2">
            Real-time risk assessment engine that scores suppliers, routes, and
            inventory levels using weighted multi-factor analysis with configurable
            thresholds and alert triggers.
          </p>
          <TypographyH3 className="my-4 mt-8">Enterprise Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Interactive analytics dashboard with supply chain network visualization,
            KPI tracking, drill-down reports, and executive summary generation.
          </p>
        </div>
      );
    },
  },

  // =====================================================
  // 4. Creatroka — Book Demand Prediction & Stock Optimization
  // =====================================================
  {
    id: "creatroka",
    category: "ML / Web App",
    title: "Creatroka — Book Stock Optimizer",
    src: `${BASE_PATH}/creatroka/landing.svg`,
    screenshots: ["landing.png"],
    github: "https://github.com/SofiaAzzahra09/Creatroka",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.xgboost,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.ml,
        PROJECT_SKILLS.dataViz,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Intelligent Book Demand Prediction & Stock Optimization
          </TypographyP>
          <TypographyP className="font-mono ">
            Creatroka is a full-stack web application that predicts book demand
            and optimizes inventory stock using XGBoost machine learning models.
            Features a complete pipeline from data preparation to model management,
            with an interactive Flask-powered dashboard.
          </TypographyP>
          <ProjectsLinks repo="https://github.com/SofiaAzzahra09/Creatroka" />
          <TypographyH3 className="my-4 mt-8">XGBoost Prediction Engine</TypographyH3>
          <p className="font-mono mb-2">
            Built an XGBoost regression model with feature engineering pipeline
            to predict book demand patterns, enabling proactive stock replenishment
            and reducing overstock/understock scenarios.
          </p>
          <TypographyH3 className="my-4 mt-8">Stock Optimization Algorithm</TypographyH3>
          <p className="font-mono mb-2">
            Implements safety stock calculation with configurable lead time and
            service level parameters, automatic critical/low stock alerting, and
            reorder point optimization.
          </p>
          <TypographyH3 className="my-4 mt-8">Model Registry & Management</TypographyH3>
          <p className="font-mono mb-2">
            Complete model lifecycle management with versioning, performance tracking,
            and A/B comparison capabilities through an intuitive web interface.
          </p>
        </div>
      );
    },
  },

  // =====================================================
  // 5. Cosmic Buddy — Gemini AI Chatbot
  // =====================================================
  {
    id: "cosmic-buddy",
    category: "AI / Web App",
    title: "Cosmic Buddy — Gemini AI Chatbot",
    src: `${BASE_PATH}/cosmic-buddy/landing.svg`,
    screenshots: ["landing.png"],
    github: "https://github.com/SofiaAzzahra09/gemini-chatbot-api",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.nodejs,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.geminiApi,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Bilingual AI Chatbot with Google Gemini
          </TypographyP>
          <TypographyP className="font-mono ">
            Cosmic Buddy is a responsive, bilingual AI chatbot powered by Google
            Gemini 2.5 Flash. It automatically detects and responds in Indonesian
            or English, with a beautiful cosmic-themed UI, conversation history
            management, and natural dialogue capabilities.
          </TypographyP>
          <ProjectsLinks repo="https://github.com/SofiaAzzahra09/gemini-chatbot-api" />
          <TypographyH3 className="my-4 mt-8">Gemini API Integration</TypographyH3>
          <p className="font-mono mb-2">
            Integrates Google Gemini 2.5 Flash with custom system instructions,
            conversation context management, and automatic language detection for
            natural bilingual conversations.
          </p>
          <TypographyH3 className="my-4 mt-8">Cosmic UI Design</TypographyH3>
          <p className="font-mono mb-2">
            Beautiful space-themed interface with animated backgrounds, smooth
            transitions, splash screen, and fully responsive design from 320px
            mobile to 1920px+ desktop screens.
          </p>
        </div>
      );
    },
  },

  // =====================================================
  // 6. Garment Worker Productivity Prediction
  // =====================================================
  {
    id: "garment-productivity",
    category: "Data Science",
    title: "Garment Worker Productivity Prediction",
    src: `${BASE_PATH}/garment-productivity/landing.png`,
    screenshots: ["landing.png"],
    github: "https://github.com/SofiaAzzahra09/Capstone_Project-GarmentProductivity",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.jupyter,
      ],
      backend: [
        PROJECT_SKILLS.scikitlearn,
        PROJECT_SKILLS.dataViz,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Predicting Worker Productivity with Machine Learning
          </TypographyP>
          <TypographyP className="font-mono ">
            This capstone project for the MSIB Data Science program at Cokop
            focused on building end-to-end predictive regression models using
            real-world garment industry datasets. The goal was to identify key
            factors driving worker productivity and provide actionable insights
            for business decision-making.
          </TypographyP>
          <ProjectsLinks repo="https://github.com/SofiaAzzahra09/Capstone_Project-GarmentProductivity" />
          <TypographyH3 className="my-4 mt-8">Data Processing & EDA</TypographyH3>
          <p className="font-mono mb-2">
            Performed comprehensive data cleaning, handling missing values and
            outliers. Conducted exploratory data analysis to uncover patterns
            and correlations within the productivity dataset, identifying key
            features such as targeted productivity, overtime, and incentives.
          </p>
          <TypographyH3 className="my-4 mt-8">Feature Engineering</TypographyH3>
          <p className="font-mono mb-2">
            Applied advanced feature engineering techniques including encoding
            categorical variables, creating interaction features, and
            normalizing numerical features to improve model performance.
          </p>
          <TypographyH3 className="my-4 mt-8">Predictive Modeling</TypographyH3>
          <p className="font-mono mb-2">
            Built and compared multiple regression models including Linear
            Regression, Random Forest, and Gradient Boosting. Tuned
            hyperparameters using cross-validation to achieve optimal
            prediction accuracy.
          </p>
        </div>
      );
    },
  },

  // =====================================================
  // 7. SIRKEL — Student Class Recommendation
  // =====================================================
  {
    id: "sirkel",
    category: "Web Application",
    title: "SIRKEL — Student Class Recommendation",
    src: `${BASE_PATH}/sirkel/landing.png`,
    screenshots: ["landing.png"],
    github: "https://github.com/SofiaAzzahra09/SIRKEL_Rekom-Mapel",
    skills: {
      frontend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.database,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            SIRKEL — Smart Class Assignment System
          </TypographyP>
          <TypographyP className="font-mono ">
            SIRKEL (Sistem Rekomendasi Kelas) is an intelligent web-based
            system developed during Kerja Praktek that automatically recommends
            and assigns Grade XI classes based on students&apos; academic scores
            and elective subject preferences. Built with Laravel and Tailwind CSS.
          </TypographyP>
          <ProjectsLinks repo="https://github.com/SofiaAzzahra09/SIRKEL_Rekom-Mapel" />
          <TypographyH3 className="my-4 mt-8">
            Intelligent Recommendation Engine
          </TypographyH3>
          <p className="font-mono mb-2">
            Designed an algorithmic system that analyzes student academic
            performance data and preference inputs to generate optimal class
            assignments, ensuring balanced distribution across available classes.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Database Architecture
          </TypographyH3>
          <p className="font-mono mb-2">
            Designed and implemented a normalized relational database schema
            to manage student records, academic scores, class assignments, and
            elective preferences with data integrity constraints.
          </p>
        </div>
      );
    },
  },

  // =====================================================
  // 8. Aplikasi Sewa Kost Desktop
  // =====================================================
  {
    id: "sewa-kost",
    category: "Desktop App",
    title: "Aplikasi Sewa Kost Desktop",
    src: `${BASE_PATH}/sewa-kost/landing.svg`,
    screenshots: ["landing.png"],
    github: "https://github.com/SofiaAzzahra09/Apk_SewaKostDesktop",
    skills: {
      frontend: [
        PROJECT_SKILLS.java,
      ],
      backend: [
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.database,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Java Desktop Application for Kost Rental Management
          </TypographyP>
          <TypographyP className="font-mono ">
            A comprehensive Java Swing desktop application for managing boarding
            house (kost) rentals. Features tenant management, room allocation,
            payment tracking, rental reports, and admin dashboard — built with
            NetBeans IDE and MySQL database.
          </TypographyP>
          <ProjectsLinks repo="https://github.com/SofiaAzzahra09/Apk_SewaKostDesktop" />
          <TypographyH3 className="my-4 mt-8">Tenant & Room Management</TypographyH3>
          <p className="font-mono mb-2">
            Complete CRUD operations for tenant data, room inventory, and rental
            contracts with validation and search functionality.
          </p>
          <TypographyH3 className="my-4 mt-8">Payment & Reporting</TypographyH3>
          <p className="font-mono mb-2">
            Automated payment tracking, rental history, and financial reporting
            with printable invoice generation for landlords.
          </p>
        </div>
      );
    },
  },

  // =====================================================
  // 9. MiniMarket POS System
  // =====================================================
  {
    id: "minimarket",
    category: "Web Application",
    title: "MiniMarket — Point of Sale System",
    src: `${BASE_PATH}/minimarket/landing.svg`,
    screenshots: ["landing.png"],
    github: "https://github.com/SofiaAzzahra09/MiniMarket_PWL5",
    skills: {
      frontend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.database,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-Stack Point of Sale & Inventory System
          </TypographyP>
          <TypographyP className="font-mono ">
            MiniMarket is a complete point-of-sale (POS) web application built
            with Laravel. Features multi-branch product management, stock tracking,
            transaction processing, user authentication, and admin dashboard with
            Tailwind CSS styling.
          </TypographyP>
          <ProjectsLinks repo="https://github.com/SofiaAzzahra09/MiniMarket_PWL5" />
          <TypographyH3 className="my-4 mt-8">Multi-Branch Management</TypographyH3>
          <p className="font-mono mb-2">
            Supports multiple store branches with independent stock tracking,
            product catalogs, and branch-specific transaction reports.
          </p>
          <TypographyH3 className="my-4 mt-8">Transaction Processing</TypographyH3>
          <p className="font-mono mb-2">
            Complete POS workflow with barcode-ready product lookup, cart management,
            payment processing, and receipt generation with transaction history.
          </p>
        </div>
      );
    },
  },
];
export default projects;
