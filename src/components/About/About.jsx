import experience from "../../data/experience";
import useReveal from "../../hooks/useReveal";
import "./About.css";

function AboutItem({ item }) {
  const [ref, isVisible] = useReveal();

  return (
    <li
      ref={ref}
      className={`about__item reveal ${isVisible ? "reveal--visible" : ""}`}
    >
      <div className="about__item-period">{item.period}</div>
      <div className="about__item-body">
        <h3 className="about__item-org">{item.org}</h3>
        <p className="about__item-desc">{item.description}</p>
        <ul className="about__item-bullets">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">경력</h2>
        <p className="about__intro">
          다양한 산업 도메인에서 서비스기획 업무를 수행해왔고, 최근에는 AI 도구를 활용해
          프론트엔드 개발과 배포를 직접 해보며 역량을 넓혔습니다.
        </p>

        <ul className="about__timeline">
          {experience.map((item) => (
            <AboutItem item={item} key={item.org} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
