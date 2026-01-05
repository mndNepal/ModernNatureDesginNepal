import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import MonkeyTempleLayer from './MonkeyTempleLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Monkey Temple",
  layers: [
    { src: "/layers/MonkeyTemple/MonkeyTemple1.png", defaultColor: "#0c64ab", defaultName: "CJ 04" },
    { src: "/layers/MonkeyTemple/MonkeyTemple2.png", defaultColor: "#849126", defaultName: "CK 02" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/monkeytemple1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/monkeytemple2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/monkeytemple3.webp',
  ],
};

const MonkeyTempleNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={MonkeyTempleLayer}
  />
);

export default MonkeyTempleNew;
