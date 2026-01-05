import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import WaterBrustLayer from './WaterBrustLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Water Brust",
  layers: [
    { src: "/layers/WaterBrust/Water Brust1.png", defaultColor: "#68bac8", defaultName: "CJ 08" },
    { src: "/layers/WaterBrust/Water Brust2.png", defaultColor: "#debf56", defaultName: "DH 10" },
    { src: "/layers/WaterBrust/Water Brust3.png", defaultColor: "#cebb95", defaultName: "DB 09" },
    { src: "/layers/WaterBrust/Water Brust4.png", defaultColor: "#f1efec", defaultName: "AD 12" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/waterbrust1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/waterbrust2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/waterbrust3.webp',
  ],
};

const WaterBrustNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={WaterBrustLayer}
  />
);

export default WaterBrustNew;
