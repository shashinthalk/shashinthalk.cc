const SectionHeading = ({ title, subtitle, HeadingStyle = "", DescriptionStyle = "" }) => (
  <div className="text-center mb-10">
    <h1 className={`text-3xl md:text-6xl my-5 text-center font-bold leading-[1.2] ${HeadingStyle}`}>{title}</h1>
    <p className={`text-lg md:text-2xl max-w-2xl mx-auto my-5 ${DescriptionStyle}`}>{subtitle}</p>
  </div>
);

export default SectionHeading;