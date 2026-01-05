import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import IllusionLayer from './IllusionLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Illusion",
  layers: [
    { src: "/layers/Illusion/Illusion1.png", defaultColor: "#433a3b", defaultName: "AJ 02" },
    { src: "/layers/Illusion/Illusion2.png", defaultColor: "#3ea4ca", defaultName: "CJ 07" },
    { src: "/layers/Illusion/Illusion3.png", defaultColor: "#f9f8f5", defaultName: "AH 12" },
    { src: "/layers/Illusion/Illusion4.png", defaultColor: "#627e2a", defaultName: "CL 03" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/illusion1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/illusion2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/illusion3.webp',
  ],
};

const IllusionNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={IllusionLayer}
  />
);

export default IllusionNew;
