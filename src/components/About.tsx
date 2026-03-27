import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          ML engineer and software developer with 3+ years building
          high-performance ML platforms and generative AI for enterprise
          healthcare. I have shipped LLM-powered clinical summarization that cut
          documentation time by about 60% while keeping strict SLA and HIPAA
          requirements, and I design cloud-native systems for real-time
          inference with PyTorch, TensorFlow, and AWS (including gRPC and
          Kubernetes-backed pipelines). Currently pursuing an Executive PhD in
          AI (University of Cumberland); M.S. Data Science (University of
          Houston); B.Tech CSE (Kakatiya University).
        </p>
        <p className="para">
          Research: &ldquo;Malicious Prompt Detection in Multi-Indian
          Languages&rdquo; &mdash; IEEE CIML, March 2026. Multilingual
          detection with IndicBERT, XLM-RoBERTa, mDeBERTa-v3, and rigorous
          translation evaluation (chrF++, BLEU, METEOR, BERTScore).
        </p>
        <p className="para">
          Certifications: NVIDIA Certified Associate &mdash; Generative AI and
          LLMs; AWS Certified Cloud Practitioner; AWS Certified Machine
          Learning Engineer (see Credly links in Contact).
        </p>
      </div>
    </div>
  );
};

export default About;
