import React, { useEffect, useState } from 'react';
import List from '../List/List';
import './Product.css'
import '../Favourite/Favourite'
import Favourite from '../Favourite/Favourite';


const Product = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    
    

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

const test = (min, max) => {
    let s1 = max - min + 1;
    let s2 = Math.random()*s1;
    let r = Math.floor(s2)+min;
    return r;
}

const chooseedProduct = () => {
    let index = test(0, cart.length - 1)
    const tem = cart[index]
    alert('Buy'+' ' +tem.first_name+' , '+'price : ' + tem.price)
    return tem;
}


    const addToFavourite = (product) =>{
        let mainBox = [...cart, product]
        if(mainBox.length <= 4 && product !== true){
        setCart(mainBox);
        }

        else{
            alert ('you cant add more')
        }
    }


    
    const reset = () =>{
        setCart([])
    }
    
    return (
        <div className='product-container'>
           
            <div className="list-container ">
                 
            {
                products.map(product=><List
                addToFavourite={addToFavourite}
                product={product}
                key={product.id}
                ></List>)
            }

            </div>
            <div className="favourite-container">
            <h1>Favourite Item</h1>
            
             <Favourite cart = {cart}
             
             
             ></Favourite>
           
                <div class="d-grid gap-2">
            <button class="btn btn-primary" onClick={chooseedProduct} type="button">Choose 1 for me</button>
            <button class="btn btn-danger" onClick={reset} type="button">Reset</button>
            </div>
            </div>
        </div>
    );
};

export default Product;