const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
const allPeople = [...techupPeople,...techcoolPeople]
const lower20YearsPeople = allPeople.filter(e=>e.age < 20)
console.log(lower20YearsPeople)

// //Add function use rest param เพื่อให้ใส่ array ได้มากขึ้น ถ้าเกิดมีข้อมูลใหม่เข้ามา
// const techcoolPeople2 = [
//   { name: "Elon", age: 30 },
//   { name: "Musk", age: 13 },
// ];

// const techcoolPeople3 = [
//   { name: "Steve", age: 26 },
//   { name: "Job", age: 15 },
// ];

// const findLower20 = (...arr)=>{
//   return arr.flat(Infinity).filter(e=>e.age < 20)
// }

// console.log(findLower20(techcoolPeople,techupPeople,techcoolPeople2,techcoolPeople3))