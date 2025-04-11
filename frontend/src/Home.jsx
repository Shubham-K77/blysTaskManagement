import { useState } from "react";
//Icons:
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [enablePassword, setEnablePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigator = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-900">
      <div className="w-[95%] lg:w-[25%] h-[65vh] border-1 border-gray-300 rounded-sm flex flex-col justify-center items-center">
        {/* Title */}
        <div className="text-[2rem] font-bold mb-2 mt-[2rem] text-white">
          LOGIN
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
              className="w-[10%] h-[5.5vh] rounded-sm bg-blue-500 hover:cursor-pointer transition-all ease-in-out duration-150 hover:scale-105 flex justify-center items-center hover:bg-blue-600"
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
        {/* Login Button */}
        <div className="w-[85%] h-[8.5vh] mt-[2rem] mb-[2rem] flex justify-center items-center bg-blue-500 hover:cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-150 hover:scale-105 rounded-sm">
          <div className="text-[1.25rem] font-semibold mr-4 text-white">
            Access Account
          </div>
          <MdLogin className="text-[1.75rem] text-white" />
        </div>
        {/* Link To Signup Page */}
        <div className="w-full flex justify-center items-center mb-4">
          <div
            className="text-[0.95rem] text-white font-semibold underline hover:cursor-pointer hover:text-blue-600"
            onClick={() => navigator("/register")}
          >
            Don’t have an account? Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
