import React, { useState } from 'react';
import { SectionId, Resource } from '../types';
import ResourceCard from './ResourceCard';
import { Filter } from 'lucide-react';

const mockResources: Resource[] = [
  {
    id: 'cobi-spanish',
    title: 'CobiSpanish',
    description: '¡Novedad! La plataforma que estoy diseñando para llevar tu español al siguiente nivel. Un espacio único de aprendizaje.',
    category: 'Cultura',
    level: 'Intermedio',
    imageUrl: 'https://picsum.photos/id/180/800/600'
  },
  {
    id: '1',
    title: 'Guía Definitiva del Subjuntivo',
    description: 'Aprende a usar el subjuntivo sin miedo con esta guía paso a paso y ejercicios prácticos.',
    category: 'Gramática',
    level: 'Intermedio',
    imageUrl: 'https://picsum.photos/id/24/400/300'
  },
  {
    id: '2',
    title: '100 verbos más usados',
    description: 'Lista esencial de verbos para empezar a hablar desde el primer día.',
    category: 'Vocabulario',
    level: 'Principiante',
    imageUrl: 'https://picsum.photos/id/30/400/300'
  },
  {
    id: '3',
    title: 'La Cultura del Tapeo',
    description: 'Un vídeo explicativo sobre las costumbres gastronómicas en España.',
    category: 'Cultura',
    level: 'Avanzado',
    imageUrl: 'https://picsum.photos/id/42/400/300'
  },
  {
    id: '4',
    title: 'Ejercicios de "Por" y "Para"',
    description: 'Hojas de trabajo descargables para dominar estas dos preposiciones difíciles.',
    category: 'Ejercicio',
    level: 'Intermedio',
    imageUrl: 'https://picsum.photos/id/50/400/300'
  },
  {
    id: '5',
    title: 'Podcast: Viaje por Andalucía',
    description: 'Mejora tu comprensión auditiva con este episodio sobre el sur de España.',
    category: 'Cultura',
    level: 'Intermedio',
    imageUrl: 'https://picsum.photos/id/60/400/300'
  },
  {
    id: '6',
    title: 'Flashcards: La Casa',
    description: 'Tarjetas de vocabulario visual para aprender los objetos del hogar.',
    category: 'Vocabulario',
    level: 'Principiante',
    imageUrl: 'https://picsum.photos/id/70/400/300'
  }
];

const ResourceSection: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Principiante' | 'Intermedio' | 'Avanzado'>('Todos');

  // Separate the featured resource
  const featuredId = 'cobi-spanish';
  const featuredResource = mockResources.find(r => r.id === featuredId);
  const otherResources = mockResources.filter(r => r.id !== featuredId);

  // Apply filters
  const isMatch = (r: Resource) => filter === 'Todos' || r.level === filter;
  
  const showFeatured = featuredResource && isMatch(featuredResource);
  const filteredOthers = otherResources.filter(isMatch);
  
  const hasResources = showFeatured || filteredOthers.length > 0;

  return (
    <section id={SectionId.RESOURCES} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl leading-8 font-extrabold tracking-tight text-brand-blue sm:text-5xl font-display">
              Recursos
            </h2>
          </div>
          
          <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
            <Filter className="text-slate-400 w-5 h-5 ml-2" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="form-select block w-full pl-3 pr-10 py-2 text-base border-none focus:outline-none focus:ring-0 sm:text-sm rounded-md text-slate-700 bg-transparent cursor-pointer font-medium"
            >
              <option value="Todos">Todos los niveles</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Resource - Occupies full width */}
          {showFeatured && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <ResourceCard resource={featuredResource} isFeatured={true} />
            </div>
          )}

          {/* Other Resources */}
          {filteredOthers.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        
        {!hasResources && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No se encontraron recursos para este filtro.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceSection;