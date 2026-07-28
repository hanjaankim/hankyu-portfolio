import contact from "../../data/contact";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">함께 이야기 나눠요</h2>
        <p className="contact__desc">
          새로운 프로젝트, 협업 제안 모두 환영합니다. 아래 채널로 편하게 연락해주세요.
        </p>

        <ul className="contact__list">
          <li className="contact__item">
            <span className="contact__label">Email</span>
            <a className="contact__value" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </li>
          <li className="contact__item">
            <span className="contact__label">LinkedIn</span>
            <a
              className="contact__value"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {contact.linkedin}
            </a>
          </li>
          <li className="contact__item">
            <span className="contact__label">GitHub</span>
            <a
              className="contact__value"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              {contact.github}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
