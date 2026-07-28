import { designTools, planningSkills } from "../../data/skills";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">역량</h2>

        <div className="skills__highlight">
          <p className="skills__highlight-eyebrow">AI 활용 개발</p>
          <h3 className="skills__highlight-title">
            Claude Code(CLI)로 기획자가 직접 개발하고 배포합니다
          </h3>
          <p className="skills__highlight-desc">
            Claude Code(CLI)를 활용해 React/Next.js 기반 서비스를 직접 개발하고 배포까지
            진행합니다. 지금 보고 계신 이 포트폴리오 사이트 역시 기획부터 개발, 배포까지
            같은 방식으로 만들어진 결과물입니다.
          </p>
        </div>

        <div className="skills__grid">
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
