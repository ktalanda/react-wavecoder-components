import React, { useEffect, useState } from "react";
import Text from "@mui/material/Typography";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

const FADE_DURATION = 500; // ms

const RotatingText: React.FC<RotatingTextProps> = ({ words, interval = 2000, className }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setFade(false), interval - FADE_DURATION);
    const change = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setFade(true);
    }, interval);

    return () => {
      clearTimeout(timer);
      clearTimeout(change);
    };
  }, [index, interval, words.length]);

  return (
    <Text
      color="text.secondary"
      className={className}
      style={{
        display: "inline-block",
        opacity: fade ? 1 : 0,
        transition: `opacity ${FADE_DURATION}ms`
      }}
      variant="inherit"
    >
      {words[index]}
    </Text>
  );
};

export default RotatingText;