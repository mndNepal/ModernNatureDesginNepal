import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import AttractionLayer from './AttractionLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Attraction",
  layers: [
    { src: "/layers/Attraction/Attraction1.png", defaultColor: "#ab9f9f", defaultName: "AJ 10" },
    { src: "/layers/Attraction/Attraction2.png", defaultColor: "#564641", defaultName: "AA 10" },
    { src: "/layers/Attraction/Attraction3.png", defaultColor: "#3ea4ca", defaultName: "CJ 07" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/attraction1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/attraction2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/attraction3.webp',
  ],
};

const AttractionNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={AttractionLayer}
  />
);

export default AttractionNew;
