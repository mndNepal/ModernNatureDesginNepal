import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import HoliLayer from './HoliLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Holi",
  layers: [
    { src: "/layers/Holi/Holi1.png", defaultColor: "#3e7d74", defaultName: "CI 04" },
    { src: "/layers/Holi/Holi2.png", defaultColor: "#d96721", defaultName: "DM 04" },
    { src: "/layers/Holi/Holi3.png", defaultColor: "#81795c", defaultName: "CO 07" },
    { src: "/layers/Holi/Holi4.png", defaultColor: "#c1c3b0", defaultName: "CQ 11" },
    { src: "/layers/Holi/Holi5.png", defaultColor: "#f9f8f5", defaultName: "AH 12" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/holi1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/holi2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/holi3.webp',
  ],
};

const HoliNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={HoliLayer}
  />
);

export default HoliNew;
