import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { products } from '../data/products';

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
      
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}