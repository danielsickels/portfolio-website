import React, { useEffect, useState } from "react";
import { GiConsoleController } from "react-icons/gi";

const generateRandomClasses = () => {
  const sizes = ["w-6 h-6", "w-12 h-12", "w-16 h-16", "w-24 h-24"];
  const colors = [
    "bg-red-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
  ];

  const size = sizes[Math.floor(Math.random() * sizes.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return `${size} ${color} animate-pulse`;
};

function AnimatedElement({
  onEnd,
  startPosition,
}: {
  onEnd: () => void;
  startPosition: { top: number; right: number };
}): React.JSX.Element {
  const [position, setPosition] = useState(startPosition);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const duration = Math.random() * 5000 + 5000;
    const interval = 16; // 60 frames per second

    const frames = duration / interval;
    let currentFrame = 0;

    const moveElement = () => {
      currentFrame++;

      if (currentFrame <= frames) {
        // Calculate the new position based on the center
        setPosition((prevPosition: { top: number; right: number }) => ({
          top: prevPosition.top + 1,
          right: prevPosition.right + 1,
        }));

        setOpacity((prevOpacity) => prevOpacity + 7 / frames);
      } else {
        onEnd();
      }
    };

    const intervalId = setInterval(moveElement, interval);

    return () => clearInterval(intervalId);
  }, [onEnd, startPosition]);

  return (
    <div
      className={`absolute ${generateRandomClasses()}`}
      style={{
        ...position,
        opacity: opacity,
        right: `${position.right - 250}%`, // Adjust to center the expansion
        top: `${position.top - 50}%`, // Adjust to center the expansion
      }}
    ></div>
  );
}

const StreakEleReverse = ({ maxElements = 15, creationInterval = 100 }) => {
  const [elements, setElements] = useState<React.ReactNode[]>(
    Array(maxElements).fill(null)
  );

  const addElement = () => {
    setElements((prevElements) => {
      const newElements = [...prevElements];
      const emptyIndex = newElements.indexOf(null);

      if (emptyIndex !== -1) {
        const startPosition = {
          top: -150,
          right: Math.random() * 100,
        };

        newElements[emptyIndex] = (
          <AnimatedElement
            key={Math.random()}
            onEnd={() => removeElement(emptyIndex)}
            startPosition={startPosition}
          />
        );
      }

      return newElements;
    });
  };

  const removeElement = (index: number) => {
    setElements((prevElements) => {
      const newElements = [...prevElements];
      newElements[index] = null;
      return newElements;
    });
  };

  useEffect(() => {
    addElement();
    const interval = setInterval(addElement, creationInterval);

    return () => clearInterval(interval);
  }, [creationInterval]);

  return (
    <div className="fixed top-0 right-0 w-full h-full z-[-1] overflow-hidden">
      {elements}
      <div
        className="absolute top-0 right-0 w-full h-full"
        style={{
          backgroundColor: `rgba(var(--background-start-rgb), 0.8)`,
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default StreakEleReverse;
