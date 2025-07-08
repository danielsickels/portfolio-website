import React from "react";
import { PuzzlePiece, Anchor, TestTube, Brain } from "@phosphor-icons/react";

const TextSection = () => {
  return (
    <div className="container mx-auto px-6">
      <p className="text-2xl mb-6">
        Hi, I&apos;m Danny Sickels—a full-stack developer who brings a
        scientific rigor to every line of code. My career began in Nutrition &
        Dietetics, where I learned to study complex systems, collect clean data,
        and test hypotheses. As a Quality Assurance Technician at a large-scale
        food manufacturer, I&apos;ve honed an eye for detail, documented every
        variable, and keep production running.
      </p>
      <p className="text-2xl mt-8 mb-6">
        That same methodical mindset now powers my work with software:
      </p>
      <ul className="text-2xl space-y-4 mb-6">
        <li className="flex items-start gap-3">
          <PuzzlePiece
            size={32}
            weight="fill"
            className="text-primary mt-1 flex-shrink-0"
          />
          <div className="text-left">
            <span className="font-semibold">Full-Stack Developer:</span>{" "}
            I&apos;ve crafted modern web apps with frameworks like React, and
            FastAPI, supported by SQL and real-time databases.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Anchor
            size={32}
            weight="fill"
            className="text-primary mt-1 flex-shrink-0"
          />
          <div className="text-left">
            <span className="font-semibold">DevOps Enthusiast:</span>{" "}
            Containerized and deployed with Docker & Kubernetes, automated
            releases, and kept services resilient.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <TestTube
            size={32}
            weight="fill"
            className="text-primary mt-1 flex-shrink-0"
          />
          <div className="text-left">
            <span className="font-semibold">Quality Champion:</span> I&apos;ve
            written Pytests and suites that treat tests like
            experiments—observe, measure, iterate.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Brain
            size={32}
            weight="fill"
            className="text-primary mt-1 flex-shrink-0"
          />
          <div className="text-left">
            <span className="font-semibold">Systems Thinker:</span> Worked with
            scaling microservices and tracking user behavior, analyzing root
            causes to design data-driven fixes.
          </div>
        </li>
      </ul>
      <p className="text-2xl mt-8 mb-6 pb-5">
        I enjoy tackling difficult puzzles, collaborating across disciplines,
        and learning anything that helps me to move forward and grow. From
        building a game in Unity game engine to launching full-stack cocktail
        spirits and recipes, I chase projects that blend creativity with
        reliable engineering. I&apos;m always looking for new challenges and
        opportunities to learn and grow.
      </p>
      <p className="text-2xl mt-8 mb-6 pb-20">
        If you&apos;re looking for a developer who pairs scientific curiosity
        with production-ready code, let&apos;s connect. Check out my projects or
        send me a message!
      </p>
    </div>
  );
};

export default TextSection;
