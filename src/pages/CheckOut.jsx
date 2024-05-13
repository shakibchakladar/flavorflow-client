import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
// import 'sweetalert2/src/sweetalert2.scss'

const CheckOut = () => {
  const food = useLoaderData();
  const { _id, img } = food;
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const [buyingDate, setBuyingDate] = useState(new Date());
  const handlePurchase = (e) => {
    e.preventDefault();
    const currentTimestamp = Date.now();
    setBuyingDate(new Date(currentTimestamp));
    const form = e.target;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const buyerName = form.buyerName.value;
    // const email = form.email.value;
    const date = form.buyingDate.value;

    const purchase = {
      buyerName: buyerName,
      foodName: foodName,
      food_id: _id,
      email:user?.email,
      date,
      price,
      img,
    };
    console.log(purchase);
    fetch(`${import.meta.env.VITE_API_URL}/purchase`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'success!',
            text: 'succesfully perchase',
            icon: 'success',
            confirmButtonText: 'ok'
          })
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
            readOnly
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
            readOnly
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
