import { FaBeer } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <h1>
        Welcome to Hunger Express
        <FaBeer />
      </h1>
      <p>AI based Food Ordering and Delivery Web Application</p>

      <p>
        A very intelligent food ordering and delivery system that uses AI to
        help you order food faster and easier
      </p>
      <h1 className="text-5xl text-red-500 font-bold">TAILWIND WORKING</h1>
    </div>
  );
};

export default Home;
