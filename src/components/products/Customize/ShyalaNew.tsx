import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import ShyalaLayer from './ShyalaLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Shyala",
  layers: [
    { src: "/layers/Shyala/Shyala1.png", defaultColor: "#85787a", defaultName: "AJ 07" },
    { src: "/layers/Shyala/Shyala2.png", defaultColor: "#f6f3e6", defaultName: "AH 11" },
    { src: "/layers/Shyala/Shyala3.png", defaultColor: "#3f3128", defaultName: "AD 03" },
    { src: "/layers/Shyala/Shyala4.png", defaultColor: "#8e786a", defaultName: "AG 03" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/shyala1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/shyala2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/shyala3.webp',
  ],
};

const ShyalaNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={ShyalaLayer}
  />
);

export default ShyalaNew;
