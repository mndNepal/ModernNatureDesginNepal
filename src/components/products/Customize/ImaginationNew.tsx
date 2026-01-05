import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import ImaginationLayer from './ImaginationLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Imagination",
  layers: [
    { src: "/layers/Imagination/Imagination1.png", defaultColor: "#d6ccc0", defaultName: "AD 10" },
    { src: "/layers/Imagination/Imagination2.png", defaultColor: "#919aa2", defaultName: "BM 09" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/imagination1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/imagination2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/imagination3.webp',
  ],
};

const ImaginationNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={ImaginationLayer}
  />
);

export default ImaginationNew;
