// A Map holds key-value pairs where the key can be any data type.
// A Map remember the original insertion order of the key but Object cant remember original order

const map = new Map();
map.set("name", "Yash");
map.set("age", 19);
map.set("city", "Indore");

// console.log(map);

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const addNum = Numbers.map((e) => {
  return e + 10;
});

// console.log(addNum);

const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiMap = Num.map((e) => {
  return e * 10;
})
  .map((e) => {
    return e + 1;
  })
  .filter((e) => {
    return e >= 20;
  });

console.log(multiMap);
