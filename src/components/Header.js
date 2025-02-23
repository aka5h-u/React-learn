import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  // if the dependency array is empty use effect is called only in the initial render
  // if there is dependnecy then useEffect hook will be called only when the dependecy changes

  return (
    <div className="flex justify-between bg-blue-100">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <img className="w-40" src={LOGO_URL} />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex m-5">
          <li className="px-4"> {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn px-4"
            onClick={() =>
              login === "Login" ? setLogin("Logout") : setLogin("Login")
            }
          >
            {login}
          </button>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
