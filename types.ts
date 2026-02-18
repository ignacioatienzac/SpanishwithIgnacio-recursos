export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'Gramática' | 'Vocabulario' | 'Cultura' | 'Ejercicio';
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  link?: string;
  imageUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HOME = 'inicio',
  ABOUT = 'sobre-mi',
  RESOURCES = 'recursos',
  GAMES = 'juegos',
}