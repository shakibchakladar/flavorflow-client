// import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AllFood = () => {
  // const foods = useLoaderData();
  const [foods, setFoods] = useState([]);
  const [records, setRecods] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/foods`)
      .then((res) =>{ 
        setFoods(res.data)
        setRecods(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Filter = (event) => {
    setRecods(foods.filter(f => f?.name.toLowerCase().includes(event.target.value.toLowerCase())));
  };
  
  return (
    <div className="pt-10">
      <div>
        <div
          className="h-[450px] hero my-10 px5"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/znXTz9D/people-creating-food-content-upload-internet-food-lovers.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-extrabold shadow-lg font-poppins ">
                All Food
              </h1>
              {/* <button className="btn btn-primary">Get Started</button> */}
              <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                <label htmlFor="Search" className="hidden">
                  Search
                </label>
                {/* <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 text-gray-100 dark:text-gray-800"
                      >
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder="Search..."
                    className="w-32 py-2 pl-10 text-sm text-gray-100 bg-gray-800 rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:bg-gray-900 focus:dark:bg-gray-50 focus:border-violet-400 focus:dark:border-violet-600"
                  />
                </div> */}
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 m-2 text-center">
        <input
        onChange={Filter}
          type="text"
          placeholder="search here"
          className="w-full max-w-xs input input-bordered input-primary"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-3">
        {records?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
