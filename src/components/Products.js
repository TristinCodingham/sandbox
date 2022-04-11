import React, { useState, useEffect } from 'react';
import Droppable from './Droppable';

export default function Products() {
  const [productsList1, setProductsList1] = useState([
    {id: 1, type:"product1", name: "metallic paint"},
    {id: 2, type:"product1", name: "smash and grab"},
    {id: 3, type:"product1", name: "nano liquid"},
  ]);
  const [productsList2, setProductsList2] = useState([
    {id: 4, type:"product2", name: "rim & tire"},
    {id: 5, type:"product2", name: "anti theft"},
    {id: 6, type:"product2", name: "insurance"},
  ]);
  // const [productsList3, setProductsList3] = useState([
  //   {id: 7, type:"product3", name: "car cover"},
  //   {id: 8, type:"product3", name: "fuel"},
  //   {id: 9, type:"product3", name: "vallet"},
  // ]);

  const [productsAdded, setProductsAdded] = useState([]);

  useEffect(() => {
    console.log("productsList1: ", productsList1);
    console.log("productsList2: ", productsList2);
    console.log("productsAdded: ", productsAdded);
  }, [productsList1, productsList2, productsList3, productsAdded]);

    return (
      <>
      <div style={{display: "flex", gap: "30px"}}>
        <Droppable products={productsList1} addProducts={[setProductsList1]} removeProducts={[setProductsAdded]} types={["product1"]} css="drag" />
        <Droppable products={productsList2} addProducts={[setProductsList2]} removeProducts={[setProductsAdded]} types={["product2"]} css="drag" />
      </div>
      <Droppable products={productsAdded} addProducts={[setProductsAdded]} removeProducts={[setProductsList1, setProductsList2]} types={["product1", "product2"]} css="drop" />
      </>
    )
  }
