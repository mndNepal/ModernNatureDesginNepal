import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import OnTheRoadLayer from './OnTheRoadLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "On The Road",
  layers: [
    { src: "/layers/OnTheRoad/OnTheRoad1.png", defaultColor: "#9a8e7c", defaultName: "AC 07" },
    { src: "/layers/OnTheRoad/OnTheRoad2.png", defaultColor: "#ddd8d0", defaultName: "AC 12" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/ontheroad1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/ontheroad2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/ontheroad3.webp',
  ],
};

const OnTheRoadNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={OnTheRoadLayer}
  />
);

export default OnTheRoadNew;
