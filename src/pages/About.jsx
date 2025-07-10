import React from 'react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import ImageCollage from '../components/ui/ImageCollage';
import MetaTagManager from "../components/layout/MetaTagManager";

import isoc1 from '../assets/isoc/1.jpg'
import isoc2 from '../assets/isoc/2.jpg'
import isoc3 from '../assets/isoc/3.png'
import isoc4 from '../assets/isoc/4.jpg'

const About = () => {
  const collageImages = [
    {
      url: isoc1,
      alt: 'Internet Society Sri Lankan Chapter'
    },
    {
      url: isoc2,
      alt: 'ISOC Community Engagement'
    },
    {
      url: isoc3,
      alt: 'ISOC Community Engagement'
    },
    {
      url: isoc4,
      alt: 'ISOC Community Engagement'
    }
  ];

  return (
    <>
      <MetaTagManager title={'Nishan Shashintha | About'} description={'As a Full Stack Engineer, I specialize in designing and developing end-to-end digital solutions that balance performance and user experience. Beyond my core work, I enjoy exploring creative and tech-driven side projects that keep me inspired and forward-thinking.'} />
      <SectionWrapper className='bg-theme-gradient'>
        <div className='mt-[10%]  w-full flex justify-center'>
          <div className='flex-row p-5 containe justify-center'>
            <SectionHeading
              HeadingStyle='text-heading-text'
              DescriptionStyle='text-description-text text-justify'
              title="About Me"
              subtitle={`Hello! I'm Nishan Shashintha, a passionate 
                full stack engineer originally from the scenic 
                city of Badulla, Sri Lanka, and now based in Salzburg, 
                Austria. My journey in technology began with a strong 
                academic foundation in Engineering Technology during high 
                school, which paved the way for my selection to the prestigious 
                University of Kelaniya—one of Sri Lanka's top public universities. 
                There, I earned my Bachelor's degree in Information and Communication 
                Technology, specializing in Software System Technologies, and completed 
                a thesis on a barcode-based school library management system.`}
            />
            <div className='p-2 m-2'>
              <div className='flex justify-center'>
                <Button className='bg-button-bg text-button-text'>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className='bg-theme-gradient'>
        <SectionHeading
          HeadingStyle='text-heading-text'
          DescriptionStyle='text-description-text text-justify'
          title="Community & Leadership"
          subtitle={`Board Member, Internet Society – Sri Lanka Chapter`}
        />
        <p className={`text-lg md:text-xl text-justify text-description-text my-5`}>
          {`As a board member of the Internet Society's Sri Lanka Chapter, 
          I actively contributed to initiatives aimed at promoting 
          digital inclusion and expanding internet accessibility across 
          the country. My work involved collaborating with industry leaders, 
          organizing awareness programs, and advocating for a safer, more 
          inclusive digital future for all Sri Lankans.`}
        </p>
      </SectionWrapper>
      <SectionWrapper className='bg-theme-gradient'>
        <ImageCollage images={collageImages} />
      </SectionWrapper>
    </>
  );
};

export default About;
