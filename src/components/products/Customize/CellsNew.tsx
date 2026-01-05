import React from 'react';
import ProductCustomizer from './ProductCustomizer';
import CellsLayer from './CellsLayer';
import colorDataA from '../../../../color.json';
import colorDataB from '../../../../colorb.json';
import colorDataC from '../../../../colorC.json';
import colorDataD from '../../../../colorD.json';
import colorDataE from '../../../../colorE.json';
import { colorData1000 } from './colorData1000';

const config = {
  name: "Cells",
  layers: [
    { src: "/layers/Cells/cells1.png", defaultColor: "#37302A", defaultName: "AE 02" },
    { src: "/layers/Cells/cells2.png", defaultColor: "#C6A96C", defaultName: "DF 07" },
    { src: "/layers/Cells/cells3.png", defaultColor: "#8F8176", defaultName: "AA 12" },
    { src: "/layers/Cells/cells4.png", defaultColor: "#E4DEC1", defaultName: "DA 12" },
    { src: "/layers/Cells/cells5.png", defaultColor: "#806272", defaultName: "ES 07" },
  ],
  detailImages: [
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/cells1.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/cells2.webp',
    'https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/ProductDetailImages/cells3.webp',
  ],
};

const CellsNew: React.FC = () => (
  <ProductCustomizer
    config={config}
    colorData1000={colorData1000}
    colorData1200A={colorDataA}
    colorData1200B={colorDataB}
    colorData1200C={colorDataC}
    colorData1200D={colorDataD}
    colorData1200E={colorDataE}
    LayerComponent={CellsLayer}
  />
);

export default CellsNew;
