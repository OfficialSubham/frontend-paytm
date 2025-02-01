import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Send from "./components/Send";
import Dashboard from "./components/Dashboard";
import { useEffect } from "react";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      {localStorage.getItem("token") && <NavBar />}
      <Routes>
        {/* public route */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

        {/* Privete Route */}
        <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<Send />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
