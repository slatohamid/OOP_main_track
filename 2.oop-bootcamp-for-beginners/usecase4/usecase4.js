/*
Use Case #3
We are preparing three types of content for a website:

Articles
Ads
Vacancies
All of those have a title and text. When showing the title, they are modified as follows: articles remain as they are, ads are shown in all caps and vacancies are appended with " - apply now!". The original title should still be retrievable, so no modification is permanent.

Have an array with two articles, one ad and one vacancy. Use this array to show all content types (title + text).

Bonus: an article can be marked as "breaking news". If this is the case, the title is prepended with "BREAKING: ". Extra bonus: display all the content with the appropriate html tags.*/

// Sample content array with articles, ads, and vacancies

// Define the student class
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

// Define the group class
class Group {
  constructor() {
    this.students = [];
  }

  // Add a student to the group
  addStudent(student) {
    this.students.push(student);
  }

  // Calculate the average score of the group
  calculateAverage() {
    const totalScore = this.students.reduce(
      (sum, student) => sum + student.grade,
      0
    );
    return totalScore / this.students.length;
  }

  // Move a student from this group to another group
  moveStudentTo(student, targetGroup) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
      targetGroup.addStudent(student);
    }
  }

  // Find the student with the highest grade
  findTopStudent() {
    return this.students.reduce((topStudent, currentStudent) => {
      return currentStudent.grade > topStudent.grade
        ? currentStudent
        : topStudent;
    }, this.students[0]);
  }

  // Find the student with the lowest grade
  findLowestStudent() {
    return this.students.reduce((lowestStudent, currentStudent) => {
      return currentStudent.grade < lowestStudent.grade
        ? currentStudent
        : lowestStudent;
    }, this.students[0]);
  }
}

// Create two groups
const groupA = new Group();
const groupB = new Group();

// Add 10 students to each group with random grades
for (let i = 1; i <= 10; i++) {
  groupA.addStudent(
    new Student(`StudentA${i}`, Math.floor(Math.random() * 100) + 1)
  );
  groupB.addStudent(
    new Student(`StudentB${i}`, Math.floor(Math.random() * 100) + 1)
  );
}

// Function to display the average scores of both groups
function displayAverages() {
  console.log(`Group A Average: ${groupA.calculateAverage().toFixed(2)}`);
  console.log(`Group B Average: ${groupB.calculateAverage().toFixed(2)}`);
  console.log("------------------------");
}

// Display initial averages
console.log("Initial Averages:");
displayAverages();

// Move a random student from Group A to Group B
const randomStudentToMove =
  groupA.students[Math.floor(Math.random() * groupA.students.length)];
groupA.moveStudentTo(randomStudentToMove, groupB);

// Display averages after moving a student
console.log("Averages after moving a student:");
displayAverages();

// Move the top student from Group A to Group B, replacing the lowest-scoring student in Group B
const topStudentA = groupA.findTopStudent();
const lowestStudentB = groupB.findLowestStudent();
groupA.moveStudentTo(topStudentA, groupB);
groupB.moveStudentTo(lowestStudentB, groupA);

// Display averages after moving the top student
console.log("Averages after moving the top student:");
displayAverages();
