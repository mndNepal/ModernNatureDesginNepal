import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { UnifiedProduct } from './ProductUtils';

interface AllProductsViewProps {
  onProductSelect?: (product: UnifiedProduct) => void;
}

const products: UnifiedProduct[] = [

  { id: 'rug-001', name: 'Aankhi Jhyal', material: 'Hand-knotted Wool', size: "9'x12'", price: '$2,899', style: 'Traditional Persian', imageUrl: '/assets/images/products/AankhiJhyal.webp' },
  { id: 'rug-032', name: 'Retro', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Retro.webp' },
  { id: 'rug-003', name: 'Baasn', material: 'Distressed Wool', size: "8'x10'", price: '$899', style: 'Vintage Distressed', imageUrl: '/assets/images/products/baasn.webp' },
  { id: 'rug-004', name: 'Bayleaves', material: 'Wool Blend', size: "7'x9'", price: '$799', style: 'Modern Geometric', imageUrl: '/assets/images/products/BayLeaves.webp' },
  { id: 'rug-005', name: 'Bubbles', material: 'Wool Blend', size: "8'x10'", price: '$1,049', style: 'Bohemian', imageUrl: '/assets/images/products/Bubbles.webp' },
  { id: 'rug-006', name: 'Burning Rope', material: 'Wool Blend', size: "7'x9'", price: '$749', style: 'Minimal Scandinavian', imageUrl: '/assets/images/products/BurningRope.webp' },
  { id: 'rug-007', name: 'Cells', material: 'Wool Blend', size: "8'x10'", price: '$1,199', style: 'Art Deco', imageUrl: '/assets/images/products/Cells.webp' },
  { id: 'rug-008', name: 'Childhood', material: 'Hand-knotted Wool', size: "9'x12'", price: '$2,499', style: 'Traditional Persian', imageUrl: '/assets/images/products/Childhood.webp' },
  { id: 'rug-010', name: 'Festival', material: 'Synthetic Blend', size: "8'x10'", price: '$1,149', style: 'Modern Contemporary', imageUrl: '/assets/images/products/Festival.webp' },
  { id: 'rug-011', name: 'Fountain Water', material: 'Distressed Wool', size: "7'x9'", price: '$899', style: 'Vintage Distressed', imageUrl: '/assets/images/products/FountainWater.webp' },
  { id: 'rug-012', name: 'Gurung', material: 'Flatweave Wool', size: "6'x9'", price: '$699', style: 'Flatweave Kilim', imageUrl: '/assets/images/products/Gurung.webp' },
  { id: 'rug-013', name: 'Holi', material: 'Shag Wool', size: "8'x10'", price: '$1,049', style: 'Moroccan Shag', imageUrl: '/assets/images/products/Holi.webp' },
  { id: 'rug-014', name: 'Imagination', material: 'Hand-tufted Wool', size: "7'x9'", price: '$849', style: 'Hand Tufted', imageUrl: '/assets/images/products/Imagination.webp' },
  { id: 'rug-016', name: 'Jungle Tribes', material: 'Synthetic Blend', size: "6'x9'", price: '$899', style: 'Modern Contemporary', imageUrl: '/assets/images/products/JungleTribes.webp' },
  { id: 'rug-017', name: 'Lakhe Face', material: 'Wool Blend', size: "6'x9'", price: '$799', style: 'Minimal Scandinavian', imageUrl: '/assets/images/products/LakheFace.webp' },
  { id: 'rug-018', name: 'Majesty', material: 'Wool Blend', size: "5'x8'", price: '$699', style: 'Bohemian', imageUrl: '/assets/images/products/Majesty.webp' },
  { id: 'rug-019', name: 'Manaslu Circuit', material: 'Synthetic Blend', size: "6'x9'", price: '$879', style: 'Modern Contemporary', imageUrl: '/assets/images/products/ManasluCircut.webp' },
  { id: 'rug-020', name: 'Maze', material: 'Hand-knotted Wool', size: "7'x9'", price: '$1,999', style: 'Traditional Persian', imageUrl: '/assets/images/products/Maze.webp' },
  { id: 'rug-021', name: 'Mirror', material: 'Distressed Wool', size: "6'x9'", price: '$749', style: 'Vintage Distressed', imageUrl: '/assets/images/products/Mirror.webp' },
  { id: 'rug-023', name: 'Monkey Temple', material: 'Flatweave Wool', size: "5'x8'", price: '$629', style: 'Flatweave Kilim', imageUrl: '/assets/images/products/MonkeyTemple.webp' },
  { id: 'rug-024', name: 'Morning Sun', material: 'Hand-knotted Wool', size: "8'x11'", price: '$2,599', style: 'Traditional Persian', imageUrl: '/assets/images/products/MorningSun.webp' },
  { id: 'rug-025', name: 'Nagh Daha', material: 'Wool Blend', size: "9'x12'", price: '$1,599', style: 'Modern Contemporary', imageUrl: '/assets/images/products/NaghDaha.webp' },
  { id: 'rug-026', name: 'Namche Bazar', material: 'Wool Blend', size: '2\'6"x10\'', price: '$399', style: 'Modern Geometric', imageUrl: '/assets/images/products/NamcheBazar.webp' },
  { id: 'rug-027', name: 'On Board', material: 'Hand-knotted Wool', size: "8'x11'", price: '$2,399', style: 'Traditional Persian', imageUrl: '/assets/images/products/OnBoard.webp' },
  { id: 'rug-028', name: 'On The Road', material: 'Synthetic Blend', size: "7'x9'", price: '$899', style: 'Modern Contemporary', imageUrl: '/assets/images/products/OnTheRoad.webp' },
  { id: 'rug-029', name: 'Begnas Lake', material: 'Distressed Wool', size: "8'x11'", price: '$899', style: 'Vintage Distressed', imageUrl: '/assets/images/products/BegnasLake.webp' },
  { id: 'rug-030', name: 'Path', material: 'Flatweave Wool', size: "6'x9'", price: '$699', style: 'Flatweave Kilim', imageUrl: '/assets/images/products/Path.webp' },
  { id: 'rug-031', name: 'Rain Forest', material: 'Shag Wool', size: "7'x9'", price: '$849', style: 'Moroccan Shag', imageUrl: '/assets/images/products/RainForest.webp' },
  { id: 'rug-002', name: 'Attraction', material: 'Synthetic Blend', size: "8'x10'", price: '$1,299', style: 'Modern Contemporary', imageUrl: '/assets/images/products/Attraction.webp' },
  { id: 'rug-033', name: 'Sherpa Love', material: 'Synthetic Fiber', size: "6'x9'", price: '$399', style: 'Patio Deck', imageUrl: '/assets/images/products/SherpaLove.webp' },
  { id: 'rug-034', name: 'Shreepanch', material: 'Polypropylene', size: "7'x9'", price: '$549', style: 'Weather Resistant', imageUrl: '/assets/images/products/Shreepanch.webp' },
  { id: 'rug-035', name: 'Shyala', material: 'Synthetic Fiber', size: "8'x10'", price: '$429', style: 'Patio Deck', imageUrl: '/assets/images/products/Shyala.webp' },
  { id: 'rug-036', name: 'Sweet16', material: 'Polypropylene', size: "6'x9'", price: '$399', style: 'Modern Geometric', imageUrl: '/assets/images/products/Sweet16.webp' },
  { id: 'rug-037', name: 'Terai Farm', material: 'Polypropylene', size: "7'x9'", price: '$469', style: 'Vintage Distressed', imageUrl: '/assets/images/products/TeraiFarm.webp' },
  { id: 'rug-038', name: 'Thoughts', material: 'Flatweave Poly', size: "6'x9'", price: '$389', style: 'Flatweave Kilim', imageUrl: '/assets/images/products/Thoughts.webp' },
  { id: 'rug-039', name: 'Tides', material: 'Synthetic Shag', size: "6'x9'", price: '$449', style: 'Moroccan Shag', imageUrl: '/assets/images/products/Tides.webp' },
  { id: 'rug-040', name: 'Trek', material: 'Hand-woven Wool', size: "9'x12'", price: '$3,299', style: 'Handmade Artisan', imageUrl: '/assets/images/products/Trek.webp' },
  { id: 'rug-041', name: 'Tsum Valley Patan', material: 'Aged Wool', size: "8'x10'", price: '$2,799', style: 'Antique Reproduction', imageUrl: '/assets/images/products/TsumValleyPatan.webp' },
  { id: 'rug-042', name: 'Undefined Universe', material: 'Wool Blend', size: 'Custom', price: 'Quote', style: 'Custom Made', imageUrl: '/assets/images/products/UndefinedUniverse.webp' },
  { id: 'rug-043', name: 'Vines', material: 'Wool & Silk', size: "8'x10'", price: '$4,499', style: 'Artist Limited', imageUrl: '/assets/images/products/Vines.webp' },
  { id: 'rug-044', name: 'Water Brust', material: 'Jute & Cotton', size: "8'x10'", price: '$899', style: 'Natural Fiber', imageUrl: '/assets/images/products/WaterBrust.webp' },
  { id: 'rug-045', name: 'Water Coin', material: 'Wool Blend', size: "7'x9'", price: '$1,999', style: 'Designer Collaboration', imageUrl: '/assets/images/products/WaterCoin.webp' },
  { id: 'rug-046', name: 'Weave', material: 'Wool & Silk', size: "8'x10'", price: '$3,299', style: 'Art Inspired', imageUrl: '/assets/images/products/Weave.webp' },
  { id: 'rug-047', name: 'Pari', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Pari.webp' },
  { id: 'rug-048', name: 'Chakati', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Chakati.webp' },
  { id: 'rug-049', name: 'Chino', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Chino.webp' },
  { id: 'rug-050', name: 'Kaath', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Kaath.webp' },
  { id: 'rug-051', name: 'Landmark', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Landmark.webp' },
  { id: 'rug-052', name: 'Paisa', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Paisa.webp' },
  { id: 'rug-053', name: 'Ping', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Ping.webp' },
  { id: 'rug-054', name: 'Purano Jhyal', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/PuranoJhyal.webp' },
  { id: 'rug-055', name: 'Smoke', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Smoke.webp' },
  { id: 'rug-056', name: 'Mandro', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Mandro.webp' },
  { id: 'rug-057', name: 'Tihar', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Tihar.webp' },
  { id: 'rug-058', name: 'The Wall', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/TheWall.webp' },
  { id: 'rug-059', name: 'Ring', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Ring.webp' },
  { id: 'rug-060', name: 'Lalitpur', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Lalitpur.webp' },
  { id: 'rug-061', name: 'Broken Mirror', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/BrokenMirror.webp' },
  { id: 'rug-062', name: 'Illusion', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Illusion.webp' },
  { id: 'rug-063', name: 'Beehive', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Beehive.webp' },
  { id: 'rug-064', name: 'Kunda', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Kunda.webp' },
  { id: 'rug-065', name: 'Budi Aunla', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/BudiAunla.webp' },
  { id: 'rug-066', name: 'Sukool', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Sukool.webp' },
  { id: 'rug-067', name: 'Water Lilies', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/WaterLilies.webp' },
  { id: 'rug-068', name: 'Birendra Taal', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/BirendraTaal.webp' },
  { id: 'rug-069', name: 'Echo', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Echo.webp' },
  { id: 'rug-070', name: 'Kapaal', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Kapaal.webp' },
  { id: 'rug-071', name: 'Phulchoki', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Phulchoki.webp' },
  { id: 'rug-072', name: 'Thaali', material: 'Polypropylene', size: "8'x10'", price: '$599', style: 'Weather Resistant', imageUrl: '/assets/images/products/Thaali.webp' },
];

const AllProductsView = ({ onProductSelect }: AllProductsViewProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query - only match names that START with the search query
  const filteredProducts = products.filter((product) => {
    if (searchQuery.trim() === "") return true; // Show all if search is empty
    return product.name.toLowerCase().startsWith(searchQuery.toLowerCase());
  });

  const handleProductClick = (product: UnifiedProduct) => {
    onProductSelect?.(product);
  };

  const handleSearch = () => {
    // Search logic is already reactive through filteredProducts
    // This function can be used for additional actions if needed
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex justify-between items-center mt-10 mb-10 px-4">
        {/* Heading - Left */}
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 items-center">
          <img
            src="/assets/images/color-customizer/ColorCustomizer.png"
            alt="Color Customizer"
            className="w-[300px] h-[100px] object-contain"
          />
        </h1>

        {/* Search Input - Right */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="border border-gray-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-sm"
          />
          <button 
            onClick={handleSearch}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-600">No products found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProductsView;
export type { AllProductsViewProps };