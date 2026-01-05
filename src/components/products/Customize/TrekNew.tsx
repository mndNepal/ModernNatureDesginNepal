import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import TrekLayer from './TrekLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Trek",
  layers: [
    { src: "/layers/Trek/Trek1.png", defaultColor: "#989e92", defaultName: "CA 08" },
    { src: "/layers/Trek/Trek2.png", defaultColor: "#daaa7e", defaultName: "DS 08" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/trek1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/trek2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/trek3.webp',
  ],
};

const TrekNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={TrekLayer}
  />
);

export default TrekNew;
