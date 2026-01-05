import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import TheWallLayer from './TheWallLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "The Wall",
  layers: [
    { src: "/layers/TheWall/TheWall1.png", defaultColor: "#8d987e", defaultName: "CT 10" },
    { src: "/layers/TheWall/TheWall2.png", defaultColor: "#c4b595", defaultName: "DB 11" },
    { src: "/layers/TheWall/TheWall3.png", defaultColor: "#927f6e", defaultName: "AD 07" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/thewall1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/thewall2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/thewall3.webp',
  ],
};

const TheWallNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={TheWallLayer}
  />
);

export default TheWallNew;
