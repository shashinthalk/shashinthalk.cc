import React, { useEffect } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import MetaTagManager from "../components/layout/MetaTagManager";
import { FaYoutube, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Contact = () => {
  useEffect(() => {
    // Load JotForm script
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize JotForm handler after script loads
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-251612822648357']", "https://form.jotform.com/");
      }
    };

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const socialLinks = [
    {
      icon: <FaYoutube className="text-3xl" />,
      url: "https://www.youtube.com/@saraineurope",
      color: "hover:text-red-600"
    },
    {
      icon: <FaGithub className="text-3xl" />,
      url: "https://github.com/shashinthalk",
      color: "hover:text-gray-600"
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      url: "https://www.linkedin.com/in/nishan-shashintha/",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaFacebook className="text-3xl" />,
      url: "https://www.facebook.com/rmnshashintha/",
      color: "hover:text-blue-700"
    },
    {
      icon: <SiFiverr className="text-3xl" />,
      url: "https://www.fiverr.com/shashinthalk",
      color: "hover:text-green-500"
    }
  ];

  return (
    <>
      <MetaTagManager 
        title={'Nishan Shashintha | Contact'} 
        description={'Get in touch with me for your next project. I specialize in full-stack development, from web applications to custom solutions. Let\'s bring your ideas to life!'} 
      />
      <SectionWrapper className='bg-theme-gradient'>
        <div className='mt-[10%] mb-[5%] w-full flex justify-center'>
          <div className='flex-col p-5 container max-w-4xl'>
            <SectionHeading
              HeadingStyle='text-heading-text'
              DescriptionStyle='text-description-text'
              title="Contact Me"
              subtitle="Let's collaborate on your next project! Whether you need a full-stack solution, custom development, or technical consultation, I'm here to help turn your ideas into reality."
            />
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 my-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-heading-text transition-colors duration-300 ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* JotForm */}
            <div className="mt-8">
              <iframe
                id="JotFormIFrame-251612822648357"
                title="Contact Me"
                onLoad={() => window.parent.scrollTo(0,0)}
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/251612822648357"
                frameBorder="0"
                style={{
                  minWidth: '100%',
                  maxWidth: '100%',
                  height: '539px',
                  border: 'none'
                }}
                scrolling="no"
              >
              </iframe>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
