import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import KapaalLayer from './KapaalLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Kapaal",
  layers: [
    { src: "/layers/Kapaal/Kapaal1.png", defaultColor: "#e19f04", defaultName: "DI 01" },
    { src: "/layers/Kapaal/Kapaal2.png", defaultColor: "#0c120d", defaultName: "CA 01" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/kapaal1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/kapaal2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/kapaal3.webp',
  ],
};

const KapaalNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={KapaalLayer}
  />
);

export default KapaalNew;
