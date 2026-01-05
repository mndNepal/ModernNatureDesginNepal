import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import MandroLayer from './MandroLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Mandro",
  layers: [
    { src: "/layers/Mandro/Mandro1.png", defaultColor: "#afacb9", defaultName: "DG 12" },
    { src: "/layers/Mandro/Mandro2.png", defaultColor: "#f9ae53", defaultName: "BI 05" },
    { src: "/layers/Mandro/Mandro3.png", defaultColor: "#e2e3e4", defaultName: "CL 04" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/mandro1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/mandro2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/mandro3.webp',
  ],
};

const MandroNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={MandroLayer}
  />
);

export default MandroNew;
