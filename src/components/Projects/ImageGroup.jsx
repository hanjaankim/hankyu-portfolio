import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import "./ImageGroup.css";

/**
 * Renders one labeled group of project images. `type` picks the layout:
 * - "screens": product screens — horizontally scrollable, fixed height so
 *   phone screenshots and wide web screenshots sit at a comparable visual
 *   weight. `framed` adds a phone-mockup border for raw UI crops that don't
 *   already include one; skip it when the source image is already a
 *   composed mockup (status bar, device chrome, etc. baked in).
 * - "artifacts": planning output (IA, wireframes, spec docs) — a legible
 *   grid, deliberately not shrunk small; these are evidence of process,
 *   not filler. `showCaption` defaults on since these usually need a label,
 *   but can be turned off for interchangeable examples of the same
 *   document type.
 * - "wide": a single large reference (diagrams, gantt charts, admin screens)
 * - "ops": mixed operational material (posters, docs) — plain grid
 * - "group": wraps several sub-sections in one bordered container so they
 *   read as one deliverable set (e.g. "structure design" + "schedule")
 *   instead of separate unrelated blocks
 */
function ImageGroup({ title, type, items, framed = false, showCaption = true, sections }) {
  if (type === "group") {
    if (!sections || sections.length === 0) return null;
    return (
      <div className="project-card__block">
        {title && <h4 className="project-card__block-title">{title}</h4>}
        <div className="image-group-set">
          {sections.map((section) => (
            <div className="image-group-set__section" key={section.subtitle}>
              <p className="image-group-set__subtitle">{section.subtitle}</p>
              <ImageGroup
                type={section.type}
                items={section.items}
                framed={section.framed}
                showCaption={section.showCaption}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!items || items.length === 0) return null;

  return (
    <div className="project-card__block">
      {title && <h4 className="project-card__block-title">{title}</h4>}

      {type === "screens" && (
        <div className="image-group image-group--screens">
          {items.map((item) =>
            framed ? (
              <div className="image-group__phone-frame" key={item.label}>
                <ImagePlaceholder label={item.label} ratio={item.ratio} src={item.src} />
                {showCaption && <p className="image-group__caption">{item.label}</p>}
              </div>
            ) : (
              <figure className="image-group__plain-screen" key={item.label}>
                <ImagePlaceholder label={item.label} ratio={item.ratio} src={item.src} />
                {showCaption && <figcaption>{item.label}</figcaption>}
              </figure>
            )
          )}
        </div>
      )}

      {type === "artifacts" && (
        <div className="image-group image-group--artifacts">
          {items.map((item) => (
            <figure className="image-group__artifact" key={item.label}>
              <ImagePlaceholder label={item.label} ratio={item.ratio} src={item.src} />
              {showCaption && <figcaption>{item.label}</figcaption>}
            </figure>
          ))}
        </div>
      )}

      {type === "wide" && (
        <div className="image-group image-group--wide">
          {items.map((item) => (
            <figure className="image-group__artifact" key={item.label}>
              <ImagePlaceholder label={item.label} ratio={item.ratio} src={item.src} />
              {showCaption && <figcaption>{item.label}</figcaption>}
            </figure>
          ))}
        </div>
      )}

      {type === "ops" && (
        <div className="image-group image-group--ops">
          {items.map((item) => (
            <figure className="image-group__artifact" key={item.label}>
              <ImagePlaceholder label={item.label} ratio={item.ratio} src={item.src} />
              {showCaption && <figcaption>{item.label}</figcaption>}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGroup;
