import React from "react";
import PropTypes from "prop-types";

// column component
class Column extends React.Component {
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
    const { src, alt, index } = this.props;
    return (
      <div className="column">
        <img
          className="thumbnail"
          src={src}
          alt={alt}
          onClick={this.clickThumbnail}
          data-id={index}
        />
      </div>
    );
  }
}

Column.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  index: PropTypes.number,
  handleClickThumbnail: PropTypes.func,
};

export default Column;
