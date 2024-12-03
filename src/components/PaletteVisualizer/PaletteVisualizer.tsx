import React, { useState } from "react";
import styles from './styles.module.css';
import ErrorBoundary from '@docusaurus/ErrorBoundary';



const PaletteVisualizer: React.FC<PaletteVisualizerProps> = ({ palette }) => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);

  const highlightColor = (color: string | undefined) => {
    console.log(color);
    setSelectedColor(color); // Update state to trigger a re-render
  };

  return (
    <ErrorBoundary
      fallback={({ error, tryAgain }) => (
        <div>
          <p>The Palette Visualizer crashed because of error: {error.message}.</p>
          <button onClick={tryAgain}>Try Again!</button>
        </div>
      )}
    >
      <div 
      className={`${styles.paletteVisualizer} ${selectedColor ? styles.paletteVisualizerColorOverride : ''}`}
      style={selectedColor ? { backgroundColor: selectedColor } : {}}>
        
        <div
          className={`${styles.gridContainer}`}
        >
          {palette.map((color, index) => (
            <div
              key={index}
              className={`${styles.gridItem}`}
              style={{ backgroundColor: color }}
              onMouseEnter={() => highlightColor(color)}
              onMouseLeave={() => highlightColor(undefined)}
            >
              <div className={`${styles.colorLabel}`} style={{ color: color }}>
                {index}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default PaletteVisualizer;
