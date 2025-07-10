import React from 'react';
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
            position:'Full Stack Engineer',
            subheading:'Transpire Consultants | Australia | Remote',
            description:`Crafting sleek, responsive web interfaces and powerful backend services.
                        Customizing WordPress and Webflow sites with seamless UX.
                        Deploying scalable apps using React, Node.js, and Docker.
                        Managing hosting, domains, and cloud infrastructure with care.`,
            duration:'Nov 2023 – Present',
            technologies:{
                techstacks: ['react','node','wordpress','php','webflow','mysql','mongodb','aws','docker','kanban']
            }
        },
        {
            backgroundColor: '#222831',
            fontColor: '#DFD0B8',
            position:'Full Stack Engineer',
            subheading:'Datasprig (Pvt) Ltd | Sri Lanka | Hybrid',
            description:`Delivered high-performance WordPress plugins and custom features.
                        Handled domain and server configurations with precision.
                        Led Webflow development and client-facing enhancements.
                        Collaborated in Agile teams for continuous delivery.`,
            duration:'Dec 2022 – Mar 2024',
            technologies:{
                techstacks: ['react','node','wordpress','php','webflow','mysql','mongodb','aws','docker','kanban']
            }
        },
        {
            backgroundColor: 'black',
            fontColor: 'white',
            position:'Freelance Web Engineer',
            subheading:'Fiverr | Remote',
            description:`Over 100 web projects built for clients across the globe.
                        Specialized in custom themes, plugins, and Laravel apps.
                        Integrated payment gateways and third-party APIs.
                        Balanced tech expertise with strong client communication.`,
            duration:'Jul 2021 – May 2024',
            technologies:{
                techstacks: ['react','node','wordpress','php','webflow','mysql','mongodb','aws','docker','kanban']
            }
        },
        {
            backgroundColor: '#222831',
            fontColor: '#DFD0B8',
            position:'Frontend Engineer',
            subheading:'Sotrosinfotech | india | Remote',
            description:`Combined elegant UI with stable backend logic.
                    Migrated and maintained sites across platforms.
                    Added analytics and marketing tools for insights.
                    Handled DNS, hosting, and payment integration.`,
            duration:'May 2021 – Jan 2023',
            technologies:{
                techstacks: ['react','node','wordpress','php','webflow','mysql','mongodb','aws','docker','kanban']
            }
        },
        {
            backgroundColor: 'black',
            fontColor: 'white',
            position:'Associate Web Engineer',
            subheading:'Acecam pvt ltd | Sri Lanka | Onsite',
            description:`Built secure backend systems using Spring Boot and LDAP.
                        Created asset management solutions for enterprise use.
                        Contributed to Laravel development and frontend UIs.
                        Worked closely with teams to ship user-friendly features.`,
            duration:'Oct 2020 – Apr 2022',
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