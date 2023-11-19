function calculateGrade(score: number): string {
    let grade: string;
  
    if (score >= 90) {
      grade = "A";
      if (score > 95) {
        grade += "+";
      }
    } else if (score >= 80) {
      grade = "B";
    } else if (score >= 70) {
      grade = "C";
    } else if (score >= 60) {
      grade = "D";
    } else {
      grade = "F";
      if (score < 50) {
        grade += "-";
      }
    }
  
    return grade;
  }
  
  // Example usage
  console.log(calculateGrade(92)); // Output: "A"
  console.log(calculateGrade(85)); // Output: "B"
  console.log(calculateGrade(70)); // Output: "C"
  console.log(calculateGrade(63)); // Output: "D"
  console.log(calculateGrade(45)); // Output: "F-"
  console.log(calculateGrade(98)); // Output: "A+"
  