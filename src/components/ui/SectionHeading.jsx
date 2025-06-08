import ScrambledText from "./ScrambledText";

const SectionHeading = ({ title, subtitle, HeadingStyle = "", DescriptionStyle = "" }) => (
  <div className="text-center mb-6 md:mb-10 px-4 md:px-0">
    <h1 className={`text-2xl md:text-6xl my-3 md:my-5 text-center font-bold leading-[1.2] ${HeadingStyle}`}>{title}</h1>
    <p className={`text-base md:text-2xl max-w-2xl mx-auto my-3 md:my-5 ${DescriptionStyle}`}>
      <ScrambledText
        className="text-sm md:text-xl my-3 md:my-5 text-description-text"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars={".:"}
      >
        {subtitle}
      </ScrambledText>
    </p>
  </div>
);

export default SectionHeading;