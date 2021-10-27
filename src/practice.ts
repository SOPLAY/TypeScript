function sum(x: number, y: number): number {
  return x + y;
}
const result = sum(1, 2);
//array
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
//console.log(total);

//void
function returnNothing(): void {
  console.log("어쩌고저쩌고");
  //return true;
}
returnNothing();
//string or number
function returnStringOrNumber(): string | number {
  return 4;
  return "sdf";
}
returnNothing();
