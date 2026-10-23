import { useEffect, useState } from "react";
import defaultProjects from "../data/projects";
import experience from "../data/experience";
import { designTools, planningSkills } from "../data/skills";
import contact from "../data/contact";
import Contribution from "../components/Projects/Contribution";
import ProjectStats from "../components/Projects/ProjectStats";
import "./Print.css";

/**
 * A4 document version of the portfolio for companies that only accept PDF.
 * Rendered at /print (or /p/<slug>/print for a company variant) and saved
 * with the browser's print-to-PDF. Everything the web page hides behind
 * accordions, carousels and the lightbox is laid out flat here: one project
 * per page, all images visible at a fixed, legible size.
 */

// Source PNGs are screen-resolution captures (~15MB total), which makes the
// PDF too heavy for most job-site upload limits. Re-encode each image as a
// downscaled JPEG on a white background before it is printed.
const PRINT_IMAGE_MAX_SIDE = 1600;

function PrintImage({ item }) {
  const [compressed, setCompressed] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(
        1,
        PRINT_IMAGE_MAX_SIDE / Math.max(image.naturalWidth, image.naturalHeight)
      );
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.naturalWidth * scale);
      canvas.height = Math.round(image.naturalHeight * scale);
      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      setCompressed(canvas.toDataURL("image/jpeg", 0.82));
    };
    image.src = item.src;
  }, [item.src]);

  return (
    <img
      src={compressed ?? undefined}
      alt={item.label}
      style={{ aspectRatio: item.ratio }}
    />
  );
}

function PrintImages({ type, items, showCaption = true }) {
  if (!items?.length) return null;
  return (
    <div className={`print-images print-images--${type}`}>
      {items.map((item) => (
        <figure className="print-images__item" key={item.label}>
          <PrintImage item={item} />
          {showCaption && <figcaption>{item.label}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function PrintImageGroup({ group }) {
  return (
    <section className="print-block print-block--images">
      <h4 className="print-block__title">{group.title}</h4>
      {group.type === "group" ? (
        group.sections.map((section) => (
          <div className="print-subgroup" key={section.subtitle}>
            <p className="print-subgroup__title">{section.subtitle}</p>
            <PrintImages {...section} />
          </div>
        ))
      ) : (
        <PrintImages {...group} />
      )}
    </section>
  );
}

function PrintProject({ project, index, display }) {
  const links = [
    project.url && { label: project.url, href: `https://${project.url}` },
    project.appLinks?.ios && { label: "App Store", href: project.appLinks.ios },
    project.appLinks?.android && { label: "Google Play", href: project.appLinks.android },
  ].filter(Boolean);

  return (
    <article className="print-page print-project">
      <header className="print-project__header">
        <p className="print-project__index">Project {String(index + 1).padStart(2, "0")}</p>
        <h2 className="print-project__title">{project.title}</h2>
        <p className="print-project__meta">{project.period}</p>
        <p className="print-project__summary">{project.summary}</p>
        {links.length > 0 && (
          <p className="print-project__links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </p>
        )}
      </header>

      {display.goal && project.goal && (
        <section className="print-block">
          <h4 className="print-block__title">목표</h4>
          <p className="print-text print-text--strong">{project.goal}</p>
        </section>
      )}

      {project.background && (
        <section className="print-block">
          <h4 className="print-block__title">배경</h4>
          <p className="print-text">{project.background}</p>
        </section>
      )}

      <section className="print-block">
        <h4 className="print-block__title">담당 역할</h4>
        <div className="print-roles">
          {project.roleGroups?.map((group) => (
            <div className="print-roles__group" key={group.category}>
              <p className="print-roles__category">{group.category}</p>
              <ul className="print-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {display.contribution && <Contribution items={project.contribution} />}

      {(project.outcome || project.expectedEffect) && (
        <section className="print-block print-block--outcome">
          <h4 className="print-block__title">{project.outcome ? "성과" : "기대효과"}</h4>
          {Array.isArray(project.outcome) ? (
            <ul className="print-list print-list--outcome">
              {project.outcome.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : (
            <p className="print-text print-text--outcome">
              {project.outcome || project.expectedEffect}
            </p>
          )}
        </section>
      )}

      <ProjectStats stats={project.stats} />

      {project.imageGroups?.map((group) => (
        <PrintImageGroup group={group} key={group.title} />
      ))}
    </article>
  );
}

function PrintPortfolio({ projects = defaultProjects, display = {} }) {
  return (
    <div className="print">
      <section className="print-page print-cover">
        <p className="print-cover__eyebrow">Portfolio · 2026 · Service Planner</p>
        <div>
          <h1 className="print-cover__name">김한규</h1>
          <p className="print-cover__name-en">Hankyu Kim</p>
        </div>
        <p className="print-cover__tagline">
          기획부터 개발·배포까지, AI를 활용해 직접 만드는 서비스기획자
        </p>
        <dl className="print-cover__contact">
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </dd>
          <dt>Web</dt>
          <dd>
            <a href="https://hankyu-portfolio.vercel.app">hankyu-portfolio.vercel.app</a>
          </dd>
        </dl>
      </section>

      <section className="print-page">
        <h2 className="print-section-title">경력</h2>
        <p className="print-text">
          다양한 산업 도메인에서 서비스기획 업무를 수행해왔고, 최근에는 AI 도구를 활용해
          프론트엔드 개발과 배포를 직접 해보며 역량을 넓혔습니다.
        </p>
        <ul className="print-timeline">
          {experience.map((item) => (
            <li className="print-timeline__item" key={item.org}>
              <p className="print-timeline__period">{item.period}</p>
              <div>
                <p className="print-timeline__org">{item.org}</p>
                <p className="print-timeline__desc">{item.description}</p>
                <ul className="print-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className="print-keep">
          <h2 className="print-section-title print-section-title--spaced">역량</h2>
          <div className="print-highlight">
            <p className="print-highlight__title">AI 에이전트로 기획자가 직접 기획·디자인·개발까지 수행합니다</p>
            <p className="print-text">
              AI 코딩 에이전트(Claude Code 등)를 활용해 React/Next.js 기반 서비스를 기획부터 디자인,
              개발, 배포까지 직접 진행합니다. 이 포트폴리오 웹사이트 역시 AI 에이전트와 협업해
              완성한 결과물입니다.
            </p>
          </div>
          <div className="print-skills">
            <div>
              <p className="print-roles__category">기획 / PM</p>
              <p className="print-tags">
                {planningSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </p>
            </div>
            <div>
              <p className="print-roles__category">디자인 툴</p>
              <p className="print-tags">
                {designTools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="print-page">
        <h2 className="print-section-title">프로젝트</h2>
        <ol className="print-index">
          {projects.map((project, index) => (
            <li key={project.id}>
              <span className="print-index__num">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="print-index__title">{project.title}</span>
                <span className="print-index__summary">{project.summary}</span>
              </span>
              <span className="print-index__period">{project.period}</span>
            </li>
          ))}
        </ol>
      </section>

      {projects.map((project, index) => (
        <PrintProject project={project} index={index} display={display} key={project.id} />
      ))}
    </div>
  );
}

export default PrintPortfolio;
