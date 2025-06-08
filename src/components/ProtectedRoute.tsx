import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const user = localStorage.getItem('user'); // Basit bir kullanıcı kontrolü

  if (!user) {
    // Kullanıcı giriş yapmamışsa /login'e yönlendir
    return <Navigate to="/login" replace />;
  }

  // Kullanıcı giriş yapmışsa, istenen route'un içeriğini (Outlet) göster
  // Veya direkt children'ı da kullanabilirdik <Route element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> gibi
  // Outlet kullanımı daha yaygın: <Route element={<ProtectedRoute />}><Route path="dashboard" element={<Dashboard />} /></Route>
  return <Outlet />;
};

export default ProtectedRoute;