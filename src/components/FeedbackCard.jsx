// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";

const FeedbackCard = ({ f }) => {
  // const { user } = useContext(AuthContext);
  const { imageUrl, name, feedback} = f;

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl bg-base-100">
      <figure className="w-full h-96">
        <img
          src={imageUrl}
          alt={`Image from ${name}`}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
        <h3 className="p-2 text-2xl font-bold font-poppins">User name: {name}</h3>
        <p className="p-2 text-lg">{feedback}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
