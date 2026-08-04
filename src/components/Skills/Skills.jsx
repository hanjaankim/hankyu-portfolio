import { designTools, planningSkills } from "../../data/skills";
import useReveal from "../../hooks/useReveal";
import "./Skills.css";

function Skills() {
  const [highlightRef, highlightVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">역량</h2>

        <div
          ref={highlightRef}
          className={`skills__highlight reveal ${highlightVisible ? "reveal--visible" : ""}`}
        >
          <p className="skills__highlight-eyebrow">AI 활용 개발</p>
          <h3 className="skills__highlight-title">
            AI 에이전트로 기획자가 직접 기획·디자인·개발까지 수행합니다
          </h3>
          <p className="skills__highlight-desc">
            AI 코딩 에이전트(Claude Code 등)를 활용해 React/Next.js 기반 서비스를 기획부터
            디자인, 개발, 배포까지 직접 진행합니다. 지금 보고 계신 이 포트폴리오 사이트 역시
            AI 에이전트와 협업해 기획·디자인·개발·배포까지 완성한 결과물입니다.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`skills__grid reveal ${gridVisible ? "reveal--visible" : ""}`}
        >
          <div className="skills__group">
            <h3 className="skills__group-title">디자인 툴</h3>
            <ul className="skills__tags">
              {designTools.map((tool) => (
                <li key={tool} className="skills__tag">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills__group">
            <h3 className="skills__group-title">기획 / PM</h3>
            <ul className="skills__tags">
              {planningSkills.map((skill) => (
                <li key={skill} className="skills__tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
