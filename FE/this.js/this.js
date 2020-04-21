const myFunction = () => {
  console.log(typeof this);
};

// call it
myFunction();
console.log(this);
