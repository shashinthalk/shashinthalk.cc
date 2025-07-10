import React from 'react';
import PropTypes from 'prop-types';

const ImageCollage = ({ images }) => {
  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
            />
            {image.alt && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                {image.alt}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

ImageCollage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string
    })
  ).isRequired
};

export default ImageCollage; 