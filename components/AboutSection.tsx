import React from 'react';
import { SectionId } from '../types';

const AboutSection: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content - Left on Desktop, Bottom on Mobile */}
          <div className="w-full lg:w-2/5 prose prose-lg text-slate-600 text-justify order-2 lg:order-1">
            <p className="mb-6 text-lg leading-relaxed">
              ¡Hola, profe! Bienvenido a mi biblioteca de recursos. He creado este espacio para compartir contigo los recursos que he ido puliendo en mis clases durante años. Entra, busca y descarga lo que necesites para tus próximas clases.
            </p>
            
            <h3 className="text-2xl font-bold text-brand-blue mb-4 mt-8 font-display text-left">¿Qué encontrarás aquí?</h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-brand-red mr-3 mt-1">✓</span>
                <span><strong>Juegos:</strong> Recursos gamificados para divertirte con tus alumnos y ahorrar tiempo preparando.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-brand-red mr-3 mt-1">✓</span>
                <span><strong>Recursos lingüísticos:</strong> Actividades para practicar vocabulario y gramática de diferentes niveles.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-brand-red mr-3 mt-1">✓</span>
                <span><strong>Recursos culturales:</strong> Ejercicios e ideas para trabajar la interculturalidad en el aula.</span>
              </li>
            </ul>
          </div>

          {/* Image - Right on Desktop, Top on Mobile */}
          <div className="w-full lg:w-3/5 flex justify-center order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full">
              <img 
                src="images/SpanishwithIgnacio-pic.JPG" 
                alt="Ignacio teaching" 
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;