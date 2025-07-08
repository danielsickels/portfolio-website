import React, { useCallback, useEffect, useState } from "react";

const generateRandomClasses = () => {
  const sizes = ["w-6 h-6", "w-12 h-12", "w-16 h-16", "w-24 h-24"];
  const colors = [
    "bg-primary",
    "bg-primary/80",
    "bg-primary/60",
    "bg-accent",
    "bg-accent/80",
    "bg-accent/60",
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
  startPosition: { bottom: number; right: number };
}): React.JSX.Element {
  const [position, setPosition] = useState(startPosition);
  const [opacity, setopacity] = useState(0);

  useEffect(() => {
    const duration = Math.random() * 5000 + 5000;
    const interval = 16; // 60 frames per second

    const frames = duration / interval;
    let currentFrame = 0;

    const moveElement = () => {
      currentFrame++;

      if (currentFrame <= frames) {
        // Calculate the new position based on the bottom
        setPosition((prevPosition: { bottom: number; right: number }) => ({
          bottom: prevPosition.bottom + 1,
          right: prevPosition.right + 1,
        }));

        // Create fade in and out effect
        const progress = currentFrame / frames;
        let newOpacity;

        if (progress < 0.3) {
          // Fade in during first 30% of journey
          newOpacity = progress / 0.3;
        } else if (progress < 0.7) {
          // Stay at full opacity during middle 40% of journey
          newOpacity = 1;
        } else {
          // Fade out during last 30% of journey
          newOpacity = (1 - progress) / 0.3;
        }

        setopacity(Math.max(0, Math.min(1, newOpacity)));
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
        right: `${position.right - 250}%`, // Adjust to bottom the expansion
        bottom: `${position.bottom - 50}%`, // Adjust to bottom the expansion
      }}
    ></div>
  );
}

const StreakEleReverse = ({ maxElements = 15, creationInterval = 100 }) => {
  const [elements, setElements] = useState<React.ReactNode[]>(
    Array(maxElements).fill(null)
  );

  const removeElement = useCallback((index: number) => {
    setElements((prevElements) => {
      const newElements = [...prevElements];
      newElements[index] = null;
      return newElements;
    });
  }, []);

  const addElement = useCallback(() => {
    setElements((prevElements) => {
      const newElements = [...prevElements];
      const emptyIndex = newElements.indexOf(null);

      if (emptyIndex !== -1) {
        const startPosition = {
          bottom: -150,
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
  }, [removeElement]);

  useEffect(() => {
    const addElementInterval = setInterval(addElement, creationInterval);

    return () => clearInterval(addElementInterval);
  }, [addElement, creationInterval]);

  return (
    <div className="fixed bottom-0 right-0 w-full h-full z-[-1] overflow-hidden">
      {elements}
      <div
        className="absolute bottom-0 right-0 w-full h-full"
        style={{
          backgroundColor: `rgba(var(--background-start-rgb), 0.8)`,
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default StreakEleReverse;
