import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.foodName.value;
    const img = e.target.image.value;
    const category = e.target.category.value;
    const price ='$'+ e.target.price.value;
    const email = user?.email;
    const origin = e.target.origin.value;
    const description = e.target.description.value;
    // console.log(foodName,image,category,price,owner,origin,description);
    const info={name,img,category,price,email,origin,description}
    console.log(info);
    fetch(`${import.meta.env.VITE_API_URL}/addfood`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
              title: "success",
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "yes",
            });
          }
    })
  };
  return (
    <div>
      {/* <h2>service: {title}</h2> */}
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="foodName"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food image</span>
          </label>
          <input
            type="text"
            placeholder="img url"
            name="image"
            className="input input-bordered"
            required
          />
        </div>
        <div className="flex justify-between gap-5">
          <div className="w-1/2 form-control">
            <label className="label">
              <span className="label-text">food price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="w-1/2 form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Added by</span>
            </label>
            <input
             defaultValue={user?.email}
              type="email"
              name="email"
              placeholder="owner email"
              readOnly
              className="input input-bordered"
              required
            />
          </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Origin</span>
          </label>
          <input
            type="text"
            name="origin"
            placeholder="origin"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="description"
            className="input input-bordered"
            required
          />
        </div>
        <div className="mt-6 form-control">
          <input
            className="text-white bg-orange-700 btn btn-block"
            type="submit"
            value="Add Food"
          />
        </div>
      </form>
    </div>
  );
};

export default AddFood;
