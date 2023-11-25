// Creating a constructor function 'Student'
function Student(name, roll_no, presentClass, section, marks) {
  this.name = name;
  this.roll_no = roll_no;
  this.presentClass = presentClass;
  this.section = section;
  this.marks = marks;
  this.printTop3Subjects = function () {
    const dataArray = [];
    for (let subject in marks) dataArray.push([subject, this.marks[subject]]);
    dataArray.sort((subOne, subTwo) => subOne[1] - subTwo[1]);
    let output_str = `Top 3 Subjects:-`;
    for (let i = dataArray.length - 1; i >= dataArray.length - 3; i--) {
      dataArray[i][0] = dataArray[i][0].toUpperCase();
      output_str += `   ${dataArray[i][0]}: ${dataArray[i][1]},`;
    }
    console.log(`\n${output_str}`);
  };
  this.printReportCard = function () {
    console.log(`\n+-----------------------------------------+`);
    console.log(`|               REPORT CARD               |`);
    console.log(`+-----------------------------------------+`);
    console.log(`| Name:        ${this.name}`);
    console.log(`| Roll No.:    ${this.roll_no}`);
    console.log(`| Class:       ${this.presentClass}`);
    console.log(`| Section:     ${this.section}`);
    let sum = 0;
    for (let key in this.marks) {
      console.log(`| ${key.toUpperCase()}:      ${this.marks[key]}`);
      sum += +this.marks[key];
    }
    console.log(`| Percentage:  ${sum / Object.keys(this.marks).length}`)
    console.log(`+-----------------------------------------+\n`);
  };
}

// Creating a constructor function 'Marks' for getting the marks of 5 subjects
function Marks(science, maths, social_science, english, hindi) {
  this.science = science;
  this.maths = maths;
  this.social_science = social_science;
  this.english = english;
  this.hindi = hindi;
}

const student_one_marks = new Marks(72, 75, 79, 80, 69);
const student_one_details = new Student(
  "Saurav Kashyap",
  1,
  5,
  "A",
  student_one_marks
);

student_one_details.printTop3Subjects();
student_one_details.printReportCard();
