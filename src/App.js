import React from 'react';
import { hot } from 'react-hot-loader';
import ImageGrid from './ImageGrid';

function App(props) {
    return (
        <div className="App">
            <h1>Image Lightbox!!!</h1>
            <ImageGrid />
        </div>
    );
}

export default hot(module)(App);
