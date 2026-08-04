import { useLightbox } from "../../hooks/useLightbox";
import "./ImagePlaceholder.css";

/**
 * Reusable stand-in for a future image/screenshot. Once a project
 * supplies a `src`, this renders the real image instead — the label
 * prop still documents what belongs there and becomes the alt text.
 * Real images open in a full-screen lightbox on click/tap, since
 * project screenshots read as too small to make out on mobile.
 *
 * The click handler lives on the <img> itself rather than a wrapping
 * <button> — many layouts size this component via `.image-placeholder`
 * selectors (fixed height, width:auto, etc.), and a wrapper would break
 * every one of those instead of just sizing the element in place.
 */
function ImagePlaceholder({ label, ratio = "4 / 3", src, className = "" }) {
  const { openLightbox } = useLightbox();

  if (src) {
    const openThis = () => openLightbox(src, label);
    return (
      <img
        className={`image-placeholder image-placeholder--real ${className}`}
        style={{ aspectRatio: ratio }}
        src={src}
        alt={label}
        loading="lazy"
        role="button"
        tabIndex={0}
        onClick={openThis}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openThis();
          }
        }}
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
