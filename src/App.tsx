import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
// import { BiMessageRoundedDots } from "react-icons/bi";

// Eagerly load main pages for fast initial navigation
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import RugViz from "./components/visualizeRug/RugViz"
import RugVisualizerPage from "./components/visualizeRug/RugVisualizerPage";
import RugCare from "./pages/RugCare";

// Lazy load heavy components - only loaded when user navigates to them
const AllCollections = lazy(() => import("./components/products/Collections/AllCollections"));
const OurExperience = lazy(() => import("./components/home/OurExperience"));

// Lazy load all product customizer pages
const AankhiJhyal = lazy(() => import("./components/products/Customize/AankhiJhyalNew"));
const Attraction = lazy(() => import("./components/products/Customize/AttractionNew"));
const Baasn = lazy(() => import("./components/products/Customize/BaasnNew"));
const BayLeaves = lazy(() => import("./components/products/Customize/BayleavesNew"));
const Beehive = lazy(() => import("./components/products/Customize/BeehiveNew"));
const BegnasLake = lazy(() => import("./components/products/Customize/BegnasLakeNew"));
const BirendraTaal = lazy(() => import("./components/products/Customize/BirendraTaalNew"));
const BrokenMirror = lazy(() => import("./components/products/Customize/BrokenMirrorNew"));
const Bubbles = lazy(() => import("./components/products/Customize/BubblesNew"));
const BudiAunla = lazy(() => import("./components/products/Customize/BudiAunlaNew"));
const BurningRope = lazy(() => import("./components/products/Customize/BurningRopeNew"));
const Cells = lazy(() => import("./components/products/Customize/CellsNew"));
const Chakati = lazy(() => import("./components/products/Customize/ChakatiNew"));
const Childhood = lazy(() => import("./components/products/Customize/ChildhoodNew"));
const Chino = lazy(() => import("./components/products/Customize/ChinoNew"));
const Echo = lazy(() => import("./components/products/Customize/EchoNew"));
const Festival = lazy(() => import("./components/products/Customize/FestivalNew"));
const FountainWater = lazy(() => import("./components/products/Customize/FountainWaterNew"));
const Gurung = lazy(() => import("./components/products/Customize/GurungNew"));
const Holi = lazy(() => import("./components/products/Customize/HoliNew"));
const Illusion = lazy(() => import("./components/products/Customize/IllusionNew"));
const Imagination = lazy(() => import("./components/products/Customize/ImaginationNew"));
const JungleTribes = lazy(() => import("./components/products/Customize/JungleTribesNew"));
const Kaath = lazy(() => import("./components/products/Customize/KaathNew"));
const Kapaal = lazy(() => import("./components/products/Customize/KapaalNew"));
const Kunda = lazy(() => import("./components/products/Customize/KundaNew"));
const LakheFace = lazy(() => import("./components/products/Customize/LakheFaceNew"));
const Lalitpur = lazy(() => import("./components/products/Customize/LalitpurNew"));
const Landmark = lazy(() => import("./components/products/Customize/LandmarkNew"));
const Majesty = lazy(() => import("./components/products/Customize/MajestyNew"));
const ManasluCircuit = lazy(() => import("./components/products/Customize/ManasluCircuitNew"));
const Mandro = lazy(() => import("./components/products/Customize/MandroNew"));
const Maze = lazy(() => import("./components/products/Customize/MazeNew"));
const Mirror = lazy(() => import("./components/products/Customize/MirrorNew"));
const MonkeyTemple = lazy(() => import("./components/products/Customize/MonkeyTempleNew"));
const MorningSun = lazy(() => import("./components/products/Customize/MorningSunNew"));
const NaghDaha = lazy(() => import("./components/products/Customize/NaghDahaNew"));
const NamcheBazar = lazy(() => import("./components/products/Customize/NamcheBazarNew"));
const OnBoard = lazy(() => import("./components/products/Customize/OnBoardNew"));
const OnTheRoad = lazy(() => import("./components/products/Customize/OnTheRoadNew"));
const Paisa = lazy(() => import("./components/products/Customize/PaisaNew"));
const Pari = lazy(() => import("./components/products/Customize/PariNew"));
const Path = lazy(() => import("./components/products/Customize/PathNew"));
const Phulchoki = lazy(() => import("./components/products/Customize/PhulchokiNew"));
const Ping = lazy(() => import("./components/products/Customize/PingNew"));
const PuranoJhyal = lazy(() => import("./components/products/Customize/PuranoJhyalNew"));
const RainForest = lazy(() => import("./components/products/Customize/RainForestNew"));
const Retro = lazy(() => import("./components/products/Customize/RetroNew"));
const Ring = lazy(() => import("./components/products/Customize/RingNew"));
const SherpaLove = lazy(() => import("./components/products/Customize/SherpaLoveNew"));
const Shreepanch = lazy(() => import("./components/products/Customize/ShreepanchNew"));
const Shyala = lazy(() => import("./components/products/Customize/ShyalaNew"));
const Smoke = lazy(() => import("./components/products/Customize/SmokeNew"));
const Sukool = lazy(() => import("./components/products/Customize/SukoolNew"));
const Sweet16 = lazy(() => import("./components/products/Customize/Sweet16New"));
const TeraiFarm = lazy(() => import("./components/products/Customize/TeraiFarmNew"));
const Thaali = lazy(() => import("./components/products/Customize/ThaaliNew"));
const TheWall = lazy(() => import("./components/products/Customize/TheWallNew"));
const Thoughts = lazy(() => import("./components/products/Customize/ThoughtsNew"));
const Tides = lazy(() => import("./components/products/Customize/TidesNew"));
const Tihar = lazy(() => import("./components/products/Customize/TiharNew"));
const Trek = lazy(() => import("./components/products/Customize/TrekNew"));
const TsumValleyPatan = lazy(() => import("./components/products/Customize/TsumValleyNew"));
const UndefinedUniverse = lazy(() => import("./components/products/Customize/UndefinedUniverseNew"));
const Vines = lazy(() => import("./components/products/Customize/VinesNew"));
const WaterBrust = lazy(() => import("./components/products/Customize/WaterBrustNew"));
const WaterCoin = lazy(() => import("./components/products/Customize/WaterCoinNew"));
const WaterLilies = lazy(() => import("./components/products/Customize/WaterLiliesNew"));
const Weave = lazy(() => import("./components/products/Customize/WeaveNew"));
const Kopila = lazy(() => import("./components/products/Customize/KopilaNew"));
const Chaal = lazy(() => import("./components/products/Customize/ChaalNew"));
const AnkhaNani = lazy(() => import("./components/products/Customize/AnkhaNaniNew"));
const Ilusion = lazy(() => import("./components/products/Customize/IlusionNew"));
const Bloom = lazy(() => import("./components/products/Customize/BloomNew"));
const Maya = lazy(() => import("./components/products/Customize/MayaNew"));
const Graha = lazy(() => import("./components/products/Customize/GrahaNew"));
const Scale = lazy(() => import("./components/products/Customize/ScaleNew"));
const TulsiBibaha = lazy(() => import("./components/products/Customize/TulsiBibahaNew"));
const Pooja = lazy(() => import("./components/products/Customize/PoojaNew"));
const Trisul = lazy(() => import("./components/products/Customize/TrisulNew"));
const RoseGarland = lazy(() => import("./components/products/Customize/RoseGarlandNew"));



// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-charcoal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-charcoal/70">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/craftmanship" element={<OurExperience />} />

          <Route path="/collections" element={<AllCollections />} />
          <Route path="/products" element={<Products />} />

          <Route path="/products/aankhijhyal" element={<AankhiJhyal />} />
          <Route path="/products/attraction" element={<Attraction />} />
          <Route path="/products/baasn" element={<Baasn />} />
          <Route path="/products/bayleaves" element={<BayLeaves />} />
          <Route path="/products/beehive" element={<Beehive />} />
          <Route path="/products/begnaslake" element={<BegnasLake />} />
          <Route path="/products/birendrataal" element={<BirendraTaal />} />
          <Route path="/products/brokenmirror" element={<BrokenMirror />} />
          <Route path="/products/bubbles" element={<Bubbles />} />
          <Route path="/products/budiaunla" element={<BudiAunla />} />
          <Route path="/products/burningrope" element={<BurningRope />} />
          <Route path="/products/cells" element={<Cells />} />
          <Route path="/products/chakati" element={<Chakati />} />
          <Route path="/products/childhood" element={<Childhood />} />
          <Route path="/products/chino" element={<Chino />} />
          <Route path="/products/echo" element={<Echo />} />
          <Route path="/products/festival" element={<Festival />} />
          <Route path="/products/fountainwater" element={<FountainWater />} />
          <Route path="/products/gurung" element={<Gurung />} />
          <Route path="/products/holi" element={<Holi />} />
          <Route path="/products/illusion" element={<Illusion />} />
          <Route path="/products/imagination" element={<Imagination />} />
          <Route path="/products/jungletribes" element={<JungleTribes />} />
          <Route path="/products/kaath" element={<Kaath />} />
          <Route path="/products/kapaal" element={<Kapaal />} />
          <Route path="/products/kunda" element={<Kunda />} />
          <Route path="/products/lakheface" element={<LakheFace />} />
          <Route path="/products/lalitpur" element={<Lalitpur />} />
          <Route path="/products/landmark" element={<Landmark />} />
          <Route path="/products/majesty" element={<Majesty />} />
          <Route path="/products/manaslucircuit" element={<ManasluCircuit />} />
          <Route path="/products/mandro" element={<Mandro />} />
          <Route path="/products/maze" element={<Maze />} />
          <Route path="/products/mirror" element={<Mirror />} />
          <Route path="/products/monkeytemple" element={<MonkeyTemple />} />
          <Route path="/products/morningsun" element={<MorningSun />} />
          <Route path="/products/naghdaha" element={<NaghDaha />} />
          <Route path="/products/namchebazar" element={<NamcheBazar />} />
          <Route path="/products/onboard" element={<OnBoard />} />
          <Route path="/products/ontheroad" element={<OnTheRoad />} />
          <Route path="/products/paisa" element={<Paisa />} />
          <Route path="/products/pari" element={<Pari />} />
          <Route path="/products/path" element={<Path />} />
          <Route path="/products/phulchoki" element={<Phulchoki />} />
          <Route path="/products/ping" element={<Ping />} />
          <Route path="/products/puranojhyal" element={<PuranoJhyal />} />
          <Route path="/products/rainforest" element={<RainForest />} />
          <Route path="/products/retro" element={<Retro />} />
          <Route path="/products/ring" element={<Ring />} />
          <Route path="/products/sherpalove" element={<SherpaLove />} />
          <Route path="/products/shreepanch" element={<Shreepanch />} />
          <Route path="/products/shyala" element={<Shyala />} />
          <Route path="/products/smoke" element={<Smoke />} />
          <Route path="/products/sukool" element={<Sukool />} />
          <Route path="/products/sweet16" element={<Sweet16 />} />
          <Route path="/products/teraifarm" element={<TeraiFarm />} />
          <Route path="/products/thaali" element={<Thaali />} />
          <Route path="/products/thewall" element={<TheWall />} />
          <Route path="/products/thoughts" element={<Thoughts />} />
          <Route path="/products/tides" element={<Tides />} />
          <Route path="/products/tihar" element={<Tihar />} />
          <Route path="/products/trek" element={<Trek />} />
          <Route path="/products/tsumvalleypatan" element={<TsumValleyPatan />} />
          <Route path="/products/undefineduniverse" element={<UndefinedUniverse />} />
          <Route path="/products/vines" element={<Vines />} />
          <Route path="/products/waterbrust" element={<WaterBrust />} />
          <Route path="/products/watercoin" element={<WaterCoin />} />
          <Route path="/products/waterlilies" element={<WaterLilies />} />
          <Route path="/products/weave" element={<Weave />} />
          <Route path="/products/kopila" element={<Kopila />} />
          <Route path="/products/chaal" element={<Chaal />} />
          <Route path="/products/ankhanani" element={<AnkhaNani />} />
          <Route path="/products/ilusion" element={<Ilusion />} />
          <Route path="/products/bloom" element={<Bloom />} />
          <Route path="/products/maya" element={<Maya />} />
          <Route path="/products/graha" element={<Graha />} />
          <Route path="/products/scale" element={<Scale />} />
          <Route path="/products/tulsibibaha" element={<TulsiBibaha />} />
          <Route path="/products/pooja" element={<Pooja />} />
          <Route path="/products/trisul" element={<Trisul />} />
          <Route path="/products/rosegarland" element={<RoseGarland />} />



          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rug-care" element={<RugCare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rug-visualizer" element={<RugVisualizerPage />} />
        </Routes>
      </Suspense>

      {/* 💬 Chatbot Floating Button */}
      {/* <button
        onClick={() => {
          // TODO: open chatbot modal / widget
          console.log("Open Chatbot");
        }}
        className="fixed bottom-28 right-8 z-50 bg-blue-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:scale-110 transition-transform"
      >
        <BiMessageRoundedDots className="w-7 h-7 sm:w-10 sm:h-10" />
      </button> */}


      {/* 🔥 WhatsApp Floating Button */}

      <a
        href="https://wa.me/9779851197564"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-8 z-50 bg-green-500 text-white rounded-full p-3 sm:p-4 shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp className="w-7 h-7 sm:w-10 sm:h-10" />
      </a>
    </>
  );
}
