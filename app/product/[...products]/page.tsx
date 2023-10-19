import React from 'react'

const productsDetail = ({params} : {params: {productsid: string}})=> {
    return ( 
    <div>products {params.productsid[1]}</div>
    );
};
export default productsDetail