
import React from "react";
import "./BackgroundImage.css";
import { ImageUrl } from "./types";

interface BackgroundImageProps {
  url: ImageUrl;
  isVisible: boolean;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ url, isVisible }) => (
  <picture>
    <source srcSet={url.webp} type="image/webp" />
    <img
      className={`background-image`}
      src={url.jpg}
      alt="Background"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: "none",
        transition: "opacity 1s ease"
      }}
    />
  </picture>
);

export default BackgroundImage;
