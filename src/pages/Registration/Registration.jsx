import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../../index.css";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const Registration = () => {
  const axiosPublic = useAxiosPublic();
  const handleRegistration = async (e) => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value;
    let username = form.username.value;
    let password = form.password.value;
    let phonenumber = form.phonenumber.value;
    const user = {
      name: username,
      email,
      pin: password,
      phoneNumber: phonenumber,
      role: "admin",
    };
    // console.log(user);

    const res = await axiosPublic.post("/registration", user);
    // console.log(res);
    if (res.data.insertedId) {
      toast.success("User Created Successfully !", {
        position: "top-center",
      });
      form.email.value = "";
      form.username.value = "";
      form.password.value = "";
      form.phonenumber.value = "";
    } else {
      toast.error(res.data.message, {
        position: "top-center",
      });
      form.phonenumber.value = "";
      form.password.value = "";
      form.username.value = "";
      form.email.value = "";
    }
  };
  return (
    <div className="flex justify-center items-center h-screen px-3">
      <Helmet>
        <title>PayPulse || Registration</title>
      </Helmet>
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto md:h-36 h-24"
            src="https://i.postimg.cc/NFc6xsyf/bankLogo.png"
            alt=""
          />
        </div>

        <form className="mt-6" onSubmit={handleRegistration}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phonenumber"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
            </div>

            <input
              type="password"
              name="password"
              maxLength={5}
              className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg ease-linear focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 bg-green-700 hover:rounded-full">
              Sign In
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
