import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import SmokeLayer from './SmokeLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Smoke",
  layers: [
    { src: "/layers/Smoke/Smoke1.png", defaultColor: "#a8d5d3", defaultName: "CJ10" },
    { src: "/layers/Smoke/Smoke2.png", defaultColor: "#c4dfda", defaultName: "CJ11" },
    { src: "/layers/Smoke/Smoke3.png", defaultColor: "#e2e3e4", defaultName: "BF12" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/smoke1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/smoke2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/smoke3.webp',
  ],
};

const SmokeNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={SmokeLayer}
  />
);

export default SmokeNew;
