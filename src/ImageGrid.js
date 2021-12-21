import React from "react";
import PropTypes from "prop-types";
import Row from "./Row";
import Column from "./Column";

// global variables
const maxCols = 5;

// images grid component
class ImageGrid extends React.Component {
  constructor(props) {
    super(props);
    this.clickThumbnail = this.clickThumbnail.bind(this);
  }

  // function to handle the click action on an image
  clickThumbnail(event) {
    const { handleClickThumbnail } = this.props;
    handleClickThumbnail(event);
  }

  render() {
    const { images } = this.props;
    const total = images.length;
    const maxRows =
      total % maxCols === 0
        ? parseInt(total / maxCols, 0)
        : parseInt(total / maxCols, 0) + 1;

    // setup grid thumbnails
    const rows = [];
    let cols = [];
    for (let i = 0; i < maxRows; i++) {
      // rows
      for (let j = 0; j < maxCols; j++) {
        // columns
        const index = i * maxCols + j;
        if (images[index] === undefined) {
          // defensive check
          break;
        }
        const { src, alt } = images[index];
        cols.push(
          <Column
            key={index}
            src={src}
            alt={alt}
            handleClickThumbnail={this.clickThumbnail}
            index={index}
          />
        );
      }
      rows.push(<Row key={i} cols={cols} />);
      cols = []; // reset
    }

    return <div id="grid">{rows}</div>;
  }
}

ImageGrid.propTypes = {
  images: PropTypes.array,
  handleClickThumbnail: PropTypes.func,
};

export default ImageGrid;
