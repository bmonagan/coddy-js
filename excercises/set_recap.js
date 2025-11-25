function processStudentGroups(students) {
  // Write your code here
  const uniqueCount = new Set(students);
  let johndoe = false;
  uniqueCount.forEach((student)=> {
    if (student[0].toLowerCase() === 'z'){
        uniqueCount.delete(student);
    }
    if (student === 'John Doe'){
        johndoe = true;

    }
  })
  if (johndoe === false){
    uniqueCount.add('John Doe');
    johndoe = true;
  }
  return {
    uniqueCount: uniqueCount.size,
    hasJohnDoe: johndoe,
    studentsArray: Array.from(uniqueCount)
  }
}
