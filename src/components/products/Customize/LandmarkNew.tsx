import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import LandMarkLayer from './LandMarkLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Landmark",
  layers: [
    { src: "/layers/LandMark/LandMark1.png", defaultColor: "#e3ddd1", defaultName: "AD11" },
    { src: "/layers/LandMark/LandMark2.png", defaultColor: "#f1efec", defaultName: "AD12" },
    { src: "/layers/LandMark/LandMark3.png", defaultColor: "#695c4e", defaultName: "AC05" },
    { src: "/layers/LandMark/LandMark4.png", defaultColor: "#473a38", defaultName: "AA09" },
    { src: "/layers/LandMark/LandMark5.png", defaultColor: "#8b1827", defaultName: "AP01" },
    { src: "/layers/LandMark/LandMark6.png", defaultColor: "#c85113", defaultName: "DM02" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/landmark1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/landmark2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/landmark3.webp',
  ],
};

const LandmarkNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={LandMarkLayer}
  />
);

export default LandmarkNew;
