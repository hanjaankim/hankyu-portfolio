import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
      </div>

      <div className="hero__inner">
        <p className="hero__eyebrow">2026 · Service Planner</p>

        <div className="hero__display">
          <h1 className="hero__name-kr">김한규</h1>
          <p className="hero__name-en">Hankyu Kim</p>
        </div>

        <div className="hero__bottom">
          <p className="hero__tagline">
            기획부터 개발·배포까지, AI를 활용해 직접 만드는 서비스기획자
          </p>
          <p className="hero__meta">Portfolio · 2026</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
