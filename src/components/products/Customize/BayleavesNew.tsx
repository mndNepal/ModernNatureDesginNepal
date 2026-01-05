import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import BayLeavesLayer from './BayLeavesLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Bayleaves",
  layers: [
    { src: "/layers/BayLeave/BayLeave1.png", defaultColor: "#372a22", defaultName: "DT 01" },
    { src: "/layers/BayLeave/BayLeave2.png", defaultColor: "#e3ddd1", defaultName: "AD 11" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/bayleaves1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/bayleaves2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/bayleaves3.webp',
  ],
};

const BayleavesNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={BayLeavesLayer}
  />
);

export default BayleavesNew;
