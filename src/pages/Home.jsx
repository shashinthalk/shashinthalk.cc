import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import CareerTimeline from '../components/ui/CareerTimeline';
import img from '../assets/profile.png';
import YoutubeEmbedder from '../components/ui/YoutubeEmbedder';
import MetaTagManager from "../components/layout/MetaTagManager";

const cardData = [
  {
    title: "Eco Safari Experience",
    description: "Explore wildlife with zero emissions and elevated trails.",
    image: 'https://i.ytimg.com/vi/9admKGpM3A0/maxresdefault.jpg',
    link: "#",
  },
  {
    title: "Mountain Adventure",
    description: "Discover breathtaking views and hiking trails.",
    image: 'https://i.ytimg.com/vi/9admKGpM3A0/maxresdefault.jpg',
    link: "#",
  },
  {
    title: "Forest Retreat",
    description: "Rejuvenate in the heart of untouched nature.",
    image: 'https://i.ytimg.com/vi/9admKGpM3A0/maxresdefault.jpg',
    link: "#",
  },
  {
    title: "Desert Oasis",
    description: "Experience tranquility in a remote desert escape.",
    image: 'https://i.ytimg.com/vi/9admKGpM3A0/maxresdefault.jpg',
    link: "#",
  },
];

const Home = () => {
  const [init, setInit] = useState(false);
  console.log(init);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#B4A5A5",
        },
        links: {
          color: "#B4A5A5",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  return (
    <>
      <MetaTagManager title={'Nishan Shashintha | Home'} description={'As a Full Stack Web Developer, I specialize in designing and developing end-to-end digital solutions that balance performance and user experience. Beyond my core work, I enjoy exploring creative and tech-driven side projects that keep me inspired and forward-thinking.'} />
      <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <SectionWrapper className='bg-theme-gradient'>
          <div className='mt-[8%] mb-[5%] w-full flex flex-col justify-center items-center md:flex-row md:items-start'>
            <div className='w-full md:w-1/3 md:p-5 p-2 flex items-center justify-center'>
              <img src={img} className='object-contain max-w-[50%] md:max-w-[80%] rounded-full opacity-80' alt="" />
            </div>
            <div className='w-full md:w-2/3 flex flex-col md:p-5 p-2 items-stretch justify-center'>
              <div className='md:p-2 md:m-2'>
                <h1 className='text-3xl md:text-6xl text-heading-text my-5 text-left font-bold leading-[1.4]'>
                  Crafting Digital Journeys That <span className="text-yellow-600 text-stroke">Work</span> and <span className="text-yellow-600 text-stroke">Wow</span><br></br>
                  <span className='text-2xl md:text-4xl italic'>Blending Code, Design, and Purpose</span>
                </h1>
                <p className='text-md md:text-xl my-5 text-description-text'>
                  As a Full Stack Web Developer, I specialize in designing and developing end-to-end digital solutions that balance performance and user experience. Beyond my core work, I enjoy exploring creative and tech-driven side projects that keep me inspired and forward-thinking.
                </p>
              </div>
              <div className='md:p-2 md:m-2'>
                <div className='flex justify-left'>
                  <Button urlto="about" className='bg-button-bg text-button-text'>Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper className='bg-theme-gradient'>
          <SectionHeading
            HeadingStyle='text-heading-text'
            DescriptionStyle='text-description-text'
            title="Explore Our Eco Experiences"
            subtitle="Discover sustainable adventures that blend nature, innovation, and relaxation."
          />
        </SectionWrapper>
        <SectionWrapper className='bg-theme-gradient'>
          <CareerTimeline/>
        </SectionWrapper>
        <SectionWrapper className='bg-theme-gradient'>
          <SectionHeading
            HeadingStyle='text-heading-text'
            DescriptionStyle='text-description-text'
            title="Explore Our Eco Experiences"
            subtitle="Discover sustainable adventures that blend nature, innovation, and relaxation."
          />
        </SectionWrapper>
        <SectionWrapper className='bg-theme-gradient'>
          <div className="min-h-screen p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                />
              ))}
            </div>
          </div>
          <div className='p-2 m-2'>
            <div className='flex justify-center'>
              <Button urlto="projects" className='bg-button-bg text-button-text'>View More</Button>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper className='bg-theme-gradient'>
          <SectionHeading
            HeadingStyle='text-heading-text'
            DescriptionStyle='text-description-text'
            title="Explore Our Eco Experiences"
            subtitle="Discover sustainable adventures that blend nature, innovation, and relaxation."
          />
        </SectionWrapper>
        <SectionWrapper className='bg-theme-gradient'>
          <YoutubeEmbedder videoId = '7IllJ1CO-lk'/>
        </SectionWrapper>
    </>
  );
};

export default Home;
