import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const FoodDetails = () => {
    const {user}=useContext(AuthContext)
  const { id } = useParams();
  // console.log(id);
  const [food, setFood] = useState({});

  useEffect(() => {
    // fetch(`${import.meta.env.VITE_API_URL}/singleFood/${id}`)
    fetch(`http://localhost:5000/propertyDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
        // console.log(data);
      });
  }, [id]);
  return (
   <div className="p-10 m-5">
     <div className="max-w-2xl p-10 mt-5 overflow-hidden bg-white rounded-lg shadow-md pt-36 dark:bg-gray-800">
      <img
        className="object-cover w-full h-64"
        src={food?.img}
        alt="Article"
      />

      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            {food?.name}
          </span>
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link"
          >
            <div className="flex justify-between">
            <p>category: {food?.category}</p>
            <p>price:{food?.price}</p>
            </div>
            <div>
                <p>Origine: {food?.origin}</p>
            </div>
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
           {food?.description}
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
          <p className="text-white">made by:   </p> <br />

              <img
                className="object-cover h-10 rounded-full"
                src={user?.photoURL}
                alt="Avatar"
              />
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                tabIndex="0"
                role="link"
              >
                {user?.displayName ||'no name'}
              </a>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              21 SEP 2023
            </span>
            
          </div>
        </div>
      </div>
     <Link to={`/checkout/${food?._id}`}> <button className="ml-[520px] p-2 m-5 btn bg-[#ae461d] border-none text-fuchsia-100">Purchage</button></Link>
    </div>
   </div>
  );
};

export default FoodDetails;
