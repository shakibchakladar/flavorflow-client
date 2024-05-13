import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyPurchaseCard from "../components/MyPurchaseCard";

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
  return (
    <div className="p-8 mt-2">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My ordered item</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {purchase.length}
        </span>
      </div>
    <div className="grid grid-cols-1 gap-5 p-10 md:grid-cols-2">
    {purchase.map((purchaseItem) => (
        <MyPurchaseCard
          key={purchaseItem._id}
          purchaseItem={purchaseItem}
        ></MyPurchaseCard>
      ))}
    </div>
    </div>
  );
};

export default MyPurchase;
