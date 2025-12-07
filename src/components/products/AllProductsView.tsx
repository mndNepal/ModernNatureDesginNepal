import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { UnifiedProduct } from './ProductUtils';

interface AllProductsViewProps {
  onProductSelect?: (product: UnifiedProduct) => void;
}

const products: UnifiedProduct[] = [

{ id: 'rug-001', name: 'Aankhi Jhyal', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085826/AankhiJhyal_huj3tc.webp' },
{ id: 'rug-002', name: 'Attraction', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085822/Attraction_mpzxdc.webp' },
{ id: 'rug-003', name: 'Baasn', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765088297/baasn_g3ioqr.webp' },
{ id: 'rug-004', name: 'Bayleaves', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085825/BayLeaves_idoxgc.webp' },
{ id: 'rug-005', name: 'Begnas Lake', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085821/BegnasLake_jgaepv.webp' },
{ id: 'rug-006', name: 'Beehive', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085827/Beehive_db2ord.webp' },
{ id: 'rug-007', name: 'Birendra Taal', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085823/BirendraTaal_xdjo7l.webp' },
{ id: 'rug-008', name: 'Broken Mirror', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085825/BrokenMirror_vmwvbl.webp' },
{ id: 'rug-009', name: 'Budi Aunla', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085827/BudiAunla_rnqw73.webp' },
{ id: 'rug-010', name: 'Bubbles', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085828/Bubbles_tedfwm.webp' },
{ id: 'rug-011', name: 'Burning Rope', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085830/BurningRope_mppmem.webp' },
{ id: 'rug-012', name: 'Cells', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085830/Cells_qmulai.webp' },
{ id: 'rug-013', name: 'Chakati', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085832/Chakati_cwtvb8.webp' },
{ id: 'rug-014', name: 'Chino', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085835/Chino_ebgomw.webp' },
{ id: 'rug-015', name: 'Childhood', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765088296/Childhood_bxofjb.webp' },
{ id: 'rug-016', name: 'Echo', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085831/Echo_yacopq.webp' },
{ id: 'rug-017', name: 'Festival', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085835/Festival_fsgvws.webp' },
{ id: 'rug-018', name: 'Fountain Water', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085836/FountainWater_oznnsw.webp' },
{ id: 'rug-019', name: 'Gurung', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085836/Gurung_ayi3of.webp' },
{ id: 'rug-020', name: 'Holi', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085838/Holi_woi0nw.webp' },
{ id: 'rug-021', name: 'Illusion', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085838/Illusion_ksflbt.webp' },
{ id: 'rug-022', name: 'Imagination', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085837/Imagination_axu2s4.webp' },
{ id: 'rug-023', name: 'Jungle Tribes', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765088296/JungleTribes_x0jvoh.webp' },
{ id: 'rug-024', name: 'Kaath', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085839/Kaath_t0ffpx.webp' },
{ id: 'rug-025', name: 'Kapaal', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085842/Kapaal_dg9gbh.webp' },
{ id: 'rug-026', name: 'Kunda', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085842/Kunda_vazqom.webp' },
{ id: 'rug-027', name: 'Lakhe Face', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085841/LakheFace_i51vac.webp' },
{ id: 'rug-028', name: 'Lalitpur', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085842/Lalitpur_letqmn.webp' },
{ id: 'rug-029', name: 'Landmark', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085844/Landmark_tbtd3l.webp' },
{ id: 'rug-030', name: 'Majesty', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085842/Majesty_yti18c.webp' },
{ id: 'rug-031', name: 'Manaslu Circuit', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085846/ManasluCircut_wq96xb.webp' },
{ id: 'rug-032', name: 'Mandro', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085846/Mandro_r4s2fm.webp' },
{ id: 'rug-033', name: 'Maze', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085849/Maze_bqrqqj.webp' },
{ id: 'rug-034', name: 'Mirror', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085847/Mirror_mrov09.webp' },
{ id: 'rug-035', name: 'Monkey Temple', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085849/MonkeyTemple_v1npm7.webp' },
{ id: 'rug-036', name: 'Morning Sun', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085848/MorningSun_z1ereb.webp' },
{ id: 'rug-037', name: 'Nagh Daha', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085851/NaghDaha_edimvq.webp' },
{ id: 'rug-038', name: 'Namche Bazar', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085852/NamcheBazar_fvtb2o.webp' },
{ id: 'rug-039', name: 'On Board', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085853/OnBoard_u0fxmo.webp' },
{ id: 'rug-040', name: 'On The Road', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085854/OnTheRoad_rzjhra.webp' },
{ id: 'rug-041', name: 'Paisa', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085854/Paisa_ctzyz6.webp' },
{ id: 'rug-042', name: 'Pari', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085856/Pari_afeuiv.webp' },
{ id: 'rug-043', name: 'Path', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085855/Path_gqmlsp.webp' },
{ id: 'rug-044', name: 'Phulchoki', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085857/Phulchoki_oym2xl.webp' },
{ id: 'rug-045', name: 'Ping', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085856/Ping_ichgl2.webp' },
{ id: 'rug-046', name: 'Purano Jhyal', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085860/PuranoJhyal_jqr1st.webp' },
{ id: 'rug-047', name: 'Rain Forest', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085860/RainForest_n8bt8m.webp' },
{ id: 'rug-048', name: 'Retro', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085860/Retro_kektmu.webp' },
{ id: 'rug-049', name: 'Ring', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085862/Ring_wui4et.webp' },
{ id: 'rug-050', name: 'Sherpa Love', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085862/SherpaLove_e0pw3i.webp' },
{ id: 'rug-051', name: 'Shreepanch', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085861/Shreepanch_zaqgul.webp' },
{ id: 'rug-052', name: 'Shyala', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085864/Shyala_xhwhna.webp' },
{ id: 'rug-053', name: 'Smoke', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085864/Smoke_vek4fq.webp' },
{ id: 'rug-054', name: 'Sweet16', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085866/Sweet16_uuq0l3.webp' },
{ id: 'rug-055', name: 'Sukool', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085865/Sukool_d3v7gp.webp' },
{ id: 'rug-056', name: 'Terai Farm', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085867/TeraiFarm_wnvygj.webp' },
{ id: 'rug-057', name: 'Thaali', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085868/Thaali_q2ybct.webp' },
{ id: 'rug-058', name: 'Thoughts', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085869/Thoughts_otfool.webp' },
{ id: 'rug-059', name: 'Tides', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085869/Tides_armg0s.webp' },
{ id: 'rug-060', name: 'Tihar', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085869/Tihar_g7bwww.webp' },
{ id: 'rug-061', name: 'The Wall', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085869/TheWall_e9l9ny.webp' },
{ id: 'rug-062', name: 'Trek', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085869/Trek_axulju.webp' },
{ id: 'rug-063', name: 'Tsum Valley Patan', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085870/TsumValleyPatan_zmgeyb.webp' },
{ id: 'rug-064', name: 'Undefined Universe', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085870/UndefinedUniverse_dm7lxq.webp' },
{ id: 'rug-065', name: 'Vines', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085872/Vines_ox9mut.webp' },
{ id: 'rug-066', name: 'Water Brust', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085872/WaterBrust_pax6of.webp' },
{ id: 'rug-067', name: 'Water Coin', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765085927/WaterCoin_wgpz00.webp' },
{ id: 'rug-068', name: 'Water Lilies', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765086072/WaterLilies_wywuaf.webp' },
{ id: 'rug-069', name: 'Weave', imageUrl: 'https://res.cloudinary.com/dflytue4b/image/upload/v1765086072/Weave_kjafde.webp' },

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
            src="https://res.cloudinary.com/dflytue4b/image/upload/v1765089713/ColorCustomizer_qqieqq.png"
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