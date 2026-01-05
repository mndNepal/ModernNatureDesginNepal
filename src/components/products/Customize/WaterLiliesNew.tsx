import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import WaterLiliesLayer from './WaterLiliesLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Water Lilies",
  layers: [
    { src: "/layers/WaterLillies/Water Lilies1.png", defaultColor: "#f2efbb", defaultName: "DF 12" },
    { src: "/layers/WaterLillies/Water Lilies2.png", defaultColor: "#562538", defaultName: "ED 02" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/waterlilies1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/waterlilies2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/waterlilies3.webp',
  ],
};

const WaterLiliesNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={WaterLiliesLayer}
  />
);

export default WaterLiliesNew;
