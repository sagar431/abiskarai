export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "autonomous-research-agent",
    title: "AI Research Assistant",
    tagline: "Automated system that researches topics and generates comprehensive reports.",
    description:
      "Built an AI system that automatically researches any topic, reads through dozens of sources, and creates detailed reports with citations—saving teams hours of manual research work.",
    highlights: [
      "Reads and analyzes 50+ sources per topic automatically",
      "Generates structured reports with verified citations",
      "Completes in 3-5 minutes what would take hours manually",
    ],
    techStack: [
      "Python",
      "LangChain",
      "NetworkX",
      "FastAPI",
      "MCP Protocol",
      "OpenAI GPT-4",
      "Vector DB (Pinecone)",
    ],
    metrics: [
      { label: "Sources analyzed", value: "50+ per query" },
      { label: "Time to report", value: "3-5 minutes" },
      { label: "Accuracy rate", value: "94%" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yourusername/autonomous-research-agent",
      },
      {
        label: "Demo",
        href: "https://research-agent-demo.vercel.app",
      },
    ],
  },
  {
    slug: "multimodal-gemma-270m",
    title: "Visual AI Assistant",
    tagline: "AI that understands images and answers questions about them.",
    description:
      "Created a lightweight AI assistant that can look at images and answer questions about what it sees—useful for quality control, inventory management, and customer support.",
    highlights: [
      "Processes images and text together for accurate responses",
      "Runs efficiently on standard hardware (no expensive GPUs needed)",
      "Fast deployment with easy-to-use interface for testing",
    ],
    techStack: [
      "PyTorch",
      "Lightning",
      "Transformers",
      "LoRA",
      "CLIP",
      "Hugging Face",
    ],
    metrics: [
      { label: "Model size", value: "270M parameters" },
      { label: "Training cost", value: "~12 GPU hours" },
      { label: "Response time", value: "<2 seconds" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sagar431/multimodal-gemma-270m",
      },
      {
        label: "Try it yourself",
        href: "https://huggingface.co/sagar007/multimodal-gemma-270m-llava",
      },
    ],
  },
  {
    slug: "mlops-platform",
    title: "End-to-End MLOps Platform",
    tagline: "Complete system for training, deploying, and monitoring AI models at scale.",
    description:
      "Built a production MLOps platform that automates the entire AI lifecycle—from training models to deploying them in production with automatic monitoring and retraining when performance drops.",
    highlights: [
      "Automated model training pipelines that run on schedule or trigger-based",
      "One-click deployment to production with automatic rollback if issues detected",
      "Real-time monitoring dashboards showing model accuracy and performance",
    ],
    techStack: [
      "Kubernetes",
      "MLflow",
      "Airflow",
      "Docker",
      "Prometheus",
      "Grafana",
      "AWS/GCP",
    ],
    metrics: [
      { label: "Models deployed", value: "50+ models" },
      { label: "Deployment time", value: "From days to minutes" },
      { label: "Uptime", value: "99.9%" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yourusername/mlops-platform",
      },
      {
        label: "Case Study",
        href: "https://example.com/mlops-case-study",
      },
    ],
  },
  {
    slug: "conversational-rag-agent",
    title: "Smart Knowledge Assistant",
    tagline: "AI that instantly answers questions from your company's documents.",
    description:
      "Built an AI assistant that searches through your entire knowledge base (manuals, docs, wikis) and provides accurate answers with source citations—like having an expert available 24/7.",
    highlights: [
      "Searches 500K+ documents instantly to find relevant answers",
      "Remembers conversation context for natural follow-up questions",
      "Includes security features: access control and audit logging",
    ],
    techStack: [
      "LangChain",
      "Elasticsearch",
      "BGE-M3 Embeddings",
      "LLaMA-3-70B",
      "FastAPI",
      "Redis",
      "PostgreSQL",
    ],
    metrics: [
      { label: "Documents indexed", value: "500K+" },
      { label: "Answer accuracy", value: "89%" },
      { label: "Active users", value: "5,000+" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yourusername/conversational-rag",
      },
      {
        label: "Case Study",
        href: "https://example.com/case-study",
      },
    ],
  },
  {
    slug: "ci-cd-ml-pipeline",
    title: "Automated AI Testing & Deployment",
    tagline: "CI/CD system that automatically tests and deploys AI models safely.",
    description:
      "Created an automated pipeline that tests every AI model change before deployment—catching bugs early and ensuring only high-quality models reach production.",
    highlights: [
      "Automated testing suite that validates model accuracy before deployment",
      "Gradual rollout system (A/B testing) to minimize risk",
      "Automatic alerts when model performance degrades in production",
    ],
    techStack: [
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Pytest",
      "Great Expectations",
      "Terraform",
    ],
    metrics: [
      { label: "Deployment frequency", value: "10x increase" },
      { label: "Bug detection", value: "95% caught pre-prod" },
      { label: "Rollback time", value: "<5 minutes" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yourusername/ml-cicd-pipeline",
      },
      {
        label: "Documentation",
        href: "https://docs.example.com/ml-cicd",
      },
    ],
  },
  {
    slug: "model-monitoring-system",
    title: "AI Performance Monitoring",
    tagline: "Real-time system that tracks AI model health and alerts on issues.",
    description:
      "Built a monitoring system that watches AI models in production 24/7—detecting accuracy drops, data drift, and performance issues before they impact customers.",
    highlights: [
      "Automatic detection of model degradation and data quality issues",
      "Custom dashboards showing real-time metrics for business stakeholders",
      "Integration with Slack/PagerDuty for instant alerts on critical issues",
    ],
    techStack: [
      "Prometheus",
      "Grafana",
      "Evidently AI",
      "Python",
      "PostgreSQL",
      "Redis",
    ],
    metrics: [
      { label: "Models monitored", value: "100+ models" },
      { label: "Issue detection", value: "Average 30min faster" },
      { label: "Downtime prevented", value: "40+ incidents" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yourusername/ml-monitoring",
      },
      {
        label: "Live Demo",
        href: "https://monitoring-demo.example.com",
      },
    ],
  },
];
