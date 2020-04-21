var person = {
  fnam: "Tam",
  fage: "tuoi",
};
for (x in person) {
  console.log(person[x]);
  console.log(typeof x);
}
var person = [1, 2, 3, 4, 5];
console.log("======================");
for (x of person) {
  console.log(x);
  console.log(typeof x);
}
