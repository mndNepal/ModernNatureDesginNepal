import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import LalitpurLayer from './LalitpurLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Lalitpur",
  layers: [
    { src: "/layers/Lalitpur/Lalitpur1.png", defaultColor: "#d5e2d3", defaultName: "CI 12" },
    { src: "/layers/Lalitpur/Lalitpur2.png", defaultColor: "#b7baa7", defaultName: "CT 12" },
    { src: "/layers/Lalitpur/Lalitpur3.png", defaultColor: "#4c4040", defaultName: "AB 05" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/lalitpur1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/lalitpur2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/lalitpur3.webp',
  ],
};

const LalitpurNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={LalitpurLayer}
  />
);

export default LalitpurNew;
