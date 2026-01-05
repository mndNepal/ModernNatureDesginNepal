import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import BaasnLayer from './BaasnLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Baasn",
  layers: [
    { src: "/layers/Baasn/Baasn1.png", defaultColor: "#c07503", defaultName: "DH 02" },
    { src: "/layers/Baasn/Baasn2.png", defaultColor: "#162f15", defaultName: "CS 04" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/baasn1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/baasn2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/baasn3.webp',
  ],
};

const BaasnNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={BaasnLayer}
  />
);

export default BaasnNew;
