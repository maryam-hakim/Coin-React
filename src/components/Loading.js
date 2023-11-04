import React from 'react';
import spinner from '../assets/Spinner-1s-200px (1).gif';

const Loading = () => {
    return (
        <div>
            <img src={spinner} alt="spinner"></img>
            <h3 >Loading...</h3>
            
        </div>
    );
};

export default Loading;