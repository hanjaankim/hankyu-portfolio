import { useEffect } from "react";
import { useLightbox } from "../../hooks/useLightbox";
import "./Lightbox.css";

function Lightbox() {
  const { image, closeLightbox } = useLightbox();

  useEffect(() => {
    if (!image) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, closeLightbox]);

  if (!image) return null;

  return (
    <div className="lightbox" onClick={closeLightbox} role="presentation">
      <button
        type="button"
        className="lightbox__close"
        onClick={closeLightbox}
        aria-label="이미지 닫기"
      >
        ✕
      </button>
      <img
        className="lightbox__image"
        src={image.src}
        alt={image.label}
        onClick={(event) => event.stopPropagation()}
      />
      {image.label && (
        <p className="lightbox__caption" onClick={(event) => event.stopPropagation()}>
          {image.label}
        </p>
      )}
    </div>
  );
}

export default Lightbox;
