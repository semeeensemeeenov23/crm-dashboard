import { lazy } from 'react';

// Ленивая загрузка компонентов
export const LazyAnalytics = lazy(() => import('../pages/AnalyticsPage'));
export const LazyUsers = lazy(() => import('../pages/UsersPage'));
export const LazyOrders = lazy(() => import('../pages/OrdersPage'));

// Типизированная мемоизация
export function memoize<T extends (...args: unknown[]) => unknown>(fn: T): T {
  const cache = new Map<string, unknown>();
  
  return ((...args: unknown[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}