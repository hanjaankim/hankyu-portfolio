import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import "./ImageGroup.css";

/**
 * Renders one labeled group of project images. `type` picks the layout:
 * - "screens": real product screens — horizontally scrollable, phone-framed
 * - "artifacts": planning output (IA, wireframes, spec docs) — a legible grid,
 *   deliberately not shrunk small; these are evidence of process, not filler
 * - "wide": a single large reference (diagrams, gantt charts, admin screens)
 * - "ops": mixed operational material (posters, docs) — plain grid
 */
function ImageGroup({ title, type, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="project-card__block">
      {title && <h4 className="project-card__block-title">{title}</h4>}

      {type === "screens" && (
        <div className="image-group image-group--screens">
          {items.map((item) => (
            <div className="image-group__phone-frame" key={item.label}>
              <ImagePlaceholder label={item.label} ratio={item.ratio} src={item.src} />
            </div>
          ))}
        </div>
      )}

      {type === "artifacts" && (
        <div className="image-group image-group--artifacts">
          {items.map((item) => (
            <figure className="image-group__artifact" key={item.label}>
              <ImagePlaceholder label={item.label} ratio={item.ratio} src={item.src} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {type === "wide" && (
        <div className="image-group image-group--wide">
          {items.map((item) => (
            <figure className="image-group__artifact" key={item.label}>
              <ImagePlaceholder label={item.label} ratio={item.ratio} src={item.src} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {type === "ops" && (
        <div className="image-group image-group--ops">
          {items.map((item) => (
            <figure className="image-group__artifact" key={item.label}>
              <ImagePlaceholder label={item.label} ratio={item.ratio} src={item.src} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGroup;
