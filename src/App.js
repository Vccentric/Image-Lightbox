import React from 'react';
import { hot } from 'react-hot-loader';
import ImagesGrid from './image-lightbox';

function App(props) {
    return (
        <div className="App">
            <h1>Image Lightbox!!!</h1>
            <ImagesGrid />
        </div>
    );
}

export default hot(module)(App);
