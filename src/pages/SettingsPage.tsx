import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Moon, Sun, Bell, Save } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [notifications, setNotifications] = useState(true);
  const { user } = useSelector((state: RootState) => state.auth);
  const [profile, setProfile] = useState({
    name: 'Администратор',
    email: user?.email || 'admin@example.com',
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSaveSettings = () => {
    alert('Настройки сохранены!');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Настройки</h1>

      <div className="space-y-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Профиль пользователя</h2>
          <div className="max-w-md">
            <Input
              label="Имя"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
            <Input
              label="Email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Внешний вид</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
              <span className="font-medium">Темная тема</span>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isDarkMode ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Уведомления</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell size={24} />
              <span className="font-medium">Включить уведомления</span>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSaveSettings}>
            <Save size={18} className="mr-2" />
            Сохранить настройки
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;