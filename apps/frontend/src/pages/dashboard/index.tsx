import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUserProfile } from '../../hooks/useUserProfile';
import { Button } from '../../components/ui/Button';

const Dashboard = () => {
  const router = useRouter();
  const { user, loading, error } = useUserProfile();
  const [darkMode, setDarkMode] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1>Dashboard</h1>
        <Button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </header>
      <main className="p-4">
        <h2>Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
        <Button onClick={() => router.push('/dashboard/admin/projects')}>
          Manage Projects
        </Button>
        <Button onClick={() => router.push('/dashboard/admin/blog')}>
          Manage Blog Posts
        </Button>
        <Button onClick={() => router.push('/dashboard/admin/profile')}>
          User Profile Settings
        </Button>
      </main>
    </div>
  );
};

export default Dashboard;
