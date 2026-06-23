
function getLetterGrade(score){
 if (score>=90){
    return "A"
 }
 else if (score>=80){
    return "B"
 }
 else if (score>=70){
    return "C"
 }
 else if (score>=60){
    return "D"
 }
 else{
    return "F"
 }
};
function hasPassed(score){
    return score>=60;

};
function getFeedback(grade) {
    if (grade === "A") {
        return "Excellent work!";
    } 
    else if (grade === "B") {
        return "Great job!";
    } 
    else if (grade === "C") {
        return "Good effort, keep improving!";
    } 
    else if (grade === "D") {
        return "You passed, but you need improvement.";
    } 
    else {
        return "Failed. Try again.";
    }
};
function createGradeReport(name, score){
    const grade = getLetterGrade(score);
    const passed = hasPassed(score);
    const feedback = getFeedback(grade);
    return {
        name: name,
        score: score,
        grade: grade,
        passed: passed,
        feedback: feedback
    };
}

console.log(createGradeReport("Ali", 85));