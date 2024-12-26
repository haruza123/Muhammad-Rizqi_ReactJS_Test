import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, component: Component }) {
    return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
