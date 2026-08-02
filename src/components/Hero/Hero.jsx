import "./Hero.css";

const FOCUS_ITEMS = [
  { label: "기획", caption: "사업·서비스 기획, PRD 작성부터 시작합니다" },
  { label: "운영", caption: "론칭 이후 마케팅·그로스까지 이어갑니다" },
];

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__intro">
          <p className="hero__eyebrow">Service Planner / Product Builder</p>
          <h1 className="hero__name">
            김한규
            <span className="hero__name-en">Hankyu Kim</span>
          </h1>
          <p className="hero__tagline">
            기획부터 개발·배포까지, AI를 활용해 직접 만드는 서비스기획자
          </p>
        </div>

        <div className="hero__focus-wrap">
          <ul className="hero__focus">
            {FOCUS_ITEMS.map((item) => (
              <li className="hero__focus-item" key={item.label}>
                <p className="hero__focus-label">{item.label}</p>
                <p className="hero__focus-caption">{item.caption}</p>
              </li>
            ))}
          </ul>

          <p className="hero__focus-note">
            + AI(Claude Code)를 활용해 개발·배포까지 직접 진행합니다
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
