import React from "react";
import styles from './styles.module.css';

interface UIProps {
  functions: [];
  keypadColor: string[]; // Array of colors passed as prop
  keypadFunction: string[]; // Array of function ids passed as prop
  underglowColor: string[]; // Array of colors passed as prop
}

const MystrixVisualizer = () => {

  const getCornerRadius = (x: number, y: number) => {
    switch (x + y * 10) {
      case 43:
        return "polygon(80% 0, 100% 20%, 100% 100%, 0 100%, 0 0)";
      case 44:
        return "polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%)";
      case 33:
        return "polygon(100% 0, 100% 80%, 80% 100%, 0 100%, 0 0)";
      case 34:
        return "polygon(100% 0, 100% 100%, 20% 100%, 0 80%, 0 0)";
      default:
        return "unset";
    }
  };

  return (
    <div className={styles.MystrixVisualizer}>
        <div className={styles.mystrix}>
        <div className={styles.mystrixUnderglow}>
            <div className={styles.mystrixUnderglowRow}>
            {Array.from({ length: 8 }, (_, x) => (
                <div key={x} className={styles.mystrixUnderglowLed}/>
            ))}
            </div>

            <div style={{ display: "flex", flexDirection: "row", height: "88%", justifyContent: "space-between" }}>
            <div className={styles.mystrixUnderglowColumn}>
                {Array.from({ length: 8 }, (_, y) => (
                <div key={y} className={styles.mystrixUnderglowLed}/>
                ))}
            </div>

            <div className={styles.mystrixUnderglowColumn}>
                {Array.from({ length: 8 }, (_, y) => (
                <div key={y} className={styles.mystrixUnderglowLed}/>
                ))}
            </div>
            </div>

            <div className={styles.mystrixUnderglowRow}>
            {Array.from({ length: 8 }, (_, x) => (
                <div key={x} className={styles.mystrixUnderglowLed}/>
            ))}
            </div>
        </div>

        <div className={styles.mystrixBorder}>
            <div className={styles.mystrixControls}>
            {Array.from({ length: 8 }, (_, y) => (
                <div key={y} className={styles.mystrixControlsRow}>
                {Array.from({ length: 8 }, (_, x) => (
                    <div key={x} className={styles.mystrixBtn } style={{ clipPath: getCornerRadius(x, y) }}/>
                ))}
                </div>
            ))}
            </div>
        </div>

        <div className={styles.mystrixTouchKey}>
            <div className={styles.mystrixTouchKeyRow}>
            {Array.from({ length: 8 }, (_, x) => (
                <div key={x} className={styles.mystrixTouchkeyBtn}>
                <div className={styles.mystrixTouchkeyBtnChild}/>
                </div>
            ))}
            </div>

            <div style={{ display: "flex", flexDirection: "row", height: "94%", justifyContent: "space-between" }}>
            <div className={styles.mystrixTouchKeyColumn}>
                {Array.from({ length: 8 }, (_, y) => (
                <div key={y} className={styles.mystrixTouchkeyBtn}>
                    <div className={styles.mystrixTouchkeyBtnChild}/>
                </div>
                ))}
            </div>

            <div className={styles.mystrixTouchKeyColumn}>
                {Array.from({ length: 8 }, (_, y) => (
                <div key={y} className={styles.mystrixTouchkeyBtn}>
                    <div className={styles.mystrixTouchkeyBtnChild}/>
                </div>
                ))}
            </div>
            </div>

            <div className={styles.mystrixTouchKeyRow}>
            {Array.from({ length: 8 }, (_, x) => (
                <div key={x} className={styles.mystrixTouchkeyBtn}>
                    <div className={styles.mystrixTouchkeyBtnChild}/>
                </div>
            ))}
            </div>
        </div>
        
        <div className={styles.mystrixCenterKey}/>
        </div>
        <div className={styles.functionDisplay}>
            <span style={{ fontSize: "20px" }}>Mystrix Visualizer</span>
        </div>
    </div>
  );
};

export default MystrixVisualizer;
