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
                subtitle="Crafted with code, creativity, and coffee.
                  Let’s build something meaningful together."
              />
            </SectionWrapper>
            <div className="flex  border-t border-gray-300 p-4 text-white">
              <p>© {new Date().getFullYear()} Nishan Shashintha. All rights reserved.</p>
            </div>
          </div>
        </>
    )
}