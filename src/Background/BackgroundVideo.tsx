
import React, { RefObject } from "react";
import "./BackgroundVideo.css";
import { VideoUrl } from "./types";

interface BackgroundVideoProps {
  url: VideoUrl;
  videoRef: RefObject<HTMLVideoElement | null>;
  onEnded: () => void;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoRef, onEnded, url }) => (
  <video
    ref={videoRef}
    className={'background-video'}
    autoPlay
    muted
    playsInline
    onEnded={onEnded}
    data-testid="background-video"
  >
    <source src={url.webm} type="video/webm" />
    <source src={url.mp4} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default BackgroundVideo;
