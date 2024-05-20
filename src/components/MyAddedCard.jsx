// import { Link } from "react-router-dom";


const MyAddedCard = ({ myfood }) => {
  const { img, name, origin, price,_id} = myfood;

  const handleUpdate=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const price=e.target.price.value;
    const origin=e.target.origin.value;
    const img=e.target.img.value;

    const updatedFood={name,price,origin,img}
    console.log(updatedFood);

    fetch(`${import.meta.env.VITE_API_URL}/myfood/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updatedFood)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  }
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
          {/* <button className="text-white bg-orange-600 btn">Update</button> */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Update
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <div className="p-5 hero bg-base-200">
                <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
                  <form onSubmit={handleUpdate}  className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Food name</span>
                      </label>
                      <input
                        defaultValue={name}
                        // readOnly
                        type="text"
                        placeholder="food name"
                        className="input input-bordered"
                        required
                        name="name"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                       defaultValue={price}
                        name="price"
                        type="text"
                        placeholder="price"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Origin</span>
                      </label>
                      <input
                       defaultValue={origin}
                        name="origin"
                        type="text"
                        placeholder="origin"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Img url</span>
                      </label>
                      <input
                       defaultValue={img}
                        name="img"
                        type="text"
                        placeholder="img"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    
                    <div className="mt-6 form-control">
                      <input
                        className="text-white bg-orange-700 btn btn-block"
                        type="submit"
                        value="Submit updated food"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MyAddedCard;

