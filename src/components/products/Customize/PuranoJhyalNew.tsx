import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import PuranoJhyalLayer from './PuranoJhyalLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Purano Jhyal",
  layers: [
    { src: "/layers/PuranoJhyal/PuranoJhyal1.png", defaultColor: "#f7eda6", defaultName: "DI10" },
    { src: "/layers/PuranoJhyal/PuranoJhyal2.png", defaultColor: "#6f757b", defaultName: "BM07" },
    { src: "/layers/PuranoJhyal/PuranoJhyal3.png", defaultColor: "#2c2e39", defaultName: "BM03" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/puranojhyal1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/puranojhyal2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/puranojhyal3.webp',
  ],
};

const PuranoJhyalNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={PuranoJhyalLayer}
  />
);

export default PuranoJhyalNew;
