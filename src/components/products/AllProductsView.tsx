import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { UnifiedProduct } from './ProductUtils';

interface AllProductsViewProps {
  onProductSelect?: (product: UnifiedProduct) => void;
}

const products: UnifiedProduct[] = [

{ id: 'rug-001', name: 'Aankhi Jhyal', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/AankhiJhyal.webp' },
{ id: 'rug-002', name: 'Attraction', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Attraction.webp' },
{ id: 'rug-003', name: 'Baasn', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/baasn.webp' },
{ id: 'rug-004', name: 'Bayleaves', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/BayLeaves.webp' },
{ id: 'rug-005', name: 'Begnas Lake', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/BegnasLake.webp' },
{ id: 'rug-006', name: 'Beehive', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Beehive.webp' },
{ id: 'rug-007', name: 'Birendra Taal', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/BirendraTaal.webp' },
{ id: 'rug-008', name: 'Broken Mirror', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/BrokenMirror.webp' },
{ id: 'rug-009', name: 'Budi Aunla', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/BudiAunla.webp' },
{ id: 'rug-010', name: 'Bubbles', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Bubbles.webp' },
{ id: 'rug-011', name: 'Burning Rope', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/BurningRope.webp' },
{ id: 'rug-012', name: 'Cells', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Cells.webp' },
{ id: 'rug-013', name: 'Chakati', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Chakati.webp' },
{ id: 'rug-014', name: 'Chino', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Chino.webp' },
{ id: 'rug-015', name: 'Childhood', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Childhood.webp' },
{ id: 'rug-016', name: 'Echo', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Echo.webp' },
{ id: 'rug-017', name: 'Festival', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Festival.webp' },
{ id: 'rug-018', name: 'Fountain Water', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/FountainWater.webp' },
{ id: 'rug-019', name: 'Gurung', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Gurung.webp' },
{ id: 'rug-020', name: 'Holi', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Holi.webp' },
{ id: 'rug-021', name: 'Illusion', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Illusion.webp' },
{ id: 'rug-022', name: 'Imagination', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Imagination.webp' },
{ id: 'rug-023', name: 'Jungle Tribes', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/JungleTribes.webp' },
{ id: 'rug-024', name: 'Kaath', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Kaath.webp' },
{ id: 'rug-025', name: 'Kapaal', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Kapaal.webp' },
{ id: 'rug-026', name: 'Kunda', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Kunda.webp' },
{ id: 'rug-027', name: 'Lakhe Face', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/LakheFace.webp' },
{ id: 'rug-028', name: 'Lalitpur', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Lalitpur.webp' },
{ id: 'rug-029', name: 'Landmark', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Landmark.webp' },
{ id: 'rug-030', name: 'Majesty', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Majesty.webp' },
{ id: 'rug-031', name: 'Manaslu Circuit', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/ManasluCircut.webp' },
{ id: 'rug-032', name: 'Mandro', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Mandro.webp' },
{ id: 'rug-033', name: 'Maze', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Maze.webp' },
{ id: 'rug-034', name: 'Mirror', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Mirror.webp' },
{ id: 'rug-035', name: 'Monkey Temple', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/MonkeyTemple.webp' },
{ id: 'rug-036', name: 'Morning Sun', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/MorningSun.webp' },
{ id: 'rug-037', name: 'Nagh Daha', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/NaghDaha.webp' },
{ id: 'rug-038', name: 'Namche Bazar', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/NamcheBazar.webp' },
{ id: 'rug-039', name: 'On Board', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/OnBoard.webp' },
{ id: 'rug-040', name: 'On The Road', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/OnTheRoad.webp' },
{ id: 'rug-041', name: 'Paisa', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Paisa.webp' },
{ id: 'rug-042', name: 'Pari', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Pari.webp' },
{ id: 'rug-043', name: 'Path', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Path.webp' },
{ id: 'rug-044', name: 'Phulchoki', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Phulchoki.webp' },
{ id: 'rug-045', name: 'Ping', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Ping.webp' },
{ id: 'rug-046', name: 'Purano Jhyal', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/PuranoJhyal.webp' },
{ id: 'rug-047', name: 'Rain Forest', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/RainForest.webp' },
{ id: 'rug-048', name: 'Retro', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Retro.webp' },
{ id: 'rug-049', name: 'Ring', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Ring.webp' },
{ id: 'rug-050', name: 'Sherpa Love', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/SherpaLove.webp' },
{ id: 'rug-051', name: 'Shreepanch', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Shreepanch.webp' },
{ id: 'rug-052', name: 'Shyala', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Shyala.webp' },
{ id: 'rug-053', name: 'Smoke', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Smoke.webp' },
{ id: 'rug-054', name: 'Sweet16', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Sweet16.webp' },
{ id: 'rug-055', name: 'Sukool', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Sukool.webp' },
{ id: 'rug-056', name: 'Terai Farm', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/TeraiFarm.webp' },
{ id: 'rug-057', name: 'Thaali', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Thaali.webp' },
{ id: 'rug-058', name: 'Thoughts', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Thoughts.webp' },
{ id: 'rug-059', name: 'Tides', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Tides.webp' },
{ id: 'rug-060', name: 'Tihar', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Tihar.webp' },
{ id: 'rug-061', name: 'The Wall', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/TheWall.webp' },
{ id: 'rug-062', name: 'Trek', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Trek.webp' },
{ id: 'rug-063', name: 'Tsum Valley Patan', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/TsumValleyPatan.webp' },
{ id: 'rug-064', name: 'Undefined Universe', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/UndefinedUniverse.webp' },
{ id: 'rug-065', name: 'Vines', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Vines.webp' },
{ id: 'rug-066', name: 'Water Brust', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/WaterBrust.webp' },
{ id: 'rug-067', name: 'Water Coin', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/WaterCoin.webp' },
{ id: 'rug-068', name: 'Water Lilies', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/WaterLilies.webp' },
{ id: 'rug-069', name: 'Weave', imageUrl: 'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/products/Weave.webp' },

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
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-0 [@media(min-width:768px)_and_(max-width:820px)]:w-[90%] [@media(min-width:768px)_and_(max-width:820px)]:px-2">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mt-0 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10 px-2 sm:px-4 [@media(min-width:768px)_and_(max-width:820px)]:max-w-none [@media(min-width:768px)_and_(max-width:820px)]:px-4">
        {/* Heading */}
        <h1 className="font-bold text-gray-900">
          <img
            src="https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/extra_images/ChatGPT%20Image%20Nov%208%2C%202025%2C%2005_19_23%20PM.png"
            alt="Color Customizer"
            className="w-[150px] h-[50px] sm:w-[200px] sm:h-[70px] md:w-[250px] md:h-[85px] lg:w-[300px] lg:h-[100px] object-contain"
          />
        </h1>

        {/* Search Input */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="border border-gray-900 rounded-lg px-3 py-2 focus:outline-none focus:ring-gray-900 focus:border-gray-900 text-sm w-[180px] md:w-[220px] lg:w-[280px]"
          />
          <button 
            onClick={handleSearch}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-sm w-[80px] md:w-[90px] lg:w-[100px]"
          >
            Search
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 [@media(min-width:768px)_and_(max-width:820px)]:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 [@media(min-width:768px)_and_(max-width:820px)]:gap-6 [@media(min-width:768px)_and_(max-width:820px)]:px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-8 sm:py-12">
            <p className="text-base sm:text-lg md:text-xl text-gray-600">No products found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProductsView;
export type { AllProductsViewProps };