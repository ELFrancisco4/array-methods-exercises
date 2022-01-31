const fn = require("../Exercises/Array Map/Append");

test("Add input string to each element of input array", () => {
  expect(fn(["kane", "son", "dias"], " -trophy")).toEqual([
    "kane -trophy",
    "son -trophy",
    "dias -trophy",
  ]);
  expect(fn(["ok", ""], " -bro")).toEqual(["ok -bro", " -bro"])
});
