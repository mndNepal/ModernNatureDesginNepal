import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import NaghDahaLayer from './NaghDahaLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Nagh Daha",
  layers: [
    { src: "/layers/NaghDaha/NaghDaha1.png", defaultColor: "#283f6c", defaultName: "BD 07" },
    { src: "/layers/NaghDaha/NaghDaha2.png", defaultColor: "#b4b7cb", defaultName: "BD 12" },
    { src: "/layers/NaghDaha/NaghDaha3.png", defaultColor: "#8f8176", defaultName: "AA 12" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/naghdaha1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/naghdaha2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/naghdaha3.webp',
  ],
};

const NaghDahaNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={NaghDahaLayer}
  />
);

export default NaghDahaNew;
