import { ShoppingCart, Clock, Flame } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <div className="relative overflow-hidden ">
        <img
          src={product.image}
          alt={product.name.en}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex-1 p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
              {product.name.en}
            </h3>
            <div className="text-sm text-gray-600">{product.name.hi}</div>
          </div>
          <span className="text-xl font-bold text-orange-500">
            {formatPrice(product.price)}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          {product.preparationTime && (
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-orange-500" />
              {product.preparationTime}
            </div>
          )}
          {product.spiceLevel && (
            <div className="flex items-center gap-1.5">
              <Flame
                size={16}
                className={
                  product.spiceLevel === "hot"
                    ? "text-red-500"
                    : product.spiceLevel === "medium"
                    ? "text-orange-500"
                    : "text-yellow-500"
                }
              />
              <span className="capitalize">{product.spiceLevel}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 pt-0">
        <Button className="w-full group hover:scale-[1.02] active:scale-[0.98] transition-transform">
          <ShoppingCart
            size={20}
            className="mr-2 transition-transform group-hover:rotate-12"
          />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
