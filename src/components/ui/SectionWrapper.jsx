import React from "react";

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <section className={`py-12 px-4 md:px-8 lg:px-12 flex items-center justify-center ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
