import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Outlet} from 'react-router-dom'

function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // console.log(process.env.REACT_APP_APPWRITE_URL); Fore create-react-app
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  return !Loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO : {/* <Outlet/> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null; // Homework, add a loader
}

export default App;
