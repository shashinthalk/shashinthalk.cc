import React from 'react';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import CareerTimeline from '../components/ui/CareerTimeline';
import img from '../assets/profile.png';
import fiverr from '../assets/fiverr-icon.png';
import YoutubeEmbedder from '../components/ui/YoutubeEmbedder';
import MetaTagManager from "../components/layout/MetaTagManager";
import ScrambledText from '../components/ui/ScrambledText';
import renuka from '../assets/rchp.jpg';
import mlchatbot from '../assets/cb.jpg';

const cardData = [
  {
    title: "Renuka City Hotel",
    description: "Wordpress website development, hosting and regular maintenance. Domain and hosting configuration.",
    image: renuka,
    link: "https://www.renukacityhotel.com",
  },
  {
    title: "ML Chatbot",
    description: "Developed a chatbot service using Sentence Transformer and Flask. Deployed on AWS EC2. Database is MongoDB.",
    image: mlchatbot,
    link: "https://colab.research.google.com/drive/1RPltZyglHQ8XwLTNnkzrlS3MC2zyRbU3?usp=sharing",
  }
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
      <style>
        {`
          @keyframes cardPulse {
            0% {
              transform: scale(1);
              box-shadow: 0 0 20px rgba(29,191,115,0.1);
            }
            50% {
              transform: scale(1.02);
              box-shadow: 0 0 40px rgba(29,191,115,0.2);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 20px rgba(29,191,115,0.1);
            }
          }

          @keyframes buttonPulse {
            0% {
              box-shadow: 0 0 0 0 rgba(29, 191, 115, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(29, 191, 115, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(29, 191, 115, 0);
            }
          }
        `}
      </style>
      <MetaTagManager title={'Nishan Shashintha | Home'} description={'As a Full Stack Engineer, I specialize in designing and developing end-to-end digital solutions that balance performance and user experience. Beyond my core work, I enjoy exploring creative and tech-driven side projects that keep me inspired and forward-thinking.'} />
      <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <SectionWrapper className='bg-theme-gradient'>
          <div className='mt-[10%] mb-[10%] w-full flex flex-col justify-center items-center md:flex-row md:items-center'>
            <div className='w-full md:w-1/3 md:p-5 p-2 flex items-center justify-center'>
              <div className="group relative w-[90%] sm:w-[320px] h-[470px] bg-[#404145] rounded-2xl px-4 sm:px-8 py-16 transition-all duration-500 
                            flex flex-col justify-center animate-[cardPulse_3s_ease-in-out_infinite]">
                <a 
                  href="https://www.fiverr.com/shashinthalk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 animate-[buttonPulse_2s_infinite] z-10 overflow-hidden"
                >
                  <img src={fiverr} alt="Fiverr" className="w-full h-full object-cover" />
                </a>
                <div className="absolute inset-0 rounded-2xl opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(29,191,115,0.2)_0%,transparent_100%)]"></div>
                <div className="relative w-40 h-40 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1dbf73]/30 via-transparent to-transparent animate-pulse"></div>
                  <img 
                    src={img} 
                    className="w-full h-full object-cover rounded-full ring-4 ring-[#1dbf73]/20" 
                    alt="Profile" 
                  />
                </div>
                <div className="text-center flex-1 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-3">Nishan Shashintha</h3>
                  <p className="text-xl text-[#7a7d85] mb-8">Full Stack Engineer</p>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#1dbf73]">4+</div>
                      <div className="text-sm text-[#7a7d85]">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#1dbf73]">100+</div>
                      <div className="text-sm text-[#7a7d85]">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#1dbf73]">50+</div>
                      <div className="text-sm text-[#7a7d85]">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-2/3 flex flex-col md:p-5 p-2 items-stretch justify-center'>
              <div className='md:p-2 md:m-2'>
                                  <h1 className='text-3xl md:text-6xl text-heading-text my-5 text-left font-bold leading-[1.2]'>
                    Crafting Digital Journeys That{" "}
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text hover:scale-105 transition-transform inline-block">Work</span>
                    {" "}and{" "}
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text hover:scale-105 transition-transform inline-block">Wow</span>
                    <div className='text-2xl md:text-4xl text-heading-text/70 font-normal mt-4'>
                      Blending Code, Design, and Purpose
                    </div>
                </h1>
                <ScrambledText
                  className="text-md md:text-xl my-5 text-description-text"
                  radius={100}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars={".:"}
                >
                  As a Full Stack Engineer, I specialize in designing and developing end-to-end digital solutions that balance performance and user experience. Beyond my core work, I enjoy exploring creative and tech-driven side projects that keep me inspired and forward-thinking.
                </ScrambledText>
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
            title="Proven Full Stack Journey"
            subtitle="From startups to global clients, I've built modern web solutions across diverse industries.
My experience spans frontend finesse to backend logic, plugin development to cloud deployment.
Each role sharpened my ability to deliver scalable, user-focused digital products.
This journey reflects not just code but creativity, collaboration, and consistency."
          />
        </SectionWrapper>
        <SectionWrapper className='bg-theme-gradient'>
          <CareerTimeline/>
        </SectionWrapper>
        <SectionWrapper className='bg-theme-gradient'>
          <SectionHeading
            HeadingStyle='text-heading-text'
            DescriptionStyle='text-description-text'
            title="Experience Through Projects"
            subtitle="These projects reflect the skills I’ve built through hands-on development.
            From custom plugins to full web apps, each one tells part of my journey.
            They show how I solve problems, write clean code, and build with purpose.
            Every project was a step forward — in both learning and impact."
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
              {/* <Button urlto="projects" className='bg-button-bg text-button-text'>View More</Button> */}
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper className='bg-theme-gradient'>
          <SectionHeading
            HeadingStyle='text-heading-text'
            DescriptionStyle='text-description-text'
            title="Stories Beyond the Code"
            subtitle="When I’m not coding, I’m behind the camera sharing tech tips and travel stories.
            My channel blends vlogging with tech, capturing both places and projects.
            It’s where curiosity meets creativity, and learning stays fun.
            Explore my world, one video at a time."
          />
        </SectionWrapper>
        <SectionWrapper className='bg-theme-gradient'>
          <YoutubeEmbedder videoId = '7IllJ1CO-lk'/>
        </SectionWrapper>
    </>
  );
};

export default Home;
