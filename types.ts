export interface Resource {
  id: string;
  title: string;
  description: string;
  categories: string[];
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  link?: string;
  imageUrl?: string;
  infoText?: string;
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