import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import PaisaLayer from './PaisaLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Paisa",
  layers: [
    { src: "/layers/Paisa/Paisa1.png", defaultColor: "#f2efbb", defaultName: "DF12" },
    { src: "/layers/Paisa/Paisa2.png", defaultColor: "#41464e", defaultName: "BM04" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/paisa1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/paisa2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/paisa3.webp',
  ],
};

const PaisaNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={PaisaLayer}
  />
);

export default PaisaNew;
