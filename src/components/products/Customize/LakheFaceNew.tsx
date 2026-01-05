import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import LakheFaceLayer from './LakheFaceLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Lakhe Face",
  layers: [
    { src: "/layers/LakheFace/LakheFace1.png", defaultColor: "#141829", defaultName: "BM01" },
    { src: "/layers/LakheFace/LakheFace2.png", defaultColor: "#cbcad0", defaultName: "BM12" },
    { src: "/layers/LakheFace/LakheFace3.png", defaultColor: "#7e8492", defaultName: "BM08" },
    { src: "/layers/LakheFace/LakheFace4.png", defaultColor: "#6f757b", defaultName: "BM07" },
    { src: "/layers/LakheFace/LakheFace5.png", defaultColor: "#41464e", defaultName: "BM04" },
    { src: "/layers/LakheFace/LakheFace6.png", defaultColor: "#5c606c", defaultName: "BM06" },
    { src: "/layers/LakheFace/LakheFace7.png", defaultColor: "#2c2e39", defaultName: "BM03" },
    { src: "/layers/LakheFace/LakheFace8.png", defaultColor: "#191e2a", defaultName: "BM02" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/lakheface1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/lakheface2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/lakheface3.webp',
  ],
};

const LakheFaceNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={LakheFaceLayer}
  />
);

export default LakheFaceNew;
