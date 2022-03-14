import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return(
        <FeatureContainer>
            <h1>Deal of the week</h1>
            <p> 5% off on Bike rents</p>
            <FeatureButton>Book Now</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature;