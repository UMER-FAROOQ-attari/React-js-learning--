import React from 'react'

const practice = () => {
   const student = [];
   console.log(Boolean(!student.length));
   console.log(student.length);
   
   
   return (
  <>
  {/* <p>{student.length && "No students found"}</p> */}
  {/* <p>{student.length === 0 && "No students found"}</p> */}
  {/* <p>{!student.length && "No students found"}</p> */}
  <p>{Boolean(!student.length) && "No students found"}</p>
  <p>Number of student : {student.length}</p>
  </>
    )
}

export default practice