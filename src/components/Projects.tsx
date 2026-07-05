import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { fetchAllProjects, getMediaUrl } from '../services/projectService';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technicalDetails: string[];
}

// Transform Strapi article data to Project interface
const transformArticleToProject = (article: any): Project => {
  return {
    id: article.id,
    title: article.title || 'Untitled',
    category: article.category?.name || 'General',
    image: getMediaUrl(article.cover) || 'https://via.placeholder.com/800x600?text=No+Image',
    description: article.description || 'No description available',
    technicalDetails: article.technicalDetails ? article.technicalDetails.split(',').map((detail: string) => detail.trim()) : [],
  };
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const articles = await fetchAllProjects();
        
        if (articles && Array.isArray(articles)) {
          const transformedProjects = articles.map(transformArticleToProject);
          setProjects(transformedProjects);
        } else {
          setError('No projects found');
        }
      } catch (err) {
        console.error('Failed to load projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);
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
          {loading && (
            <div className="col-span-full py-16 text-center">
              <p className="text-brandWhite/60">Loading projects...</p>
            </div>
          )}

          {error && (
            <div className="col-span-full py-16 text-center">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          {!loading && !error && projects.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <p className="text-brandWhite/60">No projects available yet</p>
            </div>
          )}

          {!loading && projects.map((project) =>
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