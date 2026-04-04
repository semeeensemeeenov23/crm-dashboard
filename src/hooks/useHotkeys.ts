import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useHotkeys = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl+N - Новый заказ
      if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        toast.success('Создание нового заказа');
        navigate('/orders/new');
      }
      
      // Ctrl+U - Пользователи
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        navigate('/users');
      }
      
      // Ctrl+D - Дашборд
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        navigate('/');
      }
      
      // Ctrl+S - Сохранить (есть форма)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        toast.success('Данные сохранены');
      }
      
      // Ctrl+/ - Показать справку
      if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        toast.success('Горячие клавиши: Ctrl+N - новый заказ, Ctrl+U - пользователи, Ctrl+D - дашборд');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);
};