import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { OpportunityDialog } from '../components/OpportunityDialog';
import { useDialog } from '../hooks/useDialog';

export function HomePage() {
  const dialog = useDialog(true); // Open by default

  useEffect(() => {
    // Auto-close after 10 seconds if user hasn't interacted
    const timer = setTimeout(() => {
      dialog.close();
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <OpportunityDialog 
        isOpen={dialog.isOpen} 
        onClose={dialog.close}
        showCorner={dialog.showCorner}
        onCornerClick={dialog.open}
      />
    </>
  );
}