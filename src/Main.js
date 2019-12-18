import React from 'react';
import App from "./App"
// this is the give array for the most Part 
let students = [{id: 1, FirstName: "Billy", LastName:"Logan", MasteryLevel:"Near Mastery", Grade: "5"}, 
{FirstName: "Karl", LastName:"Gregory", MasteryLevel:"Mastery", Grade: "6"},
{FirstName: "Vanessa", LastName:"Luna", MasteryLevel:"None", Grade: "7"},
{FirstName: "Sue", LastName:"Mack", MasteryLevel:"Near Mastery", Grade: "5"},
{FirstName: "Joanne", LastName:"Moody", MasteryLevel:"Near Mastery", Grade: "4"},
{FirstName: "Carolyn", LastName:"Moran", MasteryLevel:"Mastery", Grade: "3"},
{FirstName: "Samantha", LastName:"Kim", MasteryLevel:"Not Mastered", Grade: "6"},
{FirstName: "Samantha", LastName:"Kim", MasteryLevel:"Not Mastered", Grade: "6"}]

// This is the start of the application it will invoke the app class to run and pass 
// the students array as a property 
class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            students: students
        }
    }
    render(){
        return (
            <div>
                <App students = {this.state.students}/>
            </div>
        )
    }
}
export default Main