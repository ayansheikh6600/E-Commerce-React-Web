import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios";

const Products = () => {

const [ApiData , SetApiData] = useState([])
    useEffect(()=>{


        console.log("Hellow")
        CallApi()
        
    }, [])

    const CallApi = async ()=>{
        try {
            const proData = await axios.get("https://fakestoreapi.com/products/") 
            console.log(proData.data)
            SetApiData(proData.data)
          //   console.log(ApiData) 
          } catch (error) {
              console.log("error", error);
          }
    }
  return (
    <div className="border-2 p-4 border-black w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {ApiData.map((value)=>{
        // console.log(value)
        return(
            <Card key={value.id} title={value.title} price={value.price} image={value.image}/>
        )
    })}
    </div>
  );
};

export default Products;
