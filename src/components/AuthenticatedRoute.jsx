import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';

const AuthenticatedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div><Loading /></div>; 
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthenticatedRoute;
