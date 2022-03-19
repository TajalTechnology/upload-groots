import { Strikeing } from '../index';
test('My Greeter', () => {
  const strikeing = new Strikeing();
  expect(strikeing.play()).toBe('Welcome to the class');
});
