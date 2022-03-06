const inquirer = require("inquirer");
const fs = require("fs");

// Bring in the other classes..

const Employee = require("./Library/Employee");
const Manager = require("./Library/Manager");
const Engineer = require("./Library/Engineer");
const Intern = require("./Library/Intern");

let teamArray= [];

//  Questions

// All questions to be asked per 'task' plus additions per task...

 function getStarted () {
   inquirer.prompt ([

    {
      type: "list",
      name: "options",
      message:"Hi There! Welcome to Team builder! What would you like to do? Select an option below..", 
      choices: ["Add a Manager", "Add an Engineer", "Add an Intern"],
    },
     {
       type: "input",
       name: "name",
       message: "What is your employees name?",
     },
     {
       type: "input",
       name:"id",
       message:"Please enter your employees ID",
     },
     {
      type: "input",
      name:"email",
      message:"Please enter your employees email address",
    },
     {
      type: "input",
      name:"officeNumber",
      message: "Please enter the Manager's Office number",
      when: (answers) => answers.options === "Add a Manager",
    },
    {
      type: "input",
      name:"github",
      message: "Please enter your Engineer's GitHub username",
      when: (answers) => answers.options === "Add an Engineer",
    },
    {
      type: "input",
      name:"school",
      message: "Please enter the school name your Intern attended",
      when: (answers) => answers.options === "Add an Intern",
    },
    {
      type: "confirm",
      name:"anymore",
      message:"Would you like to add more employees to your team profile?",
    },
   ])
  //  Bring in classes..if x task is selected then push answers.. generate html..

   .then ((answers) => {
     if (answers.options === "Add a Manager") {
       let Mang = new Manager (answers.name, answers.id, answers.email, answers.OfficeNumber);
       teamArray.push(Mang);
     }
     if (answers.options === "Add an Engineer") {
       let Eng = new Engineer (answers.name, answers.id, answers.email, answers.github);
       teamArray.push(Eng);
     }
     if (answers.options === "Add an Intern") {
      let Int = new Intern (answers.name, answers.id, answers.email, answers.school);
      teamArray.push(Int);
    }
     if (answers.anymore === true) {
      getStarted(); 
    } else {
      CreateStuff(answers);
    }
   });
 }

getStarted();



const CreateStuff = (data) => {
  console.log({data});
      fs.writeFileSync("index.html", generateHTML(data), (err) => {
       err ? console.log(err) : console.log("Yahoo! You have created a Team Profile! Checkout HTML");
   
   });
   
}

// CHAMGE THE HTML.................................................................


const data = [Employee, Manager, Engineer, Intern];


const generateHTML = profile => {

    const CreateManager = (Manager) => {
      return `<div class="container">
      <div class="card">
      <div class="row text">
        <div class="col-sm-4">
          <div class="card-header">
          <h2>${Manager.name}</h2>
          <p class="lead">${Manager.getRole()}</p></div>
          <h3><span class="badge badge-secondary">Contact Info</span>
          </h3>
          <ul class="list-group">
            <li class="list-group-item">Email: <a href = "mailto:${Manager.email}</a></li>
            <li class="list-group-item">Employee ID:   ${Manager.id}</li>
            <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>`;
    };

      const CreateEngineer = Engineer => {
        `<div class="container" id="engineer">
        <div class="card">
        <div class="row text">
          <div class="col-sm-4">
            <div class="card-header">
            <h2>${Engineer.name}</h2>
            <p class="lead">${Engineer.getRole()}</p></div>
            <h3><span class="badge badge-secondary">Contact Info</span>
            </h3>
            <ul class="list-group">
              <li class="list-group-item">Email:  <a href = "mailto:${Engineer.email}</a></li>
              <li class="list-group-item">Employee ID:   ${Engineer.id}</li>
              <li class="list-group-item">GitHub Profile: <a href= "https://github.com/${Engineer.getGithub()}" target="_blank">${engineerGithub}</a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>`
      };

      const CreateIntern = Intern => {
        `<!-- Intern card -->
        <div class="container" id="intern">
          <div class="card">
          <div class="row text">
            <div class="col-sm-4">
              <div class="card-header">
              <h2>${Intern.name}</h2>
              <p class="lead">${Intern.getRole()}</p></div>
              <h3><span class="badge badge-secondary">Contact Info</span>
              </h3>
              <ul class="list-group">
             
                <li class="list-group-item">Email:  <a href = "mailto:${Intern.email}</a></li>
                <li class="list-group-item">Employee ID:   ${Intern.id}</li>
                <li class="list-group-item">School:         ${Intern.getSchool()}</li>
            </ul>
            </div>
            </div>
          </div>
        </div>
        </div>`
      };
  
      
const html =[];

html.push(profile.filter(Employee => Employee.getRole() === "Manager").map(manager => CreateManager(Manager)));

html.push(profile.filter(Employee => Employee.getRole() === "Engineer").map(engineer => CreateEngineer(Engineer)).join(""));

html.push(profile.filter(Employee => Employee.getRole() === "Intern").map(intern => CreateIntern(Intern)).join(""));

return html.join
};
      const stuff = stuffing =>{
        return`

  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./style.css"/>
    <title>Team Builder</title>
    {data.name}
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1>Our Team</h1>
      </div>
    </div>
    </body>
</html>
`;
};