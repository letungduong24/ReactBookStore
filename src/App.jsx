import React, { useEffect, useContext } from "react";
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Login from './components/Login';
import AllBooks from './components/AllBooks';
import DetailBook from './components/DetailBook';
import Profile from './components/Profile';
import AdminPanel from './components/AdminPanel';
import EditProfile from './components/EditProfile';
import Loading from './components/Loading';
import { AuthProvider, AuthContext } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Unauthorized from "./components/Unauthorized";
import AdminRoute from "./components/AdminRoute";
import Notfound from "./components/Notfound";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

const AppContent = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<AuthenticatedRoute><Login /></AuthenticatedRoute>} />
        <Route path='/register' element={<AuthenticatedRoute><Register /></AuthenticatedRoute>} />
        <Route path='/books' element={<AllBooks />} />
        <Route path='/book/:slug' element={<DetailBook />} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/profile/edit' element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path='/admin/*' element={<AdminRoute><AdminPanel /></AdminRoute>} />
        <Route path='/403' element={<Unauthorized />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
