const gridArray = [];
const cells = 10;
let counter = 0;
let row;
for (let i = 0; i < cells; i++) {
  if (counter % 3 === 0) {
    if (row !== undefined) {
      gridArray.push(row);
    }
    row = [];
  }
  counter++;
  let tempVar = counter;
  row.push(tempVar);
}
console.table(gridArray);
