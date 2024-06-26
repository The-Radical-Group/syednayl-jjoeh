var deleteRow = require('./Task1.js');
var input = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }, { id: 4, name: 'd' }];
var output = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }];

describe("task3", () => {
  let testStatus = false;

  it("Delete a particular row", () => {
    expect(deleteRow(input, 4)).toEqual(output);
    testStatus = true;
  });
  afterEach(() => {
    if (testStatus) {
      console.log('Score is 100 points');
    } else {
      console.log('You failed the test case.');
    }
    testStatus = false;
  });

  it("Delete a particular row 2", () => {
    expect(deleteRow(input, 4)).toEqual(output);
    testStatus = true;
  });
  afterEach(() => {
    if (testStatus) {
      console.log('Score is 100 points');
    } else {
      console.log('You failed the test case.');
    }
    testStatus = false;
  });
});

