import "./ImagePlaceholder.css";

/**
 * Reusable stand-in for a future image/screenshot.
 * Swap out later by rendering an <img> in its place — the label prop
 * documents what should go there.
 */
function ImagePlaceholder({ label, ratio = "4 / 3", className = "" }) {
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
