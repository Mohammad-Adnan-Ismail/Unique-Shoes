import React from 'react';

const Favourite = ({cart}) => {

    return (
        <div >

        <p>selected items: {cart.length}</p>
            <h3>name: {cart.first_name}</h3>
           {
               cart.map((cart)=> <h3>{cart.first_name}</h3>)
           }
            

 

        </div>
    );
};

export default Favourite