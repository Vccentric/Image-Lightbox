import React from 'react';
import { hot } from 'react-hot-loader';
import ImageGrid from './ImageGrid';
import './image-lightbox.css';

function App(props) {
    return (
        <div id="app">
            <h1>Image Lightbox!!!</h1>
            <ImageGrid />
        </div>
    );
}

export default hot(module)(App);
