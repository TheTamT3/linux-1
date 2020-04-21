var pro = new Promise(function (res, rej) {
  setTimeout(() => {
    res("Thanh cong");
  }, 200);
});
pro.then((value) => {
  console.log(5);
});
pro.catch((error) => {
  console.log(error);
});
