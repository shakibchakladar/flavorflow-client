import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import FeedbackCard from "../components/FeedbackCard";
import toast from "react-hot-toast";

const Gallery = () => {
  const { user } = useContext(AuthContext);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    fetch(`${import.meta.env.VITE_API_URL}/feedback`)
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data);
      })
      .catch((error) => {
        console.error("Error fetching feedback:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = user?.displayName || "no name found";
    const imageUrl = e.target.img.value;
    const feedbackText = e.target.feedback.value;
    const order = {
      name,
      imageUrl,
      feedback: feedbackText,
    };

    fetch(`${import.meta.env.VITE_API_URL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully added feedback");
          fetchFeedback(); // Fetch updated feedback after submission
        }
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
      });
  };

  return (
    <div className="mt-10">
      <header>
        <div
          className="w-full bg-center bg-cover h-[25rem]"
          style={{
            backgroundImage: "url('https://i.ibb.co/QDyFk62/3834118.jpg')",
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Share your <span className="text-blue-400">experience</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="p-5 text-center">
          <button
            className="text-gray-200 bg-orange-600 btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Add Feedback
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="p-5 hero bg-base-200">
                <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
                  <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Users name</span>
                      </label>
                      <input
                        defaultValue={user?.displayName || "no name found"}
                        readOnly
                        type="text"
                        placeholder=""
                        className="input input-bordered"
                        required
                        name="name"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Img url</span>
                      </label>
                      <input
                        name="img"
                        type="text"
                        placeholder="img url"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <textarea
                      name="feedback"
                      placeholder="Feedback"
                      className="w-full max-w-xs textarea textarea-bordered textarea-sm"
                    ></textarea>
                    <div className="mt-6 form-control">
                      <input
                        className="text-white bg-orange-700 btn btn-block"
                        type="submit"
                        value="Submit Feedback"
                      />
                    </div>
                  </form>
                </div>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="bg-red-600 btn text-gray-50">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </header>
      <div className="container p-6 mx-auto">
        <h2 className="mb-6 text-2xl font-semibold text-center">
          User Feedback ({feedback.length})
        </h2>
        <div className="grid grid-cols-1 gap-5 p-2 md:grid-cols-2 lg:grid-cols-3 ">
          {feedback.map((f) => (
            <FeedbackCard key={f._id} f={f} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
