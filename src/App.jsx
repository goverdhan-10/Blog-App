import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    }).finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <Header />

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-7xl">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center text-xl text-gray-700">Loading...</div>
    </div>
  );
}

export default App;
