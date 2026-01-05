import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import TiharLayer from './TiharLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Tihar",
  layers: [
    { src: "/layers/Tihar/Tihar1.png", defaultColor: "#52717a", defaultName: "CF 05" },
    { src: "/layers/Tihar/Tihar2.png", defaultColor: "#94b1ad", defaultName: "CG 10" },
    { src: "/layers/Tihar/Tihar3.png", defaultColor: "#c0c5af", defaultName: "CR 09" },
    { src: "/layers/Tihar/Tihar4.png", defaultColor: "#dbd8c4", defaultName: "CO 12" },
    { src: "/layers/Tihar/Tihar5.png", defaultColor: "#fceecc", defaultName: "DR 12" },
    { src: "/layers/Tihar/Tihar6.png", defaultColor: "#be9265", defaultName: "DS 07" },
    { src: "/layers/Tihar/Tihar7.png", defaultColor: "#781d23", defaultName: "AT 03" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/tihar1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/tihar2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/tihar3.webp',
  ],
};

const TiharNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={TiharLayer}
  />
);

export default TiharNew;
