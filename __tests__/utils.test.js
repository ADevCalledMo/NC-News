const {
  formatDates,
  makeRefObj,
  formatComments,
} = require('../db/utils/utils');

describe('formatDates', () => {
  test("input: [] -> output [] (with new reference)", () => {
    const input = [];
    const output = formatDates(input);
    expect(Array.isArray(output)).toBe(true);
    expect(output).not.toBe(input)
  });
  test("input: arr w/ 1 obj lit within -> arr w/ obj lit and converted time (with new reference)", () => {
    const input = [
      {
        title: '22 Amazing open source React projects',
        topic: 'coding',
        author: 'happyamy2016',
        body:
          'This is a collection of open source apps built with React.JS library. In this observation, we compared nearly 800 projects to pick the top 22. (React Native: 11, React: 11). To evaluate the quality, Mybridge AI considered a variety of factors to determine how useful the projects are for programmers. To give you an idea on the quality, the average number of Github stars from the 22 projects was 1,681.',
        created_at: 1500659650346,
      }
    ]
    const output = formatDates(input)
    

  });
});

describe('makeRefObj', () => {});

describe('formatComments', () => {});
