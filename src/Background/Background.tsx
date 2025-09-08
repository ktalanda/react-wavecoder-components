import React, { useEffect, useRef, useState } from "react";
import './Background.css';
import StopButton from "./StopButton";
import PlayButton from "./PlayButton";
import BackgroundVideo from "./BackgroundVideo";
import BackgroundImage from "./BackgroundImage";
import { ImageUrl, VideoUrl } from "./types";

interface BackgroundProps {
  imageUrl: ImageUrl;
  videoUrl: VideoUrl;
}

const Background: React.FC<BackgroundProps> = ({ imageUrl, videoUrl }) => {
  const hasSeenVideo = document.cookie.includes("videoPlayed=true");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(!hasSeenVideo);
  const videoPlaybackRate = 0.75;

  useEffect(() => {
    const video = videoRef.current;
    if (video && isVideoPlaying) {
      video.playbackRate = videoPlaybackRate;

      const handleTimeUpdate = () => {
        if (video && isVideoPlaying && video.duration - video.currentTime < 1) {
          setIsVideoPlaying(false);
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [isVideoPlaying]);

  const handleEnded = () => {
    setIsVideoPlaying(false);
    document.cookie = "videoPlayed=true; path=/; max-age=31536000";
  };

  const handlePlay = () => {
    setIsVideoPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 0);
  };

  const handleStop = () => {
    videoRef.current?.pause();
    setIsVideoPlaying(false);
    document.cookie = "videoPlayed=true; path=/; max-age=31536000";
  };

  return (
    <div className="HomeBackground">
      <BackgroundVideo url={videoUrl} videoRef={videoRef} onEnded={handleEnded} />
      <BackgroundImage url={imageUrl} isVisible={!isVideoPlaying} />
      {
        isVideoPlaying ? (
          <StopButton className="video-button" onClick={handleStop} />
        ) : (
          <PlayButton className="video-button" onClick={handlePlay} />
        )
      }
    </div>
  );
}

export default Background;
