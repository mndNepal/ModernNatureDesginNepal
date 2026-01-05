import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import AankhiJhyalLayer from './AankhiJhyalLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Aankhi Jhyal",
  layers: [
    { src: "/layers/AankhiJhyal/AankhiJhyal1.png", defaultColor: "#b2945f", defaultName: "DT 07" },
    { src: "/layers/AankhiJhyal/AankhiJhyal2.png", defaultColor: "#191e2a", defaultName: "BM 02" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/aankhijhyal1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/aankhijhyal2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/aankhijhyal3.webp',
  ],
};

const AankhiJhyalNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={AankhiJhyalLayer}
  />
);

export default AankhiJhyalNew;
