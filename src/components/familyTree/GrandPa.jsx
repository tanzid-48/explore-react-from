import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const GrandPa = ({asset}) => {
    return (
        <div>
            <h3>GrandPa</h3>
            <section className='flex'>
                <Dad asset = {asset}></Dad>
                <Uncle  asset = {asset}></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default GrandPa;