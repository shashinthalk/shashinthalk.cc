import React from 'react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import MetaTagManager from "../components/layout/MetaTagManager";

const Contact = () => {
  return (
    <>
      <MetaTagManager title={'Nishan Shashintha | Contact'} description={'As a Full Stack Web Developer, I specialize in designing and developing end-to-end digital solutions that balance performance and user experience. Beyond my core work, I enjoy exploring creative and tech-driven side projects that keep me inspired and forward-thinking.'} />
      <SectionWrapper className='bg-theme-gradient'>
        <div className='mt-[10%] mb-[5%] w-full flex justify-center'>
          <div className='flex-row p-5 containe justify-center'>
            <SectionHeading
              HeadingStyle='text-heading-text'
              DescriptionStyle='text-description-text'
              title="Contact Me"
              subtitle="Discover sustainable adventures that blend nature, innovation, and relaxation."
            />
            <div className='p-2 m-2'>
              <div className='flex justify-center'>
                <Button className='bg-button-bg text-button-text'>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
