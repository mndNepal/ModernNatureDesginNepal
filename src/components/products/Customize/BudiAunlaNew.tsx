import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import BudiAunlaLayer from './BudiAunlaLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Budi Aunla",
  layers: [
    { src: "/layers/BudiAunla/Budi Aunla1.png", defaultColor: "#674D72", defaultName: "EM 04" },
    { src: "/layers/BudiAunla/Budi Aunla2.png", defaultColor: "#AABC6D", defaultName: "CL 07" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/budiaunla1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/budiaunla2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/budiaunla3.webp',
  ],
};

const BudiAunlaNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={BudiAunlaLayer}
  />
);

export default BudiAunlaNew;
