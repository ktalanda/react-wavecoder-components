import React from 'react';
import './Preloader.css'
import ProgressLine from "./ProgressLine";

const Preloader: React.FC<{
  topLine: string,
  bottomLine: string,
  loaded: boolean
}> = ({ loaded, topLine, bottomLine }) => {
    return (
    <div className={`Preloader${loaded ? " loaded" : ""}`}>
        <div className="Preloader-container">
          <h1>{topLine}</h1>
          <ProgressLine />
          <h1>{bottomLine}</h1>
        </div>
      </div>
    )
}

export default Preloader;
