import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import FestivalLayer from './FestivalLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Festival",
  layers: [
    { src: "/layers/Festival/Festival1.png", defaultColor: "#F9F8F5", defaultName: "AH 12" },
    { src: "/layers/Festival/Festival2.png", defaultColor: "#CCB480", defaultName: "DD 10" },
    { src: "/layers/Festival/Festival3.png", defaultColor: "#4A684D", defaultName: "CS 08" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/festival1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/festival2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/festival3.webp',
  ],
};

const FestivalNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={FestivalLayer}
  />
);

export default FestivalNew;
