import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AankhiJhyal from "./components/products/Customize/AankhiJhyal";
import Attraction from "./components/products/Customize/Attraction";
import Baasn from "./components/products/Customize/Baasn";
import BayLeaves from "./components/products/Customize/Bayleaves";
import Bubbles from "./components/products/Customize/Bubbles";
import BurningRope from "./components/products/Customize/BurningRope";
import Cells from "./components/products/Customize/Cells";
import Childhood from "./components/products/Customize/Childhood";
import Festival from "./components/products/Customize/Festival";
import FountainWater from "./components/products/Customize/FountainWater";
import Gurung from "./components/products/Customize/Gurung";
import Holi from "./components/products/Customize/Holi";
import Imagination from "./components/products/Customize/Imagination";
import JungleTribes from "./components/products/Customize/JungleTribes";
import LakheFace from "./components/products/Customize/LakheFace";
import Majesty from "./components/products/Customize/Majesty";
import ManasluCircuit from "./components/products/Customize/ManasluCircuit";
import Maze from "./components/products/Customize/Maze";
import Mirror from "./components/products/Customize/Mirror";
import MonkeyTemple from "./components/products/Customize/MonkeyTemple";
import MorningSun from "./components/products/Customize/MorningSun";
import NaghDaha from "./components/products/Customize/NaghDaha";
import NamcheBazar from "./components/products/Customize/NamcheBazar";
import OnBoard from "./components/products/Customize/OnBoard";
import OnTheRoad from "./components/products/Customize/OnTheRoad";
import BegnasLake from "./components/products/Customize/BegnasLake";
import Path from "./components/products/Customize/Path";
import RainForest from "./components/products/Customize/RainForest";
import Retro from "./components/products/Customize/Retro";
import SherpaLove from "./components/products/Customize/SherpaLove";
import Shreepanch from "./components/products/Customize/Shreepanch";
import Shyala from "./components/products/Customize/Shyala";
import Sweet16 from "./components/products/Customize/Sweet16";
import TeraiFarm from "./components/products/Customize/TeraiFarm";
import Thoughts from "./components/products/Customize/Thoughts";
import Tides from "./components/products/Customize/Tides";
import Trek from "./components/products/Customize/Trek";
import TsumValleyPatan from "./components/products/Customize/TsumValleyPatan";
import UndefinedUniverse from "./components/products/Customize/UndefinedUniverse";
import Vines from "./components/products/Customize/Vines";
import WaterBrust from "./components/products/Customize/WaterBrust";
import WaterCoin from "./components/products/Customize/WaterCoin";
import Weave from "./components/products/Customize/Weave";
import Pari from "./components/products/Customize/Pari";
import Chakati from "./components/products/Customize/Chakati";
import Chino from "./components/products/Customize/Chino";
import Kaath from "./components/products/Customize/Kaath";
import Landmark from "./components/products/Customize/Landmark";
import Paisa from "./components/products/Customize/Paisa";
import Ping from "./components/products/Customize/Ping";
import PuranoJhyal from "./components/products/Customize/PuranoJhyal";
import Smoke from "./components/products/Customize/Smoke";
import AllCollections from "./components/products/Collections/AllCollections";
import Mandro from "./components/products/Customize/Mandro";
import Tihar from "./components/products/Customize/Tihar";
import TheWall from "./components/products/Customize/TheWall";
import Ring from "./components/products/Customize/Ring";
import Lalitpur from "./components/products/Customize/Lalitpur";
import BrokenMirror from "./components/products/Customize/BrokenMirror";
import Illusion from "./components/products/Customize/Illusion";
import Beehive from "./components/products/Customize/Beehive";
import Kunda from "./components/products/Customize/Kunda";
import BudiAunla from "./components/products/Customize/BudiAunla";
import Sukool from "./components/products/Customize/Sukool";
import WaterLilies from "./components/products/Customize/WaterLilies";
import Echo from "./components/products/Customize/Echo";
import BirendraTaal from "./components/products/Customize/BirendraTaal";
import Phulchoki from "./components/products/Customize/Phulchoki";
import Kapaal from "./components/products/Customize/Kapaal";
import Thaali from "./components/products/Customize/Thaali";
import OurExperience from "./components/home/OurExperience";




export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/craftmanship" element={<OurExperience />} />



        <Route path="/collections" element={<AllCollections />} />

        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />

        <Route path="/products/aankhijhyal" element={<AankhiJhyal />} />
        <Route path="/products/attraction" element={<Attraction />} />
        <Route path="/products/baasn" element={<Baasn />} />
        <Route path="/products/bayleaves" element={<BayLeaves />} />
        <Route path="/products/bubbles" element={<Bubbles />} />
        <Route path="/products/burningrope" element={<BurningRope />} />
        <Route path="/products/cells" element={<Cells />} />
        <Route path="/products/childhood" element={<Childhood />} />
        <Route path="/products/festival" element={<Festival />} />
        <Route path="/products/fountainwater" element={<FountainWater />} />
        <Route path="/products/gurung" element={<Gurung />} />
        <Route path="/products/holi" element={<Holi />} />
        <Route path="/products/imagination" element={<Imagination />} />
        <Route path="/products/jungletribes" element={<JungleTribes />} />
        <Route path="/products/lakheface" element={<LakheFace />} />
        <Route path="/products/majesty" element={<Majesty />} />
        <Route path="/products/manaslucircuit" element={<ManasluCircuit />} />
        <Route path="/products/maze" element={<Maze />} />
        <Route path="/products/mirror" element={<Mirror />} />
        <Route path="/products/monkeytemple" element={<MonkeyTemple />} />
        <Route path="/products/morningsun" element={<MorningSun />} />
        <Route path="/products/naghdaha" element={<NaghDaha />} />
        <Route path="/products/namchebazar" element={<NamcheBazar />} />
        <Route path="/products/onboard" element={<OnBoard />} />
        <Route path="/products/ontheroad" element={<OnTheRoad />} />
        <Route path="/products/begnaslake" element={<BegnasLake />} />
        <Route path="/products/path" element={<Path />} />
        <Route path="/products/rainforest" element={<RainForest />} />
        <Route path="/products/retro" element={<Retro />} />
        <Route path="/products/sherpalove" element={<SherpaLove />} />
        <Route path="/products/shreepanch" element={<Shreepanch />} />
        <Route path="/products/shyala" element={<Shyala />} />
        <Route path="/products/sweet16" element={<Sweet16 />} />
        <Route path="/products/teraifarm" element={<TeraiFarm />} />
        <Route path="/products/thoughts" element={<Thoughts />} />
        <Route path="/products/tides" element={<Tides />} />
        <Route path="/products/trek" element={<Trek />} />
        <Route path="/products/tsumvalleypatan" element={<TsumValleyPatan />} />
        <Route path="/products/undefineduniverse" element={<UndefinedUniverse />} />
        <Route path="/products/vines" element={<Vines />} />
        <Route path="/products/waterbrust" element={<WaterBrust />} />
        <Route path="/products/watercoin" element={<WaterCoin />} />
        <Route path="/products/weave" element={<Weave />} />
        <Route path="/products/pari" element={<Pari />} />
        <Route path="/products/chakati" element={<Chakati />} />
        <Route path="/products/chino" element={<Chino />} />
        <Route path="/products/kaath" element={<Kaath />} />
        <Route path="/products/landmark" element={<Landmark />} />
        <Route path="/products/paisa" element={<Paisa />} />
        <Route path="/products/ping" element={<Ping />} />
        <Route path="/products/puranojhyal" element={<PuranoJhyal />} />
        <Route path="/products/smoke" element={<Smoke />} />
        <Route path="/products/mandro" element={<Mandro />} />
        <Route path="/products/tihar" element={<Tihar />} />
        <Route path="/products/thewall" element={<TheWall />} />
        <Route path="/products/ring" element={<Ring />} />
        <Route path="/products/lalitpur" element={<Lalitpur />} />
        <Route path="/products/brokenmirror" element={<BrokenMirror />} />
        <Route path="/products/illusion" element={<Illusion />} />
        <Route path="/products/beehive" element={<Beehive />} />
        <Route path="/products/kunda" element={<Kunda />} />
        <Route path="/products/budiaunla" element={<BudiAunla />} />
        <Route path="/products/sukool" element={<Sukool />} />
        <Route path="/products/waterlilies" element={<WaterLilies />} />
        <Route path="/products/birendrataal" element={<BirendraTaal />} />
        <Route path="/products/echo" element={<Echo />} />
        <Route path="/products/kapaal" element={<Kapaal />} />
        <Route path="/products/phulchoki" element={<Phulchoki />} />
        <Route path="/products/thaali" element={<Thaali />} />









        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* 🔥 WhatsApp Floating Button */}

      <a
        href="https://wa.me/9779851197564"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-8 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={40} />
      </a>
    </>
  );
}
