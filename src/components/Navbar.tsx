import React from 'react';
import { Link } from 'react-router-dom'; // Sayfalar arası geçiş için

const Navbar: React.FC = () => {
  // Örnek olarak localStorage'dan kullanıcı bilgisini alalım
  // Gerçek bir uygulamada bu context/state management ile yapılmalı
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    // Kullanıcıyı login sayfasına yönlendir veya sayfayı yenile
    window.location.href = '/login'; // Basit bir yönlendirme
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
          Job Tracker
        </Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
          {/* İleride başka linkler eklenebilir, örn: /ilan-ekle */}
          {user ? (
            <>
              <span className="text-gray-400">Merhaba, {user}!</span> {/* Kullanıcı adını göster */}
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Çıkış Yap
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Giriş Yap
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;