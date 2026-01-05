import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import NamcheBazarLayer from './NamcheBazarLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Namche Bazar",
  layers: [
    { src: "/layers/NamcheBazar/NamcheBazar1.png", defaultColor: "#fff5e9", defaultName: "D0 12" },
    { src: "/layers/NamcheBazar/NamcheBazar2.png", defaultColor: "#4e555a", defaultName: "BM 05" },
    { src: "/layers/NamcheBazar/NamcheBazar3.png", defaultColor: "#85787a", defaultName: "AJ 07" },
    { src: "/layers/NamcheBazar/NamcheBazar4.png", defaultColor: "#a8aa9f", defaultName: "CA 09" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/namchebazar1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/namchebazar2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/namchebazar3.webp',
  ],
};

const NamcheBazarNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={NamcheBazarLayer}
  />
);

export default NamcheBazarNew;
