import React from 'react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-136px)] bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    A passionate developer creating seamless digital experiences.
                </p>
            </div>
            
            <div className="mt-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="relative">
                        <div className="relative text-lg font-medium text-gray-500 space-y-6">
                            <p>
                            Hello! I'm a software engineer with a love for building intuitive and dynamic user interfaces. 
                            My journey in tech started with curiosity and has grown into a full-blown passion for solving 
                            complex problems with elegant code.
                            </p>
                            <p>
                            I specialize in the modern web stack, utilizing tools like React to build responsive 
                            applications that work beautifully across all devices. When I'm not coding, 
                            you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 relative">
                            {/* Placeholder for an image or graphic */}
                        <div className="bg-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                            <span className="text-blue-200 text-9xl font-bold opacity-20">DEV</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
