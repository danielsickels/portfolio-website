import React, { useEffect, useState } from "react";

const generateRandomClasses = () => {
    const sizes = ["w-6 h-6", "w-12 h-12", "w-16 h-16", "w-24 h-24"];
    const colors = [
        "bg-red-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-pink-500",
    ];

    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return `${size} ${color} animate-pulse`;
    };

    function AnimatedElement({ onEnd, startPosition}): React.JSX.Element {
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
                setPosition((prevPosition: { top: number; }) => ({
                    top: prevPosition.top + 2, // Adjust the speed by changing this value
                    left: startPosition.left,
                }));

                setOpacity((prevOpacity) => prevOpacity - 3 / frames);
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
            }}
        ></div>
    );
}

    const StreakingElements = ({ creationInterval = 100 }) => {
    const [elements, setElements] = useState<React.ReactNode[]>([]);

    const addElement = () => {
        const startPosition = {
        top: -50, // Adjust the starting position off-screen
        left: Math.random() * 100 + "%",
        };

        setElements((prevElements) => [
        ...prevElements,
        <AnimatedElement
            key={Math.random()}
            onEnd={() => removeElement()}
            startPosition={startPosition}
            // removeElement={() => removeElement()}
        />,
        ]);
    };

    const removeElement = () => {
        setElements((prevElements) => prevElements.slice(1));
    };

    useEffect(() => {
        addElement();
        const interval = setInterval(addElement, creationInterval);

        return () => clearInterval(interval);
    }, [creationInterval]);

    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
        {elements}
        <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
            backgroundColor: `rgba(var(--background-start-rgb), 0.8)`,
            zIndex: 1,
            }}
        ></div>
        </div>
    );
    };

export default StreakingElements;
