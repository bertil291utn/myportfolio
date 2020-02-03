import React, { Component } from 'react';

const Info = ({ children }) => {
    return (
        <div className="Info">
            <div className="Info-container">
                {children}
            </div>
        </div>
    );
}

export default Info;