import React from 'react';

const Service = ({service}) => {
    const {name,img,description} = service;
    return (
        <div>
            <img src={img} alt="" />
          <h2> Service Name: {name}</h2>
        </div>
    );
};

export default Service;