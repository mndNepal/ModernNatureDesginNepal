import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import JungleTribesLayer from './JungleTribesLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Jungle Tribes",
  layers: [
    { src: "/layers/JungleTribes/JungleTribes1.png", defaultColor: "#ddd0b3", defaultName: "CI 04" },
    { src: "/layers/JungleTribes/JungleTribes2.png", defaultColor: "#63613d", defaultName: "DM 04" },
    { src: "/layers/JungleTribes/JungleTribes3.png", defaultColor: "#4f3a2e", defaultName: "CO 07" },
    { src: "/layers/JungleTribes/JungleTribes4.png", defaultColor: "#857654", defaultName: "CQ 11" },
    { src: "/layers/JungleTribes/JungleTribes5.png", defaultColor: "#c5b373", defaultName: "AH 12" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/jungletribes1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/jungletribes2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/jungletribes3.webp',
  ],
};

const JungleTribesNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={JungleTribesLayer}
  />
);

export default JungleTribesNew;
