import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function Private({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();
  const location = useLocation();
  location.state = location.pathname;
  console.log(location, "at private");

  if (isAuthenticated) {
    // If the user is authenticated, render the protected content (children)
    return <div>{children}</div>;
  } else {
    // Return null when not authenticated to prevent rendering
    navigate("/login", { state: { from: location } });
  }
}

export default Private;
