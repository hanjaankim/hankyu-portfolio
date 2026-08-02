import "./Hero.css";

const FOCUS_ITEMS = [
  { label: "기획", caption: "사업·서비스 기획, PRD 작성부터 시작합니다" },
  { label: "개발", caption: "AI(Claude Code)로 직접 설계하고 구현합니다" },
  { label: "배포", caption: "프로덕션 배포까지 직접 총괄합니다" },
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

        <ul className="hero__focus">
          {FOCUS_ITEMS.map((item) => (
            <li className="hero__focus-item" key={item.label}>
              <p className="hero__focus-label">{item.label}</p>
              <p className="hero__focus-caption">{item.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
