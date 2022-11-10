import isEmpty from './isEmpty';

test('identifies null as empty', () => {
  expect(isEmpty(null)).toBe(true);
});