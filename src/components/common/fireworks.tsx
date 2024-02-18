import React, { useEffect } from "react";
import * as fireworks from "fireworks-js";

const FireworksComponent: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("fireworks-container");
    if (!container) return;

    const fireworksInstance = new fireworks.Fireworks(container, {});
    fireworksInstance.start();

    return () => {
      fireworksInstance.stop();
    };
  }, []);

  return (
    <div
      id="fireworks-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vw",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default FireworksComponent;
