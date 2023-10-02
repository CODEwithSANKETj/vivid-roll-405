import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
function Private({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      // If the user is not authenticated, navigate to the login page
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    // If the user is authenticated, render the protected content (children)
    return <div>{children}</div>;
  } else {
    // Return null when not authenticated to prevent rendering
    return null;
  }
}

export default Private;
