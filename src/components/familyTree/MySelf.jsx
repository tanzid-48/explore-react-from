import React from 'react';
import Special from './Special';

const MySelf = ({asset}) => {
    return (
        <div>
            <h3>My self</h3>
            <Special asset = {asset}></Special>
        </div>
    );
};

export default MySelf;
