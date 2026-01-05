import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import TidesLayer from './TidesLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Tides",
  layers: [
    { src: "/layers/Tides/Tides1.png", defaultColor: "#5c606c", defaultName: "BM 06" },
    { src: "/layers/Tides/Tides2.png", defaultColor: "#bed3cf", defaultName: "CF 12" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/tides1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/tides2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/tides3.webp',
  ],
};

const TidesNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={TidesLayer}
  />
);

export default TidesNew;
