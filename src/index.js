import React from 'react';
import ReactDOM from 'react-dom';
import ImageLightboxContainer from './ImageLightboxContainer';

// there are 2 ways of getting images (local / flickr)
// pass the string 'flickr', into parameter: 'options', in order to flickr images
// otherwise by default, it will get local images
ReactDOM.render(<ImageLightboxContainer options="" />, document.getElementById('root'));
