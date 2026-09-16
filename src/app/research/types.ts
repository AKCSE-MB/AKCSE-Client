export type Category = 'Life' | 'Tech';

export interface ResearchPlaceholder {
  label: string;
  gradient?: string;
  bgColor?: string;
  dark: boolean;
}

export interface ResearchArticle {
  id: number;
  category: Category;
  titleKo: string;
  subtitle: string;
  placeholder: ResearchPlaceholder;
  thumbnail?: string;
  author?: string;
  content?: string;
}
