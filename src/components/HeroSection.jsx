import React from "react";
import { Download } from "lucide-react";
import hero from '../assets/hero.jpeg';

export const HeroSection = () => {
  return (
    <section className="relative w-full" data-aos="zoom-in-up">
      {/* Background Glow */}
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-2/3 bg-gradient-to-br from-[#0c7fac] blur-2xl opacity-40"></div>
        <div className="h-20 w-3/4 bg-gradient-to-r from-[#289eff] opacity-40 blur-2xl"></div>
      </div>

      {/* Container */}
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 max-w-2xl lg:max-w-none md:max-w-3xl mx-auto">
          <div className="lg:py-6">
            <div className="text-center lg:text-left">
              <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">
                  Ramna Kabeer
                </span>
                👋
              </h1>
            </div>

            <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
              Passionate about building meaningful digital experiences that
              blend creativity, technology, and innovation. I enjoy turning
              complex ideas into intuitive solutions and continuously exploring
              new technologies to create impactful products.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-9 flex-col sm:flex-row">
              {/* Hire Me Button */}
              <button
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
>
  <span className="absolute inset-0 rounded-full group-hover:scale-105 transition-all duration-300 bg-primary"></span>
  <span className="relative text-white font-medium">
    Hire Me
  </span>
</button>

              {/* Download Resume Button */}
              <a
                href="/Resume.pdf"
                download
                className="border border-primary px-6 md:px-7 py-3 rounded-full flex items-center justify-center gap-2 text-primary hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-max"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
          <div className="lg:h-full md:flex">
            <div className="flex w-full h-96 min-h-96 lg:min-h-[none] lg:w-full lg:h-full items-center relative">
               <div className="absolute z-0 top-1/2 -translate-y-1/2  w-5/6 right-0 h-[calc(80%+20px)] bg-linear-to-r opacity-25 from-[#0c64ac] to-primary blur-2xl"></div>
               <div className="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg border border-cyan-500">
               <img 
               src={hero} 
               alt="Hero pic"
               width="500"
               height="auto"
               loading="lazy"
               className="w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] object-cover"
               />

               </div>

               

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};