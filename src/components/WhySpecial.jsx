import { Link } from "react-router-dom";

const WhySpecial = () => {
  return (
    <div className="text-center">
      <div className="p-10 m-2">
        <Link to="/allfood">
          <button className="border-2 border-orange-400 btn btn-outline">
            see all
          </button>
        </Link>
      </div>
      <div className="p-5 m-5 space-y-5 text-center my-7">
        <h2 className="text-5xl font-bold font-poppins ">Why is it special?</h2>
        <p>
          Discover why FlevorFlow stands out as the pinnacle of dining
          excellence,
          <br /> where every meal is an extraordinary celebration of taste and
          hospitality
        </p>
      </div>
      <div className="hero min-h-[800px] bg-base-200 p-10">
        <div className="flex-col justify-between hero-content lg:flex-row gap-x-8">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/vHcft5h/victoria-shes-UC0-HZd-Uit-WY-unsplash.jpg"
              className="w-full rounded-lg shadow-2xl "
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold font-poppins text-[#FA7F08]">
              What We offer
            </h1>
            <p className="md:p-5">
              At FlavorFlow, we understand that dining is more than just a meal;
              its an experience. As your premier destination for culinary
              excellence, we pride ourselves on offering more than just
              delicious food we offer a symphony of flavors, ambiance, and
              service that elevate every dining occasion. Our commitment to
              quality is unwavering, reflected in every aspect of our menu, from
              the freshest ingredients to the innovative presentation of each
              dish. What sets us apart is our dedication to creating memorable
              moments for our guests, where every visit is a journey of
              discovery and delight. Whether youre craving comfort classics or
              adventurous flavors, FlavorFlow promises an unparalleled dining
              experience that leaves a lasting impression. Join us and taste the
              difference today
            </p>
            <div className="py-3 space-y-5">
              <ul className="space-y-5">
                <li className="text-xl font-semibold list-disc">
                  Culinary Excellence: Immerse yourself in a world of exquisite
                  flavors crafted by our talented chefs using the freshest,
                  highest-quality ingredients.
                </li>
                <li className="text-xl font-semibold list-disc">
                  Memorable Experiences: From our inviting ambiance to our
                  attentive service, we go above and beyond to create
                  unforgettable moments for every guest.
                </li>
                <li className="text-xl font-semibold list-disc">
                  Innovation and Creativity: Explore a menu inspired by culinary
                  innovation, where traditional favorites meet bold new flavors
                  for a dining experience like no other.
                </li>
              </ul>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySpecial;
