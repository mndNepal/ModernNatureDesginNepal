import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import BegnasLakeLayer from './BegnasLakeLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Begnas Lake",
  layers: [
    { src: "/layers/BegnasLake/BegnasLake1.png", defaultColor: "#5B80AA", defaultName: "BI 07" },
    { src: "/layers/BegnasLake/BegnasLake2.png", defaultColor: "#F9F8F5", defaultName: "AH 12" },
    { src: "/layers/BegnasLake/BegnasLake3.png", defaultColor: "#CBD0CF", defaultName: "BK 12" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/begnaslake1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/begnaslake2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/begnaslake3.webp',
  ],
};

const BegnasLakeNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={BegnasLakeLayer}
  />
);

export default BegnasLakeNew;
