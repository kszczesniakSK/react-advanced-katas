import { calculateExpirationDate } from './calculateExpirationDate';
import { vi } from 'vitest';
//Create test for code dependent on time

test('calculates expiration date correctly', () => {
  const mockDate = new Date(2024, 7, 24);
  vi.setSystemTime(mockDate);

  const expirationDate = calculateExpirationDate();
  
  expect(expirationDate.toLocaleDateString()).toBe('31.08.2024'); 

  vi.useRealTimers(); 
});