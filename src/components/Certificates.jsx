import { Award, Calendar, ExternalLink, ShieldCheckIcon } from 'lucide-react';
import React from 'react'

export const Certificates = () => {
    const certifications = [
        {
            id: 1,
            title: "Google AI Essentials",
            issuer:"Coursera / Meta",
            date: "Dec 2025",
            link: "../certificates/1.png",
            desc: "Completed Google's foundational AI program covering generative AI, prompt engineering, responsible AI, and practical applications of AI tools in professional workflows."
        },
        {
            id: 2,
            title: "Mastering AI Email Agents",
            issuer:"DataCrumbs",
            date: "Oct 2025",
            link: "../certificates/2.png",
            desc: "Learned to design and deploy AI-powered email agents capable of processing emails, generating intelligent responses, and automating communication workflows using modern AI tools."
        },
        {
            id: 3,
            title: "N8N Chatbot Lab",
            issuer:"DataCrumbs",
            date: "Nov 2025",
            link: "../certificates/3.png",
            desc: "Built AI chatbot workflows in n8n by integrating LLMs, APIs, and automation tools to create intelligent conversational experiences and streamline business processes."
        },
        {
            id: 4,
            title: "GoodCore Codesphere 2.0 Build4Better Hackathon",
            issuer:"NED Software Community in collaboration with Contour Software and GoodCore ",
            date: "Nov 2025",
            link: "../certificates/4.png",
            desc: "Participated in a 24-hour hackathon focused on rapid prototyping and problem-solving, collaborating with a team to design and develop an innovative solution under strict time constraints"
        }

    ]


  return (
    <section className='text-white py-20' id='certificates'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>
                    Acheivements 
                </p>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                    Certifications.
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {certifications.map((cap) => (
                    <div key={cap.id} data-aos='zoom-in'
                    className='group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]'>
                        <div className='absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform'>
                            <Award className='text-white' size={24}/>
                        </div>
                        <div className='flex items-center gap-4 mb-4 text-xs text-gray-400'>
                            <span className='flex items-center gap-1'>
                                <ShieldCheckIcon size={14}
                                className='text-primary'/>
                                {cap.issuer}
                            </span>
                            <span className='flex items-center gap-1'>
                                <Calendar size={14}/>
                                {cap.date}
                            </span>
                        </div>
                        <h3 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
                            {cap.title}
                        </h3>
                        <p className='text-gray-400 text-sm mb-6 line-clamp-2'>
                            {cap.desc}
                        </p>
                        <a
                        href={cap.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                         View Certificate <ExternalLink size={14} />
                        </a>
                    </div>
                ))}

            </div>

        </div>

    </section>
  )
}
