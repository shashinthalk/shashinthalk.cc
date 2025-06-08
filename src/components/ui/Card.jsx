import React from "react";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="w-full max-w-2xl mx-auto border-black border-solid bordre-1px bg-card-background rounded-lg hover:shadow-lg transition-shadow duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full rounded-tl-lg rounded-tr-lg h-48 md:h-60 object-cover"
        />
      )}
      <div className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold text-card-heading">{title}</h2>
        <p className="mt-2 text-sm md:text-base text-card-description">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 md:mt-4 text-card-link hover:text-card-link-hover text-sm font-medium"
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;

