import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { SendMoney } from './pages/SendMoney';
import HomePage from './pages/HomePage';

const withAuth = (Component) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem('token') ? true : false;
    if (!isAuthenticated) {
      return <Navigate to="/signin" />;
    }
    return <Component {...props} />;
  };
};
const AuthenticatedDashboard = withAuth(Dashboard);
const AuthenticatedSendMoney = withAuth(SendMoney);

function App() {
  return (
    
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<AuthenticatedDashboard />} />
      <Route path="/send" element={<AuthenticatedSendMoney />} />
      {/* Protect root route, redirect to dashboard if authenticated */}
      <Route
        path="/"
        element={
          localStorage.getItem('token') ? (
            <Navigate to="/dashboard" />
          ) : (
            <HomePage />
          )
        }
      />
    </Routes>
  );
}
export default App;
