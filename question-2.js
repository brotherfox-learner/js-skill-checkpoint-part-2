const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const totalScore = `Total score is ${students
  .filter((e) => e.score > 50)
  .map((e) => (e.score * 110) / 100)
  .reduce((acc, cur) => acc + cur, 0)}`;

console.log(totalScore);

// ทำเป็น Function และเพิ่มการปัดเลขตามหลักคณิตศาสตร์
const calculateTotalScore = (students) => {
  return `Total score is ${Math.round(
    students
      .filter((e) => e.score > 50)
      .map((e) => (e.score * 110) / 100)
      .reduce((acc, cur) => acc + cur, 0)
  )}`;
};

console.log(calculateTotalScore(students));
