import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import RingLayer from './RingLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Ring",
  layers: [
    { src: "/layers/Ring/Ring1.png", defaultColor: "#f2973c", defaultName: "DM 06" },
    { src: "/layers/Ring/Ring2.png", defaultColor: "#994d36", defaultName: "DN 07" },
    { src: "/layers/Ring/Ring3.png", defaultColor: "#212e41", defaultName: "BL 03" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/ring1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/ring2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/ring3.webp',
  ],
};

const RingNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={RingLayer}
  />
);

export default RingNew;
