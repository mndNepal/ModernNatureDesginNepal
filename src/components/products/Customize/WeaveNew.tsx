import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import WeavesLayer from './WeavesLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Weave",
  layers: [
    { src: "/layers/Weaves/Weave1.png", defaultColor: "#c0c5af", defaultName: "CR 09" },
    { src: "/layers/Weaves/Weave2.png", defaultColor: "#f1efec", defaultName: "AD 12" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/weave1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/weave2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/weave3.webp',
  ],
};

const WeaveNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={WeavesLayer}
  />
);

export default WeaveNew;
