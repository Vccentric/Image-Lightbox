import React from 'react';
import { hot } from 'react-hot-loader';

// column component
function Column(props) {
    const { src, alt } = props;
    return (
        <div className="column">
            <img className="thumbnail" src={`./images/${src}`} alt={alt} />
        </div>
    );
}

export default hot(module)(Column);
