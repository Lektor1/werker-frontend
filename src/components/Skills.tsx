import React from 'react';
import {
  Thermometer,
  Droplets,
  Wind,
  Settings,
  Home,
  Wrench } from
'lucide-react';
export function Skills() {
  const skills = [
  {
    icon: <Thermometer size={32} />,
    title: 'Heating Systems',
    description:
    'Installation of modern boilers, radiators, and comprehensive floor heating solutions for optimal comfort.'
  },
  {
    icon: <Home size={32} />,
    title: 'External Solutions',
    description:
    'Specialized external heating systems that provide powerful climate control without requiring interior home renovation.'
  },
  {
    icon: <Droplets size={32} />,
    title: 'Plumbing Networks',
    description:
    'Expert handling of all plumbing types, from simple repairs to complete household water network installations.'
  },
  {
    icon: <Settings size={32} />,
    title: 'System Design',
    description:
    'Full architectural design of plumbing systems including cold/hot intake, outtake, and pressure balancing.'
  },
  {
    icon: <Wind size={32} />,
    title: 'Cooling & Fans',
    description:
    'Installation of high-efficiency AC units, ventilation systems, and industrial-grade fans.'
  },
  {
    icon: <Wrench size={32} />,
    title: 'Maintenance',
    description:
    'Ongoing support, diagnostics, and technical maintenance for all installed heating, cooling, and plumbing systems.'
  }];

  return (
    <section
      id="skills"
      className="py-24 bg-brandGray-50 border-y border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Our Capabilities
          </h2>
          <h3 className="text-4xl font-display font-bold text-brandBlack mb-4">
            Comprehensive Technical Services
          </h3>
          <p className="text-brandBlack/60 text-lg">
            From blueprint to final installation, we handle every aspect of your
            home's vital systems with industrial precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) =>
          <div
            key={index}
            className="bg-brandWhite p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all group">
            
              <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-brandWhite transition-colors">
                {skill.icon}
              </div>
              <h4 className="text-xl font-display font-bold text-brandBlack mb-3">
                {skill.title}
              </h4>
              <p className="text-brandBlack/70 leading-relaxed">
                {skill.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}