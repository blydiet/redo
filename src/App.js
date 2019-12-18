import React from 'react';
import './App.css';


function App({students}) {
  return (
    <div>
      <div id="container">
        <a href="#">Home</a>
          <table>
            <caption><h1>Student Report </h1></caption>
            <tbody className="tableBorders">
              <tr className="tableBorders">
                <th>Student Name</th>
                <th>Grade</th>
                <th>Mastery Level</th>
              </tr>
              {
                students.map((student, id) => {
                  return (
                    <tr key={id}>
                      <td><span className="studentInfo">{`${student.FirstName} ${student.LastName}`}</span></td>
                      <td><span className="studentInfo">{student.Grade}</span></td>
                      {/* These lines of code are conditional statment that checks each studnet Master Level */}
                  <td><span className= "studentInfo">{student.MasteryLevel === "Near Mastery" 
                       || student.MasteryLevel === "Mastery"   
                       || student.MasteryLevel === "Not Mastered"
                       || student.MasteryLevel === "None"  ? 
                  (<div >
                    {student.MasteryLevel}
                    {/* Inside of the I used the id style tag to dry up my code. In other words I wanted to have the masterLevel match in my css file
                    so I change the give sting into an array and then I changed the array into a sting that could match the id's */}
                    <div  className="studentInfo" id={student.MasteryLevel.split(" ").join("")} ><i className="fa fa-circle fa-2x"></i></div>
                    </div>): null}</span></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>    
    </div>
  );
}

export default App;
