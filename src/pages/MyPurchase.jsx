import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyPurchaseCard from "../components/MyPurchaseCard";
import Swal from "sweetalert2";

const MyPurchase = () => {
  const { user } = useContext(AuthContext);
  const [purchase, setPurchase] = useState([]);
  const url = `http://localhost:5000/purchase?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPurchase(data);
      });
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/purchase/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setPurchase(null);
            if (data.deletedCount > 0)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            const remaining = purchase.filter(
              (purchaseItm) => purchaseItm._id !== id
            );
            setPurchase(remaining);
          });
      }
    });
  };
  return (
    <div className="p-8 mt-2">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My ordered item</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {purchase?.length}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-5 p-10 md:grid-cols-2">
        {purchase.map((purchaseItem) => (
          <MyPurchaseCard
            key={purchaseItem._id}
            purchaseItem={purchaseItem}
            handleDelete={handleDelete}
          ></MyPurchaseCard>
        ))}
      </div>
    </div>
  );
};

export default MyPurchase;
