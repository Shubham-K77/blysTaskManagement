import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Icons:
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
const Signup = () => {
  const [enablePassword, setEnablePassword] = useState("");
  const [enableConfirmPassword, setEnableConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const navigator = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-900">
      <div className="w-[95%] h-[92vh] lg:w-[25%] lg:h-[86vh] border-1 border-gray-300 rounded-sm flex flex-col justify-center items-center">
        {/* Title */}
        <div className="text-[2rem] font-bold mb-2 mt-[2rem] text-white">
          REGISTER
        </div>
        {/* Name and Field */}
        <div className="w-full mb-2 flex flex-col justify-start items-start ml-4">
          <div className="text-[1.10rem] font-semibold mb-2 text-white ml-4">
            Name
          </div>
          <input
            type="text"
            className="w-[85%] h-[6.5vh] rounded-sm p-1 border-1 border-gray-300 ml-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Username and Field */}
        <div className="w-full mb-2 flex flex-col justify-start items-start ml-4">
          <div className="text-[1.10rem] font-semibold mb-2 text-white ml-4">
            Username
          </div>
          <input
            type="text"
            className="w-[85%] h-[6.5vh] rounded-sm p-1 border-1 border-gray-300 ml-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* Password and Field */}
        <div className="w-full mb-2 flex flex-col justify-start items-start ml-4">
          <div className="text-[1.10rem] font-semibold mb-2 text-white ml-4">
            Password
          </div>
          <div className="w-full flex justify-center items-center">
            <input
              type={enablePassword === true ? "text" : "password"}
              className="w-[75%] h-[6.5vh] rounded-sm p-1 border-1 border-gray-300 mr-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="w-[10%] h-[5.5vh] rounded-sm bg-teal-500 hover:cursor-pointer transition-all ease-in-out duration-150 hover:scale-105 flex justify-center items-center hover:bg-teal-600"
              onClick={() => setEnablePassword(!enablePassword)}
            >
              {enablePassword === true ? (
                <FaEyeSlash className="text-[1.5rem] text-white" />
              ) : (
                <FaEye className="text-[1.5rem] text-white" />
              )}
            </div>
          </div>
        </div>
        {/* Confirm Password and Field */}
        <div className="w-full mb-2 flex flex-col justify-start items-start ml-4">
          <div className="text-[1.10rem] font-semibold mb-2 text-white ml-4">
            Confirm Password
          </div>
          <div className="w-full flex justify-center items-center">
            <input
              type={enableConfirmPassword === true ? "text" : "password"}
              className="w-[75%] h-[6.5vh] rounded-sm p-1 border-1 border-gray-300 mr-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter Password"
              value={confrimPassword}
              onChange={(e) => setConfrimPassword(e.target.value)}
            />
            <div
              className="w-[10%] h-[5.5vh] rounded-sm bg-teal-500 hover:cursor-pointer transition-all ease-in-out duration-150 hover:scale-105 flex justify-center items-center hover:bg-teal-600"
              onClick={() => setEnableConfirmPassword(!enableConfirmPassword)}
            >
              {enableConfirmPassword === true ? (
                <FaEyeSlash className="text-[1.5rem] text-white" />
              ) : (
                <FaEye className="text-[1.5rem] text-white" />
              )}
            </div>
          </div>
        </div>
        {/* Login Button */}
        <div className="w-[85%] h-[8vh] mt-[2rem] flex justify-center items-center bg-teal-500 hover:cursor-pointer hover:bg-teal-600 transition-all ease-in-out duration-150 hover:scale-105 rounded-sm mb-[2rem]">
          <div className="text-[1.25rem] font-semibold mr-4 text-white">
            Create Account
          </div>
          <FaPencilAlt className="text-[1.25rem] text-white" />
        </div>
        {/* Link To Home Page */}
        <div className="w-full flex justify-center items-center mb-4">
          <div
            className="text-[0.95rem] text-white font-semibold underline hover:cursor-pointer hover:text-teal-600"
            onClick={() => navigator("/")}
          >
            Already have an account? Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
