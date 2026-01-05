import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import WaterCoinLayer from './WaterCoinLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Water Coin",
  layers: [
    { src: "/layers/WaterCoin/Water Coins1.png", defaultColor: "#8f8329", defaultName: "DG 02" },
    { src: "/layers/WaterCoin/Water Coins2.png", defaultColor: "#96a063", defaultName: "CM 09" },
    { src: "/layers/WaterCoin/Water Coins3.png", defaultColor: "#2e2f15", defaultName: "CQ 01" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/watercoin1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/watercoin2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/watercoin3.webp',
  ],
};

const WaterCoinNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={WaterCoinLayer}
  />
);

export default WaterCoinNew;
