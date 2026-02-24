import React from 'react';
import { Resource } from '../types';
import { Download, ExternalLink, BookOpen, Video, Star, Info, Gamepad2 } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
  isFeatured?: boolean;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Gramática': return <BookOpen className="w-4 h-4" />;
    case 'Vocabulario': return <BookOpen className="w-4 h-4" />;
    case 'Cultura': return <Video className="w-4 h-4" />;
    case 'Juegos': return <Gamepad2 className="w-4 h-4" />;
    default: return <ExternalLink className="w-4 h-4" />;
  }
};

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, isFeatured = false }) => {
  const primaryCategory = resource.categories[0] ?? '';

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex h-full ${isFeatured ? 'flex-col md:flex-row md:h-80 border-brand-blue/30 ring-1 ring-brand-blue/10' : 'flex-col'}`}>
      
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-gray-200 ${isFeatured ? 'w-full md:w-2/5 h-64 md:h-full' : 'h-48 w-full'}`}>
         <img 
            src={resource.imageUrl || `https://picsum.photos/seed/${resource.id}/400/300`} 
            alt={resource.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
         />
         <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
            {isFeatured && (
               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-brand-red text-white shadow-sm uppercase tracking-wider">
                 <Star className="w-3 h-3 mr-1 fill-current" />
                 Recurso Destacado
               </span>
            )}
         </div>
      </div>
      
      {/* Content Container */}
      <div className={`flex-1 flex flex-col ${isFeatured ? 'p-8 justify-center' : 'p-6'}`}>
        {/* Categories row */}
        <div className="flex items-center flex-wrap gap-2 mb-2">
          {resource.categories.map((cat) => (
            <span key={cat} className="inline-flex items-center gap-1 text-xs text-brand-red font-semibold uppercase tracking-wider">
              {getCategoryIcon(cat)}
              {cat}
            </span>
          ))}
          {/* Info tooltip */}
          {resource.infoText && (
            <div className="relative group ml-auto">
              <button
                type="button"
                aria-label="Más información"
                className="flex items-center justify-center w-5 h-5 rounded-full text-slate-400 hover:text-brand-blue transition-colors"
              >
                <Info className="w-4 h-4" />
              </button>
              <div className="absolute bottom-full right-0 mb-2 w-72 bg-slate-800 text-white text-xs rounded-lg p-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 shadow-xl pointer-events-none">
                {resource.infoText}
                <div className="absolute top-full right-2 border-4 border-transparent border-t-slate-800"></div>
              </div>
            </div>
          )}
        </div>
        
        <h3 className={`font-bold text-slate-900 mb-2 font-display ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
            {resource.title}
        </h3>
        
        <p className={`text-slate-600 mb-6 flex-1 ${isFeatured ? 'text-lg' : 'text-base'}`}>
            {resource.description}
        </p>
        
        <a
          href={resource.link || '#'}
          target={resource.link ? '_blank' : undefined}
          rel={resource.link ? 'noopener noreferrer' : undefined}
          className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-slate-800 transition-colors ${isFeatured ? 'w-fit px-8 py-3 text-base' : 'w-full mt-auto'}`}
        >
          <Download className="mr-2 h-4 w-4" />
          {isFeatured ? 'Acceder ahora' : 'Acceder al Recurso'}
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;