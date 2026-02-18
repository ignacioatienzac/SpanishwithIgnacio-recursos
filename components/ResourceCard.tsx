import React from 'react';
import { Resource } from '../types';
import { Download, ExternalLink, BookOpen, Video, Star } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
  isFeatured?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, isFeatured = false }) => {
  const getIcon = () => {
    switch (resource.category) {
      case 'Gramática': return <BookOpen className="w-5 h-5" />;
      case 'Vocabulario': return <BookOpen className="w-5 h-5" />;
      case 'Cultura': return <Video className="w-5 h-5" />;
      default: return <ExternalLink className="w-5 h-5" />;
    }
  };

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
        <div className="flex items-center space-x-2 text-sm text-brand-red font-semibold mb-2 uppercase tracking-wider">
          {getIcon()}
          <span>{resource.category}</span>
        </div>
        
        <h3 className={`font-bold text-slate-900 mb-2 font-display ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
            {resource.title}
        </h3>
        
        <p className={`text-slate-600 mb-6 flex-1 ${isFeatured ? 'text-lg' : 'text-base'}`}>
            {resource.description}
        </p>
        
        <button className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-slate-800 transition-colors ${isFeatured ? 'w-fit px-8 py-3 text-base' : 'w-full mt-auto'}`}>
          <Download className="mr-2 h-4 w-4" />
          {isFeatured ? 'Acceder ahora' : 'Acceder al Recurso'}
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;