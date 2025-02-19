import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div><Loading /></div>; 
  }

  if (!user || user.role != 0) {
    return <Navigate to="/403" />;
  }

  return children;
};

export default AdminRoute;
