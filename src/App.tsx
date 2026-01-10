import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";

import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllCollections from "./components/products/Collections/AllCollections";
import OurExperience from "./components/home/OurExperience";

// Import all new responsive product components
import AankhiJhyal from "./components/products/Customize/AankhiJhyalNew";
import Attraction from "./components/products/Customize/AttractionNew";
import Baasn from "./components/products/Customize/BaasnNew";
import BayLeaves from "./components/products/Customize/BayleavesNew";
import Beehive from "./components/products/Customize/BeehiveNew";
import BegnasLake from "./components/products/Customize/BegnasLakeNew";
import BirendraTaal from "./components/products/Customize/BirendraTaalNew";
import BrokenMirror from "./components/products/Customize/BrokenMirrorNew";
import Bubbles from "./components/products/Customize/BubblesNew";
import BudiAunla from "./components/products/Customize/BudiAunlaNew";
import BurningRope from "./components/products/Customize/BurningRopeNew";
import Cells from "./components/products/Customize/CellsNew";
import Chakati from "./components/products/Customize/ChakatiNew";
import Childhood from "./components/products/Customize/ChildhoodNew";
import Chino from "./components/products/Customize/ChinoNew";
import Echo from "./components/products/Customize/EchoNew";
import Festival from "./components/products/Customize/FestivalNew";
import FountainWater from "./components/products/Customize/FountainWaterNew";
import Gurung from "./components/products/Customize/GurungNew";
import Holi from "./components/products/Customize/HoliNew";
import Illusion from "./components/products/Customize/IllusionNew";
import Imagination from "./components/products/Customize/ImaginationNew";
import JungleTribes from "./components/products/Customize/JungleTribesNew";
import Kaath from "./components/products/Customize/KaathNew";
import Kapaal from "./components/products/Customize/KapaalNew";
import Kunda from "./components/products/Customize/KundaNew";
import LakheFace from "./components/products/Customize/LakheFaceNew";
import Lalitpur from "./components/products/Customize/LalitpurNew";
import Landmark from "./components/products/Customize/LandmarkNew";
import Majesty from "./components/products/Customize/MajestyNew";
import ManasluCircuit from "./components/products/Customize/ManasluCircuitNew";
import Mandro from "./components/products/Customize/MandroNew";
import Maze from "./components/products/Customize/MazeNew";
import Mirror from "./components/products/Customize/MirrorNew";
import MonkeyTemple from "./components/products/Customize/MonkeyTempleNew";
import MorningSun from "./components/products/Customize/MorningSunNew";
import NaghDaha from "./components/products/Customize/NaghDahaNew";
import NamcheBazar from "./components/products/Customize/NamcheBazarNew";
import OnBoard from "./components/products/Customize/OnBoardNew";
import OnTheRoad from "./components/products/Customize/OnTheRoadNew";
import Paisa from "./components/products/Customize/PaisaNew";
import Pari from "./components/products/Customize/PariNew";
import Path from "./components/products/Customize/PathNew";
import Phulchoki from "./components/products/Customize/PhulchokiNew";
import Ping from "./components/products/Customize/PingNew";
import PuranoJhyal from "./components/products/Customize/PuranoJhyalNew";
import RainForest from "./components/products/Customize/RainForestNew";
import Retro from "./components/products/Customize/RetroNew";
import Ring from "./components/products/Customize/RingNew";
import SherpaLove from "./components/products/Customize/SherpaLoveNew";
import Shreepanch from "./components/products/Customize/ShreepanchNew";
import Shyala from "./components/products/Customize/ShyalaNew";
import Smoke from "./components/products/Customize/SmokeNew";
import Sukool from "./components/products/Customize/SukoolNew";
import Sweet16 from "./components/products/Customize/Sweet16New";
import TeraiFarm from "./components/products/Customize/TeraiFarmNew";
import Thaali from "./components/products/Customize/ThaaliNew";
import TheWall from "./components/products/Customize/TheWallNew";
import Thoughts from "./components/products/Customize/ThoughtsNew";
import Tides from "./components/products/Customize/TidesNew";
import Tihar from "./components/products/Customize/TiharNew";
import Trek from "./components/products/Customize/TrekNew";
import TsumValleyPatan from "./components/products/Customize/TsumValleyNew";
import UndefinedUniverse from "./components/products/Customize/UndefinedUniverseNew";
import Vines from "./components/products/Customize/VinesNew";
import WaterBrust from "./components/products/Customize/WaterBrustNew";
import WaterCoin from "./components/products/Customize/WaterCoinNew";
import WaterLilies from "./components/products/Customize/WaterLiliesNew";
import Weave from "./components/products/Customize/WeaveNew";

export default function App() {
  return (
    <>
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

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>



      {/* 💬 Chatbot Floating Button */}
      <button
        onClick={() => {
          // TODO: open chatbot modal / widget
          console.log("Open Chatbot");
        }}
        className="fixed bottom-28 right-8 z-50 bg-blue-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:scale-110 transition-transform"
      >
        <BiMessageRoundedDots className="w-7 h-7 sm:w-10 sm:h-10" />
      </button>


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
