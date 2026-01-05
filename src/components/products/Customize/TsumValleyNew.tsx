import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import TsumValleyLayer from './TsumValleyLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Tsum Valley",
  layers: [
    { src: "/layers/TsumValley/TsumValley1.png", defaultColor: "#516e1e", defaultName: "CL 01" },
    { src: "/layers/TsumValley/TsumValley2.png", defaultColor: "#921229", defaultName: "AO 01" },
    { src: "/layers/TsumValley/TsumValley3.png", defaultColor: "#e19f04", defaultName: "DI 01" },
    { src: "/layers/TsumValley/TsumValley4.png", defaultColor: "#f6f3e6", defaultName: "AH 11" },
    { src: "/layers/TsumValley/TsumValley5.png", defaultColor: "#91be9f", defaultName: "CH 09" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/tsumvalleypatan1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/tsumvalleypatan2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/tsumvalleypatan3.webp',
  ],
};

const TsumValleyNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={TsumValleyLayer}
  />
);

export default TsumValleyNew;
