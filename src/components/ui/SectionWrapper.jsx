import React from 'react';
import PropTypes from 'prop-types';

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <section className={`py-12 px-4 md:px-8 lg:px-12 flex items-center justify-center ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default SectionWrapper;
