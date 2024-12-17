import { CATEGORIES } from '../data/categories';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === null
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Products
        </button>
        {Object.values(CATEGORIES).map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}