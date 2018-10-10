import React from 'react';
import { hot } from 'react-hot-loader';

// list of sample images
const data = [
    { src: "img_mountains_wide.jpg", alt: 'img-1' },
    { src: "img_nature_wide.jpg", alt: 'img-2' },
    { src: "img_snow_wide.jpg", alt: 'img-3' },
];
const maxCols = 5;

// images grid component
class ImagesGrid extends React.Component {
    constructor(props) {
        super(props);
        this.clickImage = this.clickImage.bind(this);
    }

    // function to handle the click action on an image
    clickImage(event) {
        console.log(this);
        // TODO
    }

    render() {
        const total = data.length;
        const maxRows = ((total % maxCols) === 0) ? parseInt(total / maxCols, 0) : parseInt(total / maxCols, 0) + 1;

        // setup grid thumbnails
        const rows = [];
        let cols = [];
        for (let i = 0; i < maxRows; i++) { // rows
            for (let j = 0; j < maxCols; j++) { // columns
                const index = (i * maxCols) + j;
                if (data[index] === undefined) { // defensive check
                    break;
                }
                const { src, alt } = data[index];
                cols.push(<Column key={index} src={src} alt={alt} />);
            }
            rows.push(<Row key={i} cols={cols} />);
            cols = []; // reset
        }

        return (
            <div id="grid">
                {rows}
            </div>
        );
    }
}

// row component
function Row(props) {
    const { cols } = props;
    return <div className="row">{cols}</div>;
}

// column component
function Column(props) {
    const { src, alt } = props;
    return (
        <div className="column">
            <img className="thumbnail" src={`./images/${src}`} alt={alt} />
        </div>
    );
}

export default hot(module)(ImagesGrid);
