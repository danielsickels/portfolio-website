import React, { useEffect, useState } from "react";
import { GiConsoleController } from "react-icons/gi";

const generateRandomClasses = () => {
    const sizes = ["w-6 h-6", "w-12 h-12", "w-16 h-16", "w-24 h-24"];
    const colors = [
        "bg-red-600",
        "bg-green-600",
        "bg-blue-600",
        "bg-yellow-600",
        "bg-purple-600",
        "bg-pink-600",
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
        startPosition: { top: number; left: number };
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
            setPosition((prevPosition: { top: number; left: number }) => ({
                top: prevPosition.top + 1,
                left: prevPosition.left + 1,
            }));
    
            setOpacity((prevOpacity) => prevOpacity + 2 / frames);
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
            left: `${position.left - 150}%`, // Adjust to center the expansion
            top: `${position.top - 50}%`, // Adjust to center the expansion
            }}
        ></div>
        );
    }
    

    const StreakingElements = ({ maxElements = 15, creationInterval = 100 }) => {
        const [elements, setElements] = useState<React.ReactNode[]>(Array(maxElements).fill(null));
    
        const addElement = () => {
        setElements((prevElements) => {
            const newElements = [...prevElements];
            const emptyIndex = newElements.indexOf(null);
    
            if (emptyIndex !== -1) {
            const startPosition = {
                top: -50,
                left: Math.random() * 100,
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
