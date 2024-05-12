import Carousel from "../components/Carousel";
import OurChef from "../components/OurChef";
import TopFood from "../components/TopFood";
import WhySpecial from "../components/WhySpecial";

const Home = () => {
    return (
        <div className="">
            <Carousel></Carousel>
            <TopFood></TopFood>
            <WhySpecial></WhySpecial>
            <OurChef></OurChef>
        </div>
    );
};

export default Home;