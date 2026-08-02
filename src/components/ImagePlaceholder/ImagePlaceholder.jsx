import "./ImagePlaceholder.css";

/**
 * Reusable stand-in for a future image/screenshot. Once a project
 * supplies a `src`, this renders the real image instead — the label
 * prop still documents what belongs there and becomes the alt text.
 */
function ImagePlaceholder({ label, ratio = "4 / 3", src, className = "" }) {
  if (src) {
    return (
      <img
        className={`image-placeholder image-placeholder--real ${className}`}
        style={{ aspectRatio: ratio }}
        src={src}
        alt={label}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`image-placeholder ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <span className="image-placeholder__label">{label}</span>
    </div>
  );
}

export default ImagePlaceholder;
