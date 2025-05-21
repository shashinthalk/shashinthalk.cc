import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsPersonWorkspace } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa6";
import { TbFileTypePhp } from "react-icons/tb";
import { FaWebflow } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { BsKanban } from "react-icons/bs";

export default function CareerTimeline() {

    const dataSet = [
        {
            backgroundColor: 'black',
            fontColor: 'white',
            position:'FULL STACK WEB DEVELOPER',
            subheading:'TRANSPIRE CONSULTANTS | AUSTRALIA | Remote',
            description:`Responsible for maintaining and building dynamic, responsive user interfaces and backend web services. Experienced
                        in managing and customizing WordPress websites and plugins, alongside developing and maintaining Webflow sites.
                        Skilled in deploying React and Node.js applications, configuring domains, managing hosting environments, and
                        ensuring software quality, scalability, and adaptability to evolving product requirements with strong database
                        knowledge.`,
            duration:'From 2023 to current',
            technologies:{
                techstacks: ['react','node','wordpress','php','webflow','mysql','mongodb','aws','docker','kanban']
            }
        },
        {
            backgroundColor: '#222831',
            fontColor: '#DFD0B8',
            position:'FULL STACK WEB DEVELOPER',
            subheading:'TRANSPIRE CONSULTANTS | AUSTRALIA | Remote',
            description:`Responsible for maintaining and building dynamic, responsive user interfaces and backend web services. Experienced
                        in managing and customizing WordPress websites and plugins, alongside developing and maintaining Webflow sites.
                        Skilled in deploying React and Node.js applications, configuring domains, managing hosting environments, and
                        ensuring software quality, scalability, and adaptability to evolving product requirements with strong database
                        knowledge.`,
            duration:'From 2023 to current',
            technologies:{
                techstacks: ['react','node','wordpress','php','webflow','mysql','mongodb','aws','docker','kanban']
            }
        }
    ]

    const getColClass = (count) => {
        switch (count) {
            case 1:
                return 'grid-cols-1'
            case 2:
                return 'grid-cols-2'
            case 3: 
                return 'grid-cols-3'
            case 4:
                return 'grid-cols-4'
            case 5: 
                return 'grid-cols-5'
            case 6: 
                return 'grid-cols-6'
            case 7: 
                return 'grid-cols-7'
            case 8: 
                return 'grid-cols-8'
            case 9: 
                return 'grid-cols-9'
            case 10: 
                return'grid-cols-10'
            case 11: 
                return'grid-cols-11'
            case 12: 
                return'grid-cols-12'
            default:
                return ''
        } 
    }

    const getIconForTechStack = (stack) => {
        switch (stack) {
            case 'react':
                return <FaReact />
            case 'node':
                return <FaNodeJs />
            case 'wordpress':
                return <FaWordpressSimple/>
            case 'php':
                return <TbFileTypePhp/>
            case 'webflow':
                return <FaWebflow/>
            case 'mysql':
                return <SiMysql/>
            case 'mongodb':
                return <SiMongodb/>
            case 'aws':
                return <FaAws/>
            case 'docker':
                return <FaDocker/>
            case 'kanban':
                return <BsKanban/>
            default:
                return null
        }
    }

    return(
        <VerticalTimeline>
            {
                dataSet.map((element,index) => {
                    const { backgroundColor, fontColor, position, subheading, description, duration, technologies } = element;
                    return(
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: `${backgroundColor}`, color: `${fontColor}` }}
                            contentArrowStyle={{ borderRight: `17px solid  ${backgroundColor}` }}
                            date={duration}
                            dateClassName={`!bg-black !text-center text-white !text-2xl !p-2 rounded-full`}
                            iconStyle={{ background: `${backgroundColor}`, color: `${fontColor}` }}
                            icon={<BsPersonWorkspace />}
                        >
                            <h3 className="vertical-timeline-element-title !text-2xl">{position}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{subheading}</h4>
                            <p className='!text-sm italic'>
                                {description}
                            </p>
                            <div
                                style={{backgroundColor:fontColor}}
                                className={`grid grid-flow-row-dense text-2xl ${getColClass(technologies.techstacks.length)} grid-rows-1 p-2 mt-2 rounded-full`}>
                                {
                                    technologies.techstacks.map((techstack, subindex) => (
                                        <div key={subindex} style={{color:backgroundColor}}>{getIconForTechStack(techstack)}</div>
                                    ))
                                }
                            </div>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    )
}