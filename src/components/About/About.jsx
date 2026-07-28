import experience from "../../data/experience";
import "./About.css";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">기획하고, 직접 만듭니다</h2>
        <p className="about__intro">
          서비스 기획자로 커리어를 시작해 최근에는 AI 도구를 활용해 프론트엔드 개발과
          배포까지 직접 수행하고 있습니다. 아이디어를 사업/서비스 기획으로 구체화하고,
          외주 개발사 운영과 QA 체계 구축을 거쳐 실제 론칭까지 이끄는 과정을 반복해왔습니다.
        </p>

        <ul className="about__timeline">
          {experience.map((item) => (
            <li className="about__item" key={`${item.org}-${item.role}`}>
              <div className="about__item-period">{item.period}</div>
              <div className="about__item-body">
                <h3 className="about__item-org">{item.org}</h3>
                <p className="about__item-role">{item.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
