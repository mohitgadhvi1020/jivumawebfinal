export interface Product {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  preparationTime?: string;
  spiceLevel?: 'mild' | 'medium' | 'hot';
}