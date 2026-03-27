import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Instructional Assistant</h4>
                <h5>CASA — University of Houston</h5>
              </div>
              <h3>2021–2022</h3>
            </div>
            <p>
              Built and tuned a scalable .NET and Angular app for university
              exams with secure SQL data management; improved CASA assessment
              workflows using data mining and automation from legacy Excel-based
              processes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>RadioEpic — Cleveland Clinic</h5>
              </div>
              <h3>2023–2025</h3>
            </div>
            <p>
              High-availability radiology web apps on AWS Lambda and gRPC;
              event-driven pipelines with EventBridge, SNS/SQS, Lambda, Glue, and
              DynamoDB; Java and Node.js/TypeScript APIs; observability
              (CloudWatch, Prometheus, OpenTelemetry); IaC with CloudFormation,
              Terraform, and Ansible; PyTorch/TensorFlow models and ML rule
              engines in production.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer</h4>
                <h5>Cleveland Clinic — Radio Epic</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Generative AI clinical summarization with PyTorch and prompt
              engineering; real-time LLM inference with gRPC and AWS Lambda;
              red-teaming and safety evaluation (IndicBERT, BERTScore); A/B
              tests, failure analysis, and clinical terminology rule engines for
              reliable production ML.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
