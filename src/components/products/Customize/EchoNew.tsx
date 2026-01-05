import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import EchoLayer from './EchoLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Echo",
  layers: [
    { src: "/layers/Echo/Echos1.png", defaultColor: "#E7AE18", defaultName: "DH 07" },
    { src: "/layers/Echo/Echos2.png", defaultColor: "#3EA4CA", defaultName: "CJ 07" },
    { src: "/layers/Echo/Echos3.png", defaultColor: "#D6CCC0", defaultName: "AD 10" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/echo1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/echo2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/echo3.webp',
  ],
};

const EchoNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={EchoLayer}
  />
);

export default EchoNew;
