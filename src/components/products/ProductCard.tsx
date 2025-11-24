// import { useNavigate } from 'react-router-dom';
// import { UnifiedProduct } from './ProductUtils';
// import { hasDetailedPage, getProductDetailUrl } from '@/utils/navigation';

// interface ProductCardProps {
//   product: UnifiedProduct;
//   onProductClick?: (product: UnifiedProduct) => void;
// }

// const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
//   const navigate = useNavigate();
  
//   const handleClick = () => {
//     navigate(getProductDetailUrl(product.id));
//   };
  
//   return (
//     <div 
//       className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group cursor-pointer"
//       onClick={handleClick}
//     >
     
//       <div className="aspect-[4/5] overflow-hidden relative">
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           className="w-full h-full group-hover:scale-105 transition-transform duration-300"
//           loading="lazy"
//           onError={(e) => {
//             const target = e.target as HTMLImageElement;
//             target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
//           }}
//         />
//       </div>
      
     
//       <div className="p-4">
//         <h3 className="text-center font-medium text-charcoal line-clamp-2">
//           {product.name}
//         </h3>
//         <div className="space-y-1 text-sm text-charcoal/60">
          
        
//           {product.comfort && <p>Comfort: {product.comfort}</p>}
        
//           {product.durability && <p>Durability: {product.durability}</p>}
//           {product.weatherResistance && <p>Weather Resistance: {product.weatherResistance}</p>}
//           {product.artisan && <p>Artisan: {product.artisan}</p>}
       
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// export type { ProductCardProps };








// import { useNavigate } from 'react-router-dom';
// import { UnifiedProduct } from './ProductUtils';

// interface ProductCardProps {
//   product: UnifiedProduct;
//   onProductClick?: (product: UnifiedProduct) => void;
// }

// const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
//   const navigate = useNavigate();
  
//   const handleClick = () => {
//     navigate(`/customize/${product.id}`);

//     if (onProductClick) onProductClick(product);
//   };
  
//   return (
//     <div 
//       className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group cursor-pointer"
//       onClick={handleClick}
//     >
 
//       <div className="aspect-[4/5] overflow-hidden relative">
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           className="w-full h-full group-hover:scale-105 transition-transform duration-300"
//           loading="lazy"
//           onError={(e) => {
//             const target = e.target as HTMLImageElement;
//             target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
//           }}
//         />
//       </div>
      

//       <div className="p-4">
//         <h3 className="text-center font-medium text-charcoal line-clamp-2">
//           {product.name}
//         </h3>
//         <div className="space-y-1 text-sm text-charcoal/60">
//           {product.comfort && <p>Comfort: {product.comfort}</p>}
//           {product.durability && <p>Durability: {product.durability}</p>}
//           {product.weatherResistance && <p>Weather Resistance: {product.weatherResistance}</p>}
//           {product.artisan && <p>Artisan: {product.artisan}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// export type { ProductCardProps };









import { useNavigate } from 'react-router-dom';
import { UnifiedProduct } from './ProductUtils';

interface ProductCardProps {
  product: UnifiedProduct;
  onProductClick?: (product: UnifiedProduct) => void;
}

const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Create a mapping of product names to customize routes
    const customizeProducts = [
      "aankhi jhyal",
      "attraction",
      "baasn",
      "bayleaves",
      "bubbles",
      "burning rope",
      "cells",
      "childhood",
      "festival",
      "fountain water",
      "gurung",
      "holi",
      "imagination",
      "jungle tribes",
      "lakhe face",
      "majesty",
      "manaslu circuit",
      "maze",
      "mirror",
      "monkey temple",
      "morning sun",
      "nagh daha",
      "namche bazar",
      "on board",
      "on the road",
      "begnas lake",
      "path",
      "rain forest",
      "retro",
      "sherpa love",
      "shreepanch",
      "shyala",
      "sweet16",
      "terai farm",
      "thoughts",
      "tides",
      "trek",
      "tsum valley patan",
      "undefined universe",
      "vines",
      "water brust",
      "water coin",
      "weave",
      "pari",
      "chakati",
      "chino",
      "kaath",
      "landmark",
      "paisa",
      "ping",
      "purano jhyal",
      "smoke",
      "mandro",
      "tihar",
      "the wall",
      "ring",
      "lalitpur",
      "broken mirror",
      "illusion",
      "beehive",
      "kunda",
      "budi aunla",
      "sukool",
      "water lilies",
      "birendra taal",
      "echo",
      "kapaal",
      "phulchoki",
      "thaali"
    ];

    const normalizedName = product.name.toLowerCase().replace(/\s+/g, "");

    if (customizeProducts.some(name => name.replace(/\s+/g, "") === normalizedName)) {
      navigate(`/products/${normalizedName}`);
    } else {
      navigate(`/product/${product.id}`);
    }

    if (onProductClick) onProductClick(product);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-center font-medium text-charcoal line-clamp-2">
          {product.name}
        </h3>
        <div className="space-y-1 text-sm text-charcoal/60">
          {product.comfort && <p>Comfort: {product.comfort}</p>}
          {product.durability && <p>Durability: {product.durability}</p>}
          {product.weatherResistance && <p>Weather Resistance: {product.weatherResistance}</p>}
          {product.artisan && <p>Artisan: {product.artisan}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
export type { ProductCardProps };



