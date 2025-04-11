import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Notes from "./Notes";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/main" element={<Notes />} />
    </Routes>
  );
};

export default App;
