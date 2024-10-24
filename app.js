let students = require("./data.json");
//////////////////////////////////////////////////////////////////////////////////////////////////////////1
let getAllStudents = () => {
  return students;
};
//console.log(getAllStudents());
//////////////////////////////////////////////////////////////////////////////////////////////////////////2
let getFirstStudent = () => {
  return students[0];
};
//console.log(getFirstStudent());
//////////////////////////////////////////////////////////////////////////////////////////////////////////3
let getLastStudent = () => {
  return students[students.length-1];
}
//console.log(getLastStudent());
//////////////////////////////////////////////////////////////////////////////////////////////////////////4
let getStudentById = (id) => {
  return students.find(stu => stu.id === id );
};
//console.log(getStudentById(5))
//////////////////////////////////////////////////////////////////////////////////////////////////////////5
let getStudentsByStage = (stage) => {
  return students.filter(stu => stu.stage === stage );
};
//console.log(getStudentsByStage("Grade 9"));
//////////////////////////////////////////////////////////////////////////////////////////////////////////6
let addStudent = (newStudent) => {
  students.push(newStudent);
};
//addStudent({ id: 60, name: "ali safaa", stage: 'Grade 9', age: 20 }); 
//console.log(students);
//////////////////////////////////////////////////////////////////////////////////////////////////////////7
let removeStudentById = (id) => {
  const initialLength = students.length;
  students = students.filter(stu => stu.id !== id);
  return initialLength !== students.length;
}; 
//console.log(removeStudentById(19)); 
//console.log(students);
//////////////////////////////////////////////////////////////////////////////////////////////////////////8
let updateStudentById = (id, updatedData) => {
  let student = students.find(item => item.id === id);
  if (student) {
    student.id = updatedData.id;
    student.age = updatedData.age;
    student.name = updatedData.name;
    student.stage = updatedData.stage;
    return student; // Return the updated student
  }
  return "ماكو هيح طال بعد عمك"; 
};
//console.log(updateStudentById(20, { id: 22, name: 'safaa jabar', stage: 'Grade 14', age: 46 }));
//console.log(students);
//////////////////////////////////////////////////////////////////////////////////////////////////////////9
let getAverageAge = () => {
  let totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
};
//console.log(getAverageAge())
//////////////////////////////////////////////////////////////////////////////////////////////////////////10
let getStudentsAboveAge = (age) => {
  return students.filter(stu => stu.age > age);
};
//console.log(getStudentsAboveAge(16));
//////////////////////////////////////////////////////////////////////////////////////////////////////////11
let getStudentsBelowAge = (age) => {
  return students.filter(stu => stu.age < age);
};
//console.log(getStudentsBelowAge(16));
//////////////////////////////////////////////////////////////////////////////////////////////////////////12
let getStudentByName = (name) => {
  return students.find(stu => stu.name === name);
};
//console.log(getStudentByName("Olivia Green"));
//////////////////////////////////////////////////////////////////////////////////////////////////////////13
let sortStudentsByName = () => {
  return students.sort((a, b) => {
    if (a.name < b.name) return -1; 
    if (a.name > b.name) return 1;  
    return 0;                 
  });
};
//console.log(sortStudentsByName());
//////////////////////////////////////////////////////////////////////////////////////////////////////////14
let sortStudentsByAge = () => {
  return students.sort((a, b) => {
    if (a.age < b.age) return -1; 
    if (a.age > b.age) return 1;  
    return 0;                 
  });
};
//console.log(sortStudentsByAge());
//////////////////////////////////////////////////////////////////////////////////////////////////////////15
let filterStudentsByAge = (age) => {
  return students.filter(stu => stu.age === age);
};
//console.log(filterStudentsByAge(14));
//////////////////////////////////////////////////////////////////////////////////////////////////////////16
let filterStudentsByStage = (stage) => {
  return students.filter(stu => stu.stage === stage);
};
//console.log(filterStudentsByStage('Grade 9'));
//////////////////////////////////////////////////////////////////////////////////////////////////////////17
let countStudents = () => {  
  return students.length;
};
//console.log(countStudents());
//////////////////////////////////////////////////////////////////////////////////////////////////////////18
const countStudentsByStage = (stage) => {
  return students.reduce((count, stu) => {
    return stu.stage === stage ? count + 1 : count;
  }, 0);
};
//console.log(countStudentsByStage('Grade 12'));
//////////////////////////////////////////////////////////////////////////////////////////////////////////19
let incrementStudentAgeById = (id) => {
  const student = students.find(stu => stu.id === id);
  if (student) {
    student.age++;
    return student;
  }
  return null; 
};
//console.log(incrementStudentAgeById(14));
//////////////////////////////////////////////////////////////////////////////////////////////////////////20
let decrementStudentAgeById = (id) => {
  const student = students.find(stu => stu.id === id);
  if (student) {
    student.age--;
    return student;
  }
  return null; 
};
//console.log(decrementStudentAgeById(14));
//////////////////////////////////////////////////////////////////////////////////////////////////////////21
let getStudentsWithIdGreaterThan = (id) => {
  return students.filter(stu => stu.id > id);
};
//console.log(getStudentsWithIdGreaterThan(14));
//////////////////////////////////////////////////////////////////////////////////////////////////////////22
let getStudentsWithIdLessThan = (id) => {
  return students.filter(stu => stu.id < id);
};
//console.log(getStudentsWithIdLessThan(14));
//////////////////////////////////////////////////////////////////////////////////////////////////////////23
const getStudentsInRangeOfIds = (startId, endId) => {
  return students.filter(stu => stu.id >= startId && stu.id <= endId);
};
//console.log(getStudentsInRangeOfIds(14, 20));
//////////////////////////////////////////////////////////////////////////////////////////////////////////24
let getTotalAgeOfStudents = () => {
  return students.reduce((accumulator, stu) => accumulator + stu.age, 0);
};
//console.log(getTotalAgeOfStudents());
//////////////////////////////////////////////////////////////////////////////////////////////////////////25
let getAverageAgeByStage = (stage) => {
  const filteredStudents = students.filter(stu => stu.stage === stage);
  const totalAge = filteredStudents.reduce((accumulator, stu) => accumulator + stu.age, 0);
    return totalAge / filteredStudents.length;
};
//console.log(getAverageAgeByStage('Grade 10')); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////26
let getYoungestStudent = () => {
  return students.reduce((youngest, student) => {
    return (student.age < youngest.age) ? student : youngest;
  });
};
//console.log(getYoungestStudent()); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////27
let getOldestStudent = () => {
    return students.reduce((older , student)=> {
      return (student.age > older.age) ? student : older ;
    })
};
//console.log(getOldestStudent()); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////28
let hasStudentWithName = (name) => {
    let stu = students.find(stu => stu.name === name);
    if (stu != null){
      return stu;
    }else{
      return "student not found";
    }
};
//console.log(hasStudentWithName('Alice Johnson')); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////29
let getNamesOfAllStudents = () => {
  return students.map(student => student.name);
};
//console.log(getNamesOfAllStudents());
//////////////////////////////////////////////////////////////////////////////////////////////////////////30
let getAllStudentIds = () => {
  return students.map(student => student.id);
};
//console.log(getAllStudentIds());
//////////////////////////////////////////////////////////////////////////////////////////////////////////31
let getAllStudentStages = () => {
  return students.map(student => student.stage);
};
//console.log(getAllStudentStages());
//////////////////////////////////////////////////////////////////////////////////////////////////////////32
let getStudentsWithNamesStartingWith = (letter) => {
    return students.filter(stu => stu.name[0] === letter);
};
//console.log(getStudentsWithNamesStartingWith('E'));
//////////////////////////////////////////////////////////////////////////////////////////////////////////33
let getStudentsWithNamesEndingWith = (letter) => {
  return students.filter(stu => stu.name[stu.name.length -1] === letter);
};
//console.log(getStudentsWithNamesEndingWith('s'));
//////////////////////////////////////////////////////////////////////////////////////////////////////////34
let getStudentsWithNameLengthGreaterThan = (length) => {
  return students.filter(stu => stu.name.length > length);
};
//console.log(getStudentsWithNameLengthGreaterThan(12));

//////////////////////////////////////////////////////////////////////////////////////////////////////////35
let getStudentsWithNameLengthLessThan = (length) => {
  return students.filter(stu => stu.name.length < length);
};
//console.log(getStudentsWithNameLengthLessThan(10));
//////////////////////////////////////////////////////////////////////////////////////////////////////////36
let getAllStudentsSortedById = () => {
  return students.sort((a, b) => {
    if (a.id < b.id) return -1; 
    if (a.id > b.id) return 1;
    return 0;
  });
};
//console.log(getAllStudentsSortedById());
//////////////////////////////////////////////////////////////////////////////////////////////////////////37
let reverseStudentList = () => {
  let reversed = [];
  for (let i = students.length - 1; i >= 0; i--) {
    reversed.push(students[i]);
  }
  return reversed;
};
//console.log(reverseStudentList());
//////////////////////////////////////////////////////////////////////////////////////////////////////////38
// let getRandomStudent = () => {
//   const randomIndex = Math.floor(Math.random() * students.length);
//   return students[randomIndex];
// };
// console.log(getRandomStudent());
//////////////////////////////////////////////////////////////////////////////////////////////////////////39
let getRandomStudent = (age) => {
  const stu = students.filter(student => student.age === age)
  const randomIndex = Math.floor(Math.random() * stu.length);
  return stu[randomIndex];
};
//console.log(getRandomStudent(16));
//////////////////////////////////////////////////////////////////////////////////////////////////////////40
let removeStudentsBelowAge = (age) => {
  students = students.filter(student => student.age > age);
  return students;
};
//console.log(removeStudentsBelowAge(16));
//////////////////////////////////////////////////////////////////////////////////////////////////////////41
let getStudentsBetweenAges = (minAge, maxAge) => {
  return students.filter(student => student.age > minAge && student.age < maxAge);
};
//console.log(getStudentsBetweenAges(12 , 17));
//////////////////////////////////////////////////////////////////////////////////////////////////////////42
let countStudentsAboveAge = (age) => {
  return students.reduce((count, student) => {
    return student.age > age ? count + 1 : count;
  }, 0);
};
//console.log(countStudentsAboveAge(16));
//////////////////////////////////////////////////////////////////////////////////////////////////////////43
let countStudentsBelowAge = (age) => {
  return students.reduce((Count , student)=> {
    return student.age < age ? Count + 1 : Count;
  } , 0);
};
//console.log(countStudentsBelowAge(16));
//////////////////////////////////////////////////////////////////////////////////////////////////////////44
let addMultipleStudents = (newStudents) => {
     students.push(...newStudents);
     return students ;
};
//console.log(addMultipleStudents([{id: 21,name: "ali",stage: "Grade 11",age: 26},{id: 22,name: "safaa",stage: "Grade 11",age: 46}]));
//////////////////////////////////////////////////////////////////////////////////////////////////////////45
let removeMultipleStudentsById = (ids) => {
  return students.filter(student => !ids.includes(student.id));
}
//console.log(removeMultipleStudentsById([2, 3,5,13,15,6,20])); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////46
let updateMultipleStudentsById = (ids, updatedData) => {
  //TODO:
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////47
let isAllStudentsAboveAge = (age) => {
  return students.every(student => student.age > age);
};
//console.log(isAllStudentsAboveAge(14)); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////48
let isAllStudentsBelowAge = (age) => {
  return students.every(student => student.age < age);
};
//console.log(isAllStudentsBelowAge(14)); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////49
let hasStudentsInStage = (stage) => {
  return  students.some(student => student.stage === stage);
};
//console.log(hasStudentsInStage("Grade 11")); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////50
let getStudentNamesWithIds = (ids) => {
  return students.filter(student => ids.includes(student.id)).map(student => student.name);
};
//console.log(getStudentNamesWithIds([3,6,8])); 


