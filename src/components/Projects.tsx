import React, { useState } from 'react';
import { Modal } from './Modal';
import { ArrowRight, Maximize2 } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technicalDetails: string[];
}
const projectsData: Project[] = [
{
  id: 1,
  title: 'Modern Floor Heating',
  category: 'Heating',
  image:
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description:
  'Complete installation of a hydronic radiant floor heating system in a 3,000 sq ft newly constructed modern home. The system provides even, energy-efficient heat throughout the entire living space.',
  technicalDetails: [
  'PEX tubing network',
  'High-efficiency condensing boiler',
  'Smart multi-zone thermostats',
  'Automated pressure regulation']

},
{
  id: 2,
  title: 'External Heat Pump Retrofit',
  category: 'Cooling & Heating',
  image:
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description:
  'Installation of a high-capacity external air-source heat pump for a historic home, providing modern climate control without requiring invasive interior ductwork or renovation.',
  technicalDetails: [
  '18 SEER Heat Pump',
  'Minimal interior footprint',
  'Weather-resistant external housing',
  'Integrated with existing radiators']

},
{
  id: 3,
  title: 'Full Plumbing Overhaul',
  category: 'Plumbing',
  image:
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description:
  "Complete redesign and replacement of a 50-year-old home's plumbing system. Included new main lines, custom manifold distribution, and high-end fixture installations.",
  technicalDetails: [
  'Copper main lines',
  'PEX manifold system',
  'Tankless water heater integration',
  'Advanced leak detection sensors']

},
{
  id: 4,
  title: 'Industrial Boiler Setup',
  category: 'Heating',
  image:
  'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description:
  'Commercial-grade boiler installation for a boutique hotel, ensuring consistent hot water delivery and heating across 20+ rooms simultaneously.',
  technicalDetails: [
  'Dual commercial boilers',
  'Redundant pump system',
  'Custom welded steel piping',
  'Digital BMS integration']

},
{
  id: 5,
  title: 'Smart Climate Control',
  category: 'System Design',
  image:
  'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description:
  'Design and implementation of a fully automated home climate system, integrating HVAC, floor heating, and ventilation into a single smart interface.',
  technicalDetails: [
  'Centralized control hub',
  'Room-by-room micro-zoning',
  'Humidity control integration',
  'Energy usage analytics']

},
{
  id: 6,
  title: 'Custom Radiator Design',
  category: 'Heating',
  image:
  'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description:
  'Installation of architectural, high-output radiators in a luxury loft space. The system balances aesthetic requirements with the high heating demands of an open-plan space.',
  technicalDetails: [
  'Cast iron architectural radiators',
  'Custom pipe routing',
  'Thermostatic valves',
  'High-flow circulation pumps']

}];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section id="projects" className="py-24 bg-brandBlack text-brandWhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Featured Work
            </h2>
            <h3 className="text-4xl font-display font-bold mb-4">
              Engineering in Action
            </h3>
            <p className="text-brandWhite/60 text-lg">
              Explore our portfolio of precision installations, from residential
              upgrades to complex commercial systems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) =>
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-sm cursor-pointer bg-brandWhite/5 border border-white/10"
            onClick={() => setSelectedProject(project)}>
            
              <div className="aspect-[4/3] overflow-hidden">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h4 className="text-xl font-display font-bold mb-2">
                  {project.title}
                </h4>
                <div className="flex items-center text-sm font-medium text-brandWhite/70 group-hover:text-primary transition-colors">
                  View Details{' '}
                  <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform" />
                
                </div>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-brandBlack/50 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                <Maximize2 size={18} className="text-brandWhite" />
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}>
        
        {selectedProject &&
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-full object-cover min-h-[300px] md:min-h-full" />
            
            </div>
            <div className="md:w-1/2 p-8 md:p-12 bg-brandWhite text-brandBlack">
              <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl font-display font-bold mb-6">
                {selectedProject.title}
              </h3>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-brandBlack/50 uppercase tracking-wider mb-3">
                  Project Overview
                </h4>
                <p className="text-brandBlack/80 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-brandBlack/50 uppercase tracking-wider mb-3">
                  Technical Details
                </h4>
                <ul className="space-y-2">
                  {selectedProject.technicalDetails.map((detail, idx) =>
                <li
                  key={idx}
                  className="flex items-center gap-3 text-brandBlack/80">
                  
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {detail}
                    </li>
                )}
                </ul>
              </div>
            </div>
          </div>
        }
      </Modal>
    </section>);

}