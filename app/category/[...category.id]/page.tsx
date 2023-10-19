import React from 'react'

const CategoryDetail = ({params} : {params: {categoryid: string}})=> {
    return ( 
    <div>Category {params.categoryid[1]}</div>
    );
};
export default CategoryDetail