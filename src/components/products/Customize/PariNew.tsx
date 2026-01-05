import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import PariLayer from './PariLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Pari",
  layers: [
    { src: "/layers/Pari/Pari1.png", defaultColor: "#d8c4ab", defaultName: "AH 07" },
    { src: "/layers/Pari/Pari2.png", defaultColor: "#8A7E79", defaultName: "AE 07" },
    { src: "/layers/Pari/Pari3.png", defaultColor: "#BAAC9A", defaultName: "AF 11" },
    { src: "/layers/Pari/Pari4.png", defaultColor: "#0c0d18", defaultName: "BT 01" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/pari1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/pari2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/pari3.webp',
  ],
};

const PariNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={PariLayer}
  />
);

export default PariNew;
