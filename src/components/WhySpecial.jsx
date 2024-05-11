const WhySpecial = () => {
  return (
    <div>
      <div className="m-5 p-5 text-center space-y-5 my-7">
        <h2 className="text-5xl font-bold ">Why is it special?</h2>
        <p>
          Discover why FlevorFlow stands out as the pinnacle of dining
          excellence,
          <br /> where every meal is an extraordinary celebration of taste and
          hospitality
        </p>
      </div>
      <div className="hero min-h-[1080px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-x-8 justify-between">
          <div className="w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className=" rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySpecial;
