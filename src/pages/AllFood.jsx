import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const AllFood = () => {
    const foods=useLoaderData();
    return (
        <div className="pt-10">
            <h2>All food :{foods.length}</h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {
                    foods.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
                }

            </div>
            
        </div>
    );
};

export default AllFood;