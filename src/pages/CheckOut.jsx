import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const CheckOut = () => {
  const food = useLoaderData();
  console.log(food);
  const {user}=useContext(AuthContext)
  const [buyingDate, setBuyingDate] = useState(new Date());
  const handlePurchase = (e) => {
    e.preventDefault()
    const currentTimestamp = Date.now();
    setBuyingDate(new Date(currentTimestamp));
    const form=e.target;
    const foodName=form.foodName.value;
    const price=form.price.value;
    const buyerName=form.buyerName.value;
    const email=form.email.value;
    const date=form.buyingDate.value;
    console.log(foodName,price,buyerName,email,date);
  };

  return (
    <div>
      {/* <h2>service: {title}</h2> */}
      <form onSubmit={handlePurchase} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food name</span>
          </label>
          <input
            defaultValue={food?.name}
            type="text"
            placeholder="name"
            name="foodName"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">food price</span>
          </label>
          <input
            type="text"
            name="price"
            defaultValue={food?.price}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Buyer name</span>
          </label>
          <input
            defaultValue={user?.displayName}
            type="text"
            placeholder="buyerName"
            name="buyerName"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
              defaultValue={user?.email}
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Buying Date</span>
          </label>
          <input
            type="text"
            name="buyingDate"
            value={buyingDate.toLocaleString()}
            readOnly
            className="input input-bordered"
            required
          />
        </div>
        
        <div className="mt-6 form-control">
          <input 
            className="text-white bg-orange-700 btn btn-block"
            type="submit"
            value="Purchage Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
