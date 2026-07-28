import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Service Planner / Product Builder</p>
        <h1 className="hero__name">
          김한규
          <span className="hero__name-en">Hankyu Kim</span>
        </h1>
        <p className="hero__tagline">
          기획부터 개발·배포까지, AI를 활용해 직접 만드는 서비스기획자
        </p>
        <div className="hero__actions">
          <a className="hero__link hero__link--primary" href="#projects">
            프로젝트 보기
          </a>
          <a className="hero__link" href="#contact">
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
