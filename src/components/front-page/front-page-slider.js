import React from 'react';
import ImageSlider from '../image-slider/image-slider';

function importAll(r) {
  return r.keys().map(r);
}
// import all images in a folder
const images = importAll(require.context('../../images/frontPageImages', false, /\.(png|jpe?g|svg)$/));

export default class FrontPageSlider extends React.Component {
  render() {
    return (
      <ImageSlider images={images} />
    );
  }
}