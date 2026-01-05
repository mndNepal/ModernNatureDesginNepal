import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import RainForestLayer from './RainForestLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Rain Forest",
  layers: [
    { src: "/layers/RainForest/Rain Forest1.png", defaultColor: "#5c606c", defaultName: "BM 06" },
    { src: "/layers/RainForest/Rain Forest2.png", defaultColor: "#f4e7e4", defaultName: "AI 11" },
    { src: "/layers/RainForest/Rain Forest3.png", defaultColor: "#b79864", defaultName: "DB 06" },
    { src: "/layers/RainForest/Rain Forest4.png", defaultColor: "#75581e", defaultName: "DE 04" },
    { src: "/layers/RainForest/Rain Forest5.png", defaultColor: "#58351d", defaultName: "DR 01" },
    { src: "/layers/RainForest/Rain Forest6.png", defaultColor: "#5e1720", defaultName: "AS 01" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/rainforest1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/rainforest2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/rainforest3.webp',
  ],
};

const RainForestNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={RainForestLayer}
  />
);

export default RainForestNew;
