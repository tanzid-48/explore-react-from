import React, { useState } from 'react';

const ProductFrom = ({ handleAddProduct}) => 
{
     const [error,setError] = useState('')


    const handleProductSubmit = (e) =>{
        e.preventDefault();
        const name =e.target.name.value;  
        const price =e.target.price.value;  
        const quantity =e.target.quantity.value;  
        // console.log(name,price,quantity)
        // validation 

        if(name.length === 0){
            setError("please Provide Product name");
            return;
        }else if(price.length === 0){
            setError("please provide a price");
            return;
        }else if (price < 0){
            setError("price Can't negative");
            return;
        }else if(quantity.length === 0){
            setError("please provide a quantity");
            return;
        }else if (quantity < 0){
            setError("quantity Can't negative");
            return;
        }else{
            setError('')
        }

        const newProduct = {
            name,
            price,
            quantity,
        }
        // console.log(newProduct);
        // condition
        
            handleAddProduct(newProduct)

    }
    return (
        <div>
            <h2>Add a Product</h2>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' /><br />
                <input type="text" name="price" id="" placeholder='Price' /><br />
                <input type="text" name="quantity" id=""  placeholder='Quantity'/><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: "red"}}><small>{error}</small></p>
        </div>
    );
};

export default ProductFrom;