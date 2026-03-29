import "./styles/Research.css";
import { publicUrl } from "../utils/publicUrl";

/** File: public/papers/Research-Paper.pdf */
const PAPER_PDF_HREF = publicUrl("papers/Research-Paper.pdf");

const Research = () => {
  return (
    <div className="research-section section-container" id="research">
      <div className="research-container">
        <h2 className="research-heading">Research Experience</h2>
        <p className="para research-body">
          I developed a multilingual pipeline to detect malicious prompts in
          Indian languages by translating English datasets using IndicBERT and
          validating quality with metrics like BERTScore. The project involved
          fine-tuning models such as mDeBERTa-v3 and XLM-RoBERTa, achieving a
          high classification accuracy of 92.53%. To further optimize
          performance, I experimented with parameter-efficient fine-tuning
          techniques including QLoRA and LoRA.
        </p>
        <div className="research-actions">
          <a
            className="paper-button"
            href={PAPER_PDF_HREF}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            <span className="paper-button-label">Paper</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Research;
