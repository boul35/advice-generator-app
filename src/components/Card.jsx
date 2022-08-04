import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AdviceService from '../service/Advice-Service'



const adviceService = new AdviceService();


const Card = () => 

{ const [data,setData] = useState([]);

    const getAdvice = async () => {
        const data  = await adviceService.getAdvice();
        console.log(data);
        console.log("test")
        setData(data.slip);
        
    }

    useEffect (( ) =>{
      getAdvice();
        
    }, []);
    
    return (

    <div>

        <h1 className="Quote__Title">advice number {data.id}</h1>
        <p className="Quote__Text">{data.advice}</p>
        <button className="Quote__Button" onClick={getAdvice}></button>
        
    </div>);
  
};

export default Card