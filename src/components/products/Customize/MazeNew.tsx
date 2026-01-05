import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import MazeLayer from './MazeLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Maze",
  layers: [
    { src: "/layers/Maze/Maze1.png", defaultColor: "#9fad98", defaultName: "CC 07" },
    { src: "/layers/Maze/Maze2.png", defaultColor: "#4e555a", defaultName: "BM 05" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/maze1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/maze2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/maze3.webp',
  ],
};

const MazeNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={MazeLayer}
  />
);

export default MazeNew;
