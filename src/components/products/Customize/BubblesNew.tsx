import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import BubblesLayer from './BubblesLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Bubbles",
  layers: [
    { src: "/layers/Bubbles/Bubbles1.png", defaultColor: "#857654", defaultName: "CN 07" },
    { src: "/layers/Bubbles/Bubbles2.png", defaultColor: "#e0bb76", defaultName: "DR 09" },
    { src: "/layers/Bubbles/Bubbles3.png", defaultColor: "#3ea4ca", defaultName: "CJ 07" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/bubble1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/bubble2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/bubble3.webp',
  ],
};

const BubblesNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={BubblesLayer}
  />
);

export default BubblesNew;
