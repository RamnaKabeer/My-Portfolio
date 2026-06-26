import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkedAlt } from 'react-icons/fa'
import { HiRefresh } from 'react-icons/hi';

export const ContactSection = () => {
    const contactInfo = [
        {
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'ramnakabeer@gmail.com',
            link: 'mailto:ramnakabeer@gmail' 
        },
        {
            id: 2,
            icon: FaPhone,
            title: 'Phone',
            value: '+92 332 1306639',
            link: 'tel:+92 332 1306639' 
        },
        {
            id: 3,
            icon: FaLinkedin,
            title: 'Linkedin',
            value: 'Ramna Kabeer',
            link: 'https://www.linkedin.com/in/ramna-kabeer' 
        },
        {
            id: 1,
            icon: FaMapMarkedAlt,
            title: 'Location',
            value: 'Karachi, Pakistan',
            link: 'null' 
        }
    ];

  return (
  <section className="py-20 bg-gray-900" id="contact">
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          Let's Connect.
        </h2>
        <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm passionate about building modern web applications,
            AI-powered solutions, and workflow automations. If you're
            looking for a frontend, full-stack, or AI-focused developer
            for your team or project, I'd love to hear from you. Let's
            connect and create something impactful.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;

              return (
                <div
                  key={info.id}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </div>

                  <div>
                    <h4 className="text-white font-medium text-sm">
                      {info.title}
                    </h4>

                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 text-sm hover:text-primary transition-colors"
                        target={
                          info.title === "Location"
                            ? "_self"
                            : "_blank"
                        }
                        rel={
                          info.title === "Location"
                            ? undefined
                            : "noopener noreferrer"
                        }
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-sm">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className='bg-gray-800 rounded-lg p-6'>
            <form>
                <div className='m-6'>
                    <label htmlFor='email'
                    className='text-whote block mb-2 text-sm font-medium'>
                        Email
                    </label>
                    <input type='email' id='email'
                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                    placeholder='your@email.com'
                    required/>
                </div>
                <div className='m-6'>
                    <label htmlFor='message'
                    className='text-whote block mb-2 text-sm font-medium'>
                        Message
                    </label>
                    <textarea
                    id='message'
                     type='message' id='message'
                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                    placeholder='Your Message ....'
                    rows="4"
                    required/>
                </div>
                <div className="m-6">
                    <button
                    type="submit"
                    className="w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition-colors">
                    Send Message
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </section>
)};