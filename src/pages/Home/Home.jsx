import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen mx-auto border flex items-center justify-center">
      <Helmet>
        <title>PayPulse Home</title>
      </Helmet>
      <div>
        <h2 className="text-3xl font-bold text-green-700 mb-5">
         Please Sign Up First!
        </h2>
        <Link
          className="text-xl bg-green-700 px-4 py-2 rounded-lg hover:rounded-full text-white font-bold flex justify-center"
          to="/registration"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
