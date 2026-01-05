import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import SherpaLoveLayer from './SherpaLoveLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Sherpa Love",
  layers: [
    { src: "/layers/SherpaLove/SherpaLove1.png", defaultColor: "#853a23", defaultName: "DO 02" },
    { src: "/layers/SherpaLove/SherpaLove2.png", defaultColor: "#be913a", defaultName: "DD 06" },
    { src: "/layers/SherpaLove/SherpaLove3.png", defaultColor: "#919aa2", defaultName: "BM 09" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/sherpalove1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/sherpalove2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/sherpalove3.webp',
  ],
};

const SherpaLoveNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={SherpaLoveLayer}
  />
);

export default SherpaLoveNew;
