let myWork = [];
for (let i = 0; i < 10; i++) {
  let status = i % 2 === 0 ? true : false;
  let name = `Lesson ${i}`;
  let temp = { name: name, status: status };
  myWork.push(temp);
}
console.log(myWork);
