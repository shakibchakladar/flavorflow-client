import { Link } from "react-router-dom"

const Slide = ({img,text}) => {
    return (
      <div
        className='w-full bg-center bg-cover h-[38rem]'
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-white lg:text-4xl font-poppins'>
            {/* Present Your<span className='text-blue-400'>Healthful</span> Resturant Food */}
            {text}
            </h1>
            <br />
            <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
              <Link to="/allfood">All foods</Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Slide