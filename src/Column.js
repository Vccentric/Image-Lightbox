import React from 'react';
import { hot } from 'react-hot-loader';

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
        const { src, alt } = this.props;
        return (
            <div className="column">
                <img className="thumbnail" src={`./images/${src}`} alt={alt} onClick={this.clickThumbnail} />
            </div>
        );
    }
}

export default hot(module)(Column);
