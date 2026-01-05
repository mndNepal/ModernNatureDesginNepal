import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import KundaLayer from './KundaLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Kunda",
  layers: [
    { src: "/layers/Kunda/Kunda1.png", defaultColor: "#feeccb", defaultName: "DM 11" },
    { src: "/layers/Kunda/Kunda2.png", defaultColor: "#a39374", defaultName: "CN 10" },
    { src: "/layers/Kunda/Kunda3.png", defaultColor: "#db988a", defaultName: "EH 09" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/kunda1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/kunda2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/kunda3.webp',
  ],
};

const KundaNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={KundaLayer}
  />
);

export default KundaNew;
