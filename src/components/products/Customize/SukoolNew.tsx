import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import SukoolLayer from './SukoolLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Sukool",
  layers: [
    { src: "/layers/Sukool/Sukool1.png", defaultColor: "#433a3b", defaultName: "AJ 02" },
    { src: "/layers/Sukool/Sukool2.png", defaultColor: "#747b6f", defaultName: "CA 07" },
    { src: "/layers/Sukool/Sukool3.png", defaultColor: "#bdbaa3", defaultName: "CQ 10" },
    { src: "/layers/Sukool/Sukool4.png", defaultColor: "#fefbda", defaultName: "DJ 12" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/sukool1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/sukool2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/sukool3.webp',
  ],
};

const SukoolNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={SukoolLayer}
  />
);

export default SukoolNew;
