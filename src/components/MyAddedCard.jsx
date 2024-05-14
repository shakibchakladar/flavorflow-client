// import { Link } from "react-router-dom";

const MyAddedCard = ({ myfood }) => {
  const { img, name, origin, price } = myfood;
  return (
    <div className="shadow-xl card card-compact w-96 bg-base-100">
      <figure>
        <img className="h-[300px] w-full" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between gap-5">
          <p className="font-bold">price: {price}</p>
        </div>
        <h2>origin: {origin}</h2>

        <div className="justify-end card-actions">
          <button className="text-white bg-orange-600 btn">Update</button>
        </div>
      </div>
    </div>
  );
};

export default MyAddedCard;
