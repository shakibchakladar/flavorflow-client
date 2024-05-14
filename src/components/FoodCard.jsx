import { Link } from "react-router-dom";

const FoodCard = ({food}) => {
    const {name,img,category,price,_id}=food;
    // console.log(food._id);
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      <div
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      ></div>

      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-orange-600">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {name}
        </h3>
        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            category:{category}
          </span>
          <span className="font-bold text-gray-800 dark:text-gray-200">
            {/* Quantity:{quantity} */}
          </span>
          
        </div>
        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">
            Price:{price}
          </span>
          <Link to={`/details/${food?._id}`}><button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-orange-700 rounded hover:bg-orange-500 dark:hover:bg-orange-600 focus:bg-gray-700 dark:focus:bg-orange-600 focus:outline-none">
            View details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
