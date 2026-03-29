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
                <h4>Machine Learning Engineer</h4>
                <h5>Cleveland Clinic</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Architecting generative AI systems and high-throughput inference
              pipelines to transform clinical workflows and documentation with
              production-grade reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Cleveland Clinic</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built high-availability cloud infrastructure and event-driven data
              pipelines, optimizing backend scalability and migrating legacy
              systems to modern NoSQL architectures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Instructional Assistant</h4>
                <h5>CASA – University of Houston</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Optimized full-stack applications and assessment workflows for
              high-traffic university systems, focusing on performance tuning and
              secure data management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
