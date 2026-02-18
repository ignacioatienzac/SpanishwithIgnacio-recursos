import React from 'react';
import { SectionId } from '../types';

const AboutSection: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Placeholder - Left on Desktop (row), Top on Mobile (col) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-md w-full">
              <img 
                src="https://picsum.photos/600/800" 
                alt="Ignacio teaching" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent flex items-end">
                <p className="text-white p-6 font-semibold text-lg">
                  "Aprender un idioma es abrir una puerta a un mundo nuevo."
                </p>
              </div>
            </div>
          </div>

          {/* Text Content - Right on Desktop, Bottom on Mobile */}
          <div className="w-full lg:w-1/2 prose prose-lg text-slate-600 text-justify">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;