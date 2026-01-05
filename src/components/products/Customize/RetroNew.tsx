import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import RetroLayer from './RetroLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Retro",
  layers: [
    { src: "/layers/Retro/Retro1.png", defaultColor: "#8d96a0", defaultName: "BN 09" },
    { src: "/layers/Retro/Retro2.png", defaultColor: "#8e786a", defaultName: "AG 03" },
    { src: "/layers/Retro/Retro3.png", defaultColor: "#53494a", defaultName: "AJ 03" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/retro1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/retro2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/retro3.webp',
  ],
};

const RetroNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={RetroLayer}
  />
);

export default RetroNew;
