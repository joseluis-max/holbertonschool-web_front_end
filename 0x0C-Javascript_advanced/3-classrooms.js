#!/usr/bin/env node

/**
 * createClassRoom - closure number of students with loop
 * @param {Number} numbersOfStudents
 * @returns
 */
function createClassRoom (numbersOfStudents) {
  function studentSeat (seat) {
    return () => seat;
  }
  const students = [];
  for (let i = 0; i < numbersOfStudents; i++) {
    students[i] = studentSeat(i + 1);
  }
  return students;
}

classRoom = createClassRoom(10);
