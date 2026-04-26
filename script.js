const examResults = [
  { name: "Ayan", marks: 45 },
  { name: "Sneha", marks: 85 },
  { name: "Rahul", marks: 35 },
  { name: "Priya", marks: 92 },
];

const passMark = 40;

let gradedStudents = examResults.map(({ name, marks }) => {
  let status = marks >= passMark ? "Pass" : "Fail";
  return {
    name,
    marks,
    status,
  };
});
let passedStudents = gradedStudents.filter((val) => val.status === "Pass");
let totalMarks = passedStudents.reduce(
  (acc, studentMarks) => acc + studentMarks.marks,
  0,
);
let classAverage = totalMarks / passedStudents.length;
console.log(gradedStudents);
console.log(`Average Marks of Passed Students: ${classAverage}`);
