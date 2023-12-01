import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
export default function Products() {
    const [listProducts, setListProducts] = useState([])
    const data = useSelector(state1=>state1)
    console.log(data);
    const {products} = data.abc
    useEffect(() => {
        axios.get("http://localhost:5578/products")
            .then((res) => {
                setListProducts(res.data)
            })
    }, [])
    
    const productName = listProducts.map((product)=>{
        return product.productDetail.map((detail)=>{
            return detail.product
        })
    })
    console.log(productName);
    return (
        <>
           
        </>
    )
}
