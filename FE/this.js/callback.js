function myfunc() {
  console.log("Finish");
}
function yfunc(a, c, b) {
  return 1;
  c();
  b();
}
yfunc(5, myfunc, myfunc);
