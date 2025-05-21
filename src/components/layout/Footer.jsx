import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';

export default function Footer() {
    return(
        <>
          <div className="w-full flex-row justify-center bg-background">
            <SectionWrapper className='bg-gradient-to-r '>
              <SectionHeading
                HeadingStyle='text-heading-text'
                DescriptionStyle='text-heading-text'
                title="shashinthalk.cc"
                subtitle="Discover sustainable adventures that blend nature, innovation, and relaxation."
              />
            </SectionWrapper>
            <div className="flex justify-center border-t border-gray-300 p-4 text-white">
              <p>Developed By Nishan Shashintha</p>
            </div>
          </div>
        </>
    )
}