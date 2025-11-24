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
  { id: 'rug-001', name: 'Aankhi Jhyal', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763738055/Aankhi_Jhyal_Photorealistic_tv85p8.jpg' },
  { id: 'rug-002', name: 'Attraction', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763738052/Attraction10_Photorealistic_g9z17g.jpg' },
  { id: 'rug-003', name: 'Baasn', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737722/Baasn_Photorealistic_hppdaq.jpg' },
  { id: 'rug-004', name: 'Bayleaves', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736690/bayleaves_Photorealistic_waod6o.jpg' },
  { id: 'rug-005', name: 'Bubbles', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737341/Bubble_1_Photorealistic_cd3vv8.jpg' },
  { id: 'rug-006', name: 'Burning Rope', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737343/Burning_Rope_Photorealistic_zdlj22.jpg' },
  { id: 'rug-007', name: 'Cells', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737339/cells_1_Photorealistic_ppbblq.jpg' },
  { id: 'rug-008', name: 'Childhood', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736692/Childhood_9_x_12_1_1_Photorealistic_z9b3lh.jpg' },
  { id: 'rug-010', name: 'Festival', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736699/Festival_2_Photorealistic_ms1m85.jpg' },
  { id: 'rug-011', name: 'Fountain Water', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736696/Fountain_Water_l0bycn.jpg' },
  { id: 'rug-012', name: 'Gurung', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737745/Gurung_Photorealistic_chqnjd.jpg' },
  { id: 'rug-013', name: 'Holi', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737720/holi_ggbgie.jpg' },
  { id: 'rug-014', name: 'Imagination', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737740/Imagination_2_2_Photorealistic_zsxea5.jpg' },
  { id: 'rug-016', name: 'Jungle Tribes', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737745/jungleTribes_1_Photorealistic_eg7aaj.jpg' },
  { id: 'rug-017', name: 'Lakhe Face', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737738/Lakhe_Face_2_kabhzm.jpg' },
  { id: 'rug-018', name: 'Majesty', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736658/majesty_fetgew.jpg' },
  { id: 'rug-019', name: 'Manaslu Circuit', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737771/Manaslu_Circuit_2_Photorealistic_lhukrl.jpg' },
  { id: 'rug-020', name: 'Maze', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737774/Maze_xcwlvz.jpg' },
  { id: 'rug-021', name: 'Mirror', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737510/Mirror_Photorealistic_lppzsa.jpg' },
  { id: 'rug-023', name: 'Monkey Temple', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737317/monkeytemple_2_Photorealistic_gysyk5.jpg' },
  { id: 'rug-024', name: 'Morning Sun', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737260/Morning_Sun_8_x_10_1_Photorealistic_mxbmte.jpg' },
  { id: 'rug-025', name: 'Nagh Daha', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737779/Nagh_Daha_3_Photorealistic_jybnok.jpg' },
  { id: 'rug-026', name: 'Namche Bazar', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737773/Namche_Bazar_1_Photorealistic_k1fggp.jpg' },
  { id: 'rug-027', name: 'On Board', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737777/On_Board_2_Photorealistic_ys87y3.jpg' },
  { id: 'rug-028', name: 'On The Road', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737782/On_The_Road_9_x_12_2_Photorealistic_gs41bl.jpg' },
  { id: 'rug-029', name: 'Begnas Lake', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736658/Begnas_Lake_rrzoyq.png' },
  { id: 'rug-030', name: 'Path', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737717/Path_Photorealistic_bu4qzc.jpg' },
  { id: 'rug-031', name: 'Rain Forest', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737966/Rain_Forest_Photorealistic_yjuss0.jpg' },
  { id: 'rug-032', name: 'Retro', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737959/Retro_Photorealistic_axzji8.jpg' },
  { id: 'rug-033', name: 'Sherpa Love', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736665/Sherpa_Love_ivfwrn.jpg' },
  { id: 'rug-034', name: 'Shreepanch', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737961/shreepanch_1_Photorealistic_kb5axn.jpg' },
  { id: 'rug-035', name: 'Shyala', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737321/Shyala_Photorealistic_xz2cs1.jpg' },
  { id: 'rug-036', name: 'Sweet16', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737997/sweet16_qsmqwv.jpg' },
  { id: 'rug-037', name: 'Terai Farm', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763738005/Terai_Farm_Photorealistic_sun9xa.jpg' },
  { id: 'rug-038', name: 'Thoughts', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763738058/Thoughts_nhx6ln.jpg' },
  { id: 'rug-039', name: 'Tides', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763738009/Tides_1_Photorealistic_cxvuz7.jpg' },
  { id: 'rug-040', name: 'Trek', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736659/Trek_kcfzlw.jpg' },
  { id: 'rug-041', name: 'Tsum Valley Patan', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737274/Tsum_Valley_Patan_xj8udk.jpg' },
  { id: 'rug-042', name: 'Undefined Universe', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737281/undefined_universe_uetet7.jpg' },
  { id: 'rug-043', name: 'Vines', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763738127/vines3_ottbsn.jpg' },
  { id: 'rug-044', name: 'Water Brust', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737741/Water_Brust_Photorealistic_rsftji.jpg' },
  { id: 'rug-045', name: 'Water Coin', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763738057/Water_Coins_Photorealistic_u4xyqc.jpg' },
  { id: 'rug-046', name: 'Weave', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737730/weave_3_Photorealistic_sm05bq.jpg' },
  { id: 'rug-047', name: 'Pari', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736720/Pari_mi1jeu.jpg' },
  { id: 'rug-048', name: 'Chakati', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736662/Chakati_gez6dt.jpg' },
  { id: 'rug-049', name: 'Chino', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737510/Chino_kkhyoi.jpg' },
  { id: 'rug-050', name: 'Kaath', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736689/Kaath_jxer08.jpg' },
  { id: 'rug-051', name: 'Landmark', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736710/Land_Mark_2_Photorealistic_aujxjj.jpg' },
  { id: 'rug-052', name: 'Paisa', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737345/Paisa_3_Photorealistic_xxkysd.jpg' },
  { id: 'rug-053', name: 'Ping', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736676/Ping_2_Photorealistic_llgyam.jpg' },
  { id: 'rug-054', name: 'Purano Jhyal', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737835/Purano_Jhyal_3_Color_xass44.jpg' },
  { id: 'rug-055', name: 'Smoke', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736724/Smoke_2_Photorealistic_wlcwhr.jpg' },
  { id: 'rug-056', name: 'Mandro', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737281/mandro_2_Photorealistic_sqxgow.jpg' },
  { id: 'rug-057', name: 'Tihar', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737574/Tihar_Photorealistic_mcjxd8.jpg' },
  { id: 'rug-058', name: 'The Wall', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763738026/The_Wall_cq38tc.jpg' },
  { id: 'rug-059', name: 'Ring', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737324/Ring_3_Color_kyf4w3.jpg' },
  { id: 'rug-060', name: 'Lalitpur', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737751/Lalitpur_z1p8vz.jpg' },
  { id: 'rug-061', name: 'Broken Mirror', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736682/Broken_Mirror_uge5aq.jpg' },
  { id: 'rug-062', name: 'Illusion', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737719/Illusion_nde1lf.jpg' },
  { id: 'rug-063', name: 'Beehive', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736681/Bee_Hive_3_Photorealistic_yb5iaq.jpg' },
  { id: 'rug-064', name: 'Kunda', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736698/Kunda_Photorealistic_rfbq5q.jpg' },
  { id: 'rug-065', name: 'Budi Aunla', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736672/Budi_Aunla_1_Photorealistic_khkssn.jpg' },
  { id: 'rug-066', name: 'Sukool', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737273/Sukool_uqpuch.jpg' },
  { id: 'rug-067', name: 'Water Lilies', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763738048/Water_Lilies_1_Photorealistic_ae1ix9.jpg' },
  { id: 'rug-068', name: 'Birendra Taal', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737329/Birendra_Taal_nu0vau.jpg' },
  { id: 'rug-069', name: 'Echo', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763736694/Echo_qhaip5.jpg' },
  { id: 'rug-070', name: 'Kapaal', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737718/Kapaal_5_Photorealistic_ipuacx.jpg' },
  { id: 'rug-071', name: 'Phulchoki', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737830/Phulchoki_2_Photorealistic_phn6sb.jpg' },
  { id: 'rug-072', name: 'Thaali', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1763737512/Thaali_kowibc.jpg' },
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