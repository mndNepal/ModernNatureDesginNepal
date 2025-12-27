import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

interface Carpet {
  id: string;
  name: string;
  imageUrl: string;
}

const carpets: Carpet[] = [
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

const AllCollections: React.FC = () => {
  const [activeCarpet, setActiveCarpet] = useState<Carpet | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 16;

  // Filter carpets based on search query - only match names that START with the exact search query
  const filteredCarpets = carpets.filter((carpet) => {
    if (searchQuery.trim() === "") return true; // Show all if search is empty
    return carpet.name.toLowerCase().startsWith(searchQuery.toLowerCase());
  });

  const totalPages = Math.ceil(filteredCarpets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCarpets = filteredCarpets.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#fdfdfb] py-20">
        {/* Container with 80% width centered */}
        <div className="w-4/5 mx-auto">

          <div className="flex justify-between items-center mt-10 mb-10 px-4">
            {/* Heading - Left */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900">
              All Collections
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

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCarpets.length > 0 ? (
              currentCarpets.map((carpet) => (
                <motion.div
                  key={carpet.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-gray-200 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition flex flex-col"
                  onClick={() => setActiveCarpet(carpet)}
                >
                  {/* Image now fills entire card width */}
                  <div className="flex justify-center items-center bg-gray-200 h-[400px]">
                    <img
                      src={carpet.imageUrl}
                      alt={carpet.name}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Carpet name container */}
                  <div className="p-1 text-center bg-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {carpet.name}
                    </h2>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-600">No carpets found matching "{searchQuery}"</p>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 space-x-2">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg transition ${currentPage === index + 1
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeCarpet && (
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                key={activeCarpet.id}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
                initial={{ scale: 0.95, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
              >
                {/* Close Button */}
                <div className="absolute top-0 right-0 m-2 bg-white rounded-full z-10">
                  <button
                    onClick={() => setActiveCarpet(null)}
                    className="p-1 text-gray-600 hover:text-gray-900 transition"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Image and zoom controls */}
                <TransformWrapper>
                  {({ zoomIn, zoomOut }) => (
                    <>
                      <TransformComponent>
                        <img
                          src={activeCarpet.imageUrl}
                          alt={activeCarpet.name}
                          className="object-contain max-h-[80vh] max-w-[90vw]"
                        />
                      </TransformComponent>
                      {/* Carpet name with zoom controls */}
                      <div className="flex items-center justify-between py-4 bg-gray-200 px-4">
                        <button
                          onClick={() => zoomOut()}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full transition"
                        >
                          <Minus size={20} />
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-800">
                          {activeCarpet.name}
                        </h2>
                        <button
                          onClick={() => zoomIn()}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full transition"
                        >
                          <Plus size={20} />
                        </button>
                      </div>
                    </>
                  )}
                </TransformWrapper>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
};

export default AllCollections;