let start = 10;
function count(val) {
  console.log(val);
  if (val < 1) {
    return;
  } else if (val > 1) {
    return count(val - 1);
  }
}
count(start);

function count2(val) {
  console.log(val);
  if (val > 0) {
    val--;
    return count2(val);
  }
  return;
}
count2(start);
