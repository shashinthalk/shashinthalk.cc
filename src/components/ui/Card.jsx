import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description, image }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  // Prevent context menu on image
  const preventImageActions = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto bg-primary rounded-xl transform-gpu transition-all duration-300 ease-out hover:scale-102 border border-border-color/20"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.5)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-t-xl select-none">
        {image && (
          <div 
            className="aspect-video overflow-hidden"
            onContextMenu={preventImageActions}
            onDragStart={preventImageActions}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110 pointer-events-none"
              onContextMenu={preventImageActions}
              onDragStart={preventImageActions}
              loading="lazy"
              style={{
                WebkitUserSelect: 'none',
                userSelect: 'none',
                WebkitTouchCallout: 'none'
              }}
            />
          </div>
        )}
      </div>
      <div className="p-6 backdrop-blur-sm bg-primary/95 rounded-b-xl">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">{title}</h2>
        <p className="text-base md:text-lg text-description-text mb-4">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Card;

