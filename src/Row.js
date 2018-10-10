import React from 'react';
import { hot } from 'react-hot-loader';

// row component
function Row(props) {
    const { cols } = props;
    return <div className="row">{cols}</div>;
}

export default hot(module)(Row);
