import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyAddedCard from "../components/MyAddedCard";

const MyAddedFood = () => {
  const { user } = useContext(AuthContext);
  const [myAddedFood, setMyAddedFood] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/myfood/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyAddedFood(data);
      });
  }, []);
  return (
    <div className="pt-5 mt-8">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My added food</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {myAddedFood.length}
        </span>
      </div>
      <div className="container grid items-center grid-cols-1 gap-5 px-12 mx-auto md:grid-cols-2">
        {
            myAddedFood?.map(myfood=><MyAddedCard key={myfood._id} myfood={myfood}></MyAddedCard>)
        }

      </div>
    </div>
  );
};

export default MyAddedFood;
