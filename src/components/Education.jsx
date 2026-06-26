import React from 'react'
import { Calendar, CheckCircle, GraduationCap } from "lucide-react";
import educ from '../assets/educ1.jpg';

export const Education = () => {
    const educationData = [
        {
            id:1,
            degree: 'Bachelors of Computer and Information Systems Engineering',
            institution: 'NED University of Engineering and Technology',
            duration: '2022 - 2026',
            details: 'Built full-stack web applications using modern technologies and software engineering practices. Completed projects involving AI, machine learning, inventory management, and fault detection systems. Participated in hackathons, innovation challenges, and technical competitions. Presented Final Year Project to industry professionals during the university exhibition. '        
        }
    ]
  return (
    <section className='text-white py-20 overflow-hidden' id='education'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>
                    Learning Path
                </p>
                <h2 className='text-4xl md:text-5xl font-extrabold
                text-white'>
                    Education.
                </h2>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
                <div className='w-full lg:w-5/12 flex justify-center' data-aos='fade-right'>
                <div className='relative'>

                    <div className='absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4 rounded-2xl shadow-lg border border-cyan-500'></div>
                    
                    <div className='relative z-10 bg-[#111a3c] rounded-2xl overflow-hidden border border-[#1f1641]'>
                        <img src={educ} 
                        alt="Education" 
                        className='w-[280px] h-[280px] md:w-[380px] md:h-[380px] object-cover transform transition-transform duration-500 hover:scale-110'/>
                    </div>
                    <div className='absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full blur-2xl'></div>

                </div>

                </div>
                <div className='w-full lg:w-6/12'
                data-aos='fade-left'>
                    {educationData.map((edu) => (
                        <div 
                        key={edu.id}
                        className='group relative p-8 rounded-2xl bg-[#111a3e] border border-[#1f1641] max-w-2xl transition-all duration-300 hover:border-primary/50 '>
                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4'>
                                <div className='flex items-center gap-3'>
                                    <div className='p-2 bg-[#050816] rounded-lg border border-primary/20 group-hover:border-primary transition-colors'>
        <GraduationCap className='text-primary' size={24}/> 
                                    </div>
                                    <div>
                <h3 className='text-2xl font-bold text-white leading-snug group-hover:text-primary transition-colors'>
                    {edu.degree}
                </h3>
                <p className='text-gray-400 mt-2 text-base'>
                    {edu.institution}
                </p>
                                    </div>
                                </div>
        <div className="flex items-center gap-2 whitespace-nowrap bg-[#050816] px-5 py-2 rounded-full border border-gray-700 min-w-[130px] justify-center">
            <Calendar size={16} className="text-primary flex-shrink-0" />
            <span className="text-sm font-medium">{edu.duration}</span>
        </div>
                            </div>
            <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                {edu.details}
            </p>
            <div className='flex items-center gap-2 text-[10px] uppercase-wider text-primary font-bold'>
                <CheckCircle size={12}/>
                Academic Excellence
            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>

    </section>
  );
};
