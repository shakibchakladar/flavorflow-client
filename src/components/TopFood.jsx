import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";

const TopFood = () => {
  const [topFood, setTopFood]=useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/topfood`)
    .then(res=>res.json())
    .then(data=>{
      setTopFood(data);
    })
  },[])
  return (
    <div>
      <div className="m-10 space-y-5 text-center p-15 ">
        <h2 className="text-5xl font-extrabold font-poppins text-[#FA7F08] ">
          Our Top Food
        </h2>
        <p>Here you can see our top testy foods collections</p>
      </div>
      <div className="grid grid-cols-1 p-5 md:grid-cols-3">
       {
        topFood?.map(tfood=><TopFoodCard key={tfood._id} tfood={tfood}></TopFoodCard>)
       }
      </div>
    </div>
  );
};

export default TopFood;
