import React from "react";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  pageTitle,
  pageSubtitle,
}) => {
  return (
    <div>
      {pageTitle && (
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center text-white">{pageTitle}</h2>
          <p className="text-center mt-2 text-white">{pageSubtitle}</p>
        </div>
      )}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{title}</div>
          <p className="text-gray-700 text-base text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
