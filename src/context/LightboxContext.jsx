import { useMemo, useState } from "react";
import { LightboxContext } from "./lightboxContextObject";

export function LightboxProvider({ children }) {
  const [image, setImage] = useState(null);

  const value = useMemo(
    () => ({
      image,
      openLightbox: (src, label) => setImage({ src, label }),
      closeLightbox: () => setImage(null),
    }),
    [image]
  );

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>;
}
