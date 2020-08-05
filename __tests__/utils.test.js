const {
  formatDates,
  makeRefObj,
  formatComments,
} = require('../db/utils/utils');

describe('formatDates', () => {
  test("input: [] -> output: [] (with new reference)", () => {
    const input = [];
    const output = formatDates(input);
    expect(Array.isArray(output)).toBe(true);
    expect(output).not.toBe(input)
  });
  test("input: [{}] -> output: [{}] (with new reference", () => {
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
    expect(output[0]).not.toBe(input[0]);
  });
  test("input: obj with 'created_at' key -> output: 'created_at' key changed to 'date' key",() => {
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
    expect(output[0].created_at).toBeInstanceOf(Date);
  });
  test("input: keys that are not 'Date' -> output: non-date keys unchanged", () => {
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
    const output = formatDates(input);
    expect(output[0].title).toEqual(input[0].title);
    expect(output[0].topic).toEqual(input[0].topic);
    expect(output[0].author).toEqual(input[0].author);
    expect(output[0].body).toEqual(input[0].body)
  });
  // test("input: has not been mutated", () => {
  //   const input = [
  //     {
  //       title: "Eight pug gifs that remind me of mitch",
  //       topic: "mitch",
  //       author: "icellusedkars",
  //       body: "some gifs",
  //       created_at: 1289996514171,
  //     },
  //     {
  //       title: "Student SUES Mitch!",
  //       topic: "mitch",
  //       author: "rogersop",
  //       body:
  //         "We all love Mitch and his wonderful, unique typing style. However, the volume of his typing has ALLEGEDLY burst another students eardrums, and they are now suing for damages",
  //       created_at: 1163852514171,
  //     },
  //   ];
  //   const output = formatDates(input);
  //   expect(input).toEqual([
  //     {
  //       title: "Eight pug gifs that remind me of mitch",
  //       topic: "mitch",
  //       author: "icellusedkars",
  //       body: "some gifs",
  //       created_at: 1289996514171,
  //     },
  //     {
  //       title: "Student SUES Mitch!",
  //       topic: "mitch",
  //       author: "rogersop",
  //       body:
  //         "We all love Mitch and his wonderful, unique typing style. However, the volume of his typing has ALLEGEDLY burst another students eardrums, and they are now suing for damages",
  //       created_at: 1163852514171,
  //     },
  //   ]);
  // });
});

describe('makeRefObj', () => {});

describe('formatComments', () => {});
