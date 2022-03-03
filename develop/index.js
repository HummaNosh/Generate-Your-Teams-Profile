const inquirer = require("inquirer");
const fs = require("fs");

// Bring in the other classes..

const Employee = require("./Library/Employee");
const Manager = require("./Library/Manager");
const Engineer = require("./Library/Engineer");
const Intern = require("./Library/Intern");
teamArray= [];

//  Questions

const ManagerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message:
        "Welcome to your Team builder Mr/Ms. Manager! Please enter your name to begin",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "empID",
      message: "What is your Employee ID?",
    },
    {
      type: "input",
      name: "managerNumber",
      message: "Please enter your office number",
    },
   
  ]).then(answers => {
    const Mang = new Manager(answers.managerName, answers.managerEmail, answers.empID, answers.managerNumber);
    teamArray.push(Mang);
    whatToDo()
  })
};

const whatToDo = () => {
  return inquirer.prompt ([
   {
     type: "list",
     name: "options",
     message:"Great! Which of the below would you like to do next?", 
     choices: [
      {
        name: "Add an engineer to my team",
        
      },
      {
        name: "Add an Intern to my team",
      },
      {
        name: "Create my HTML now",
      },
    ],
   } 
  ]).then(function(user) {
    switch(user.options) {
      case "Add an engineer to my team": engineerQuestions();
      case "Add an Intern to my team": internQuestions();
      case "Create my HTML now": generateHTML();
    }
  })
};


const engineerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "enginName",
      message: "Please enter your engineers name",
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "Please enter your engineers email address",
    },
    {
      type: "input",
      name: "engineerID",
      message: "Please enter your engineers employee ID",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "Please enter your engineers Github Username",
    },
  ]).then(answers => {
    const Engin = new Engineer(answers.enginName, answers.engineerEmail, answers.engineerID, answers.engineerGithub);
    teamArray.push(Engin);
    whatToDo()
  })
};

const internQuestions = () => {
  return inquirer.prompt ([
    {
      type: "input",
      name: "internName",
      message: "Please enter your Interns name",
    },

    {
      type: "input",
      name: "internEmail",
      message: "Please enter your Interns email address",
    },
    {
      type: "input",
      name: "internID",
      message: "Please enter your interns employee ID",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Please enter your Interns School",
    },
  ]).then(answers => {
    const Int = new Intern(answers.internName, answers.internEmail, answers.internID, answers.internSchool);
    teamArray.push(Int);
    whatToDo()
} 
  )};


  // QWHY IS ENGINEER QS AND INTERN NOT LOOPING??????????????AND NOT GOING BACK TO WHATTODO...AND NOT CREATING HTML...ALSO HOW DO I JOIN THE CLASSES IN HTML?

// should i get rid of managerqs below????
  const CreateStuff = () => {
  ManagerQuestions()
    .then((answers) => fs.writeFileSync("index.html", generateHTML(answers)))
    .then(() =>
      console.log("Yahoo! You have created a Team Profile! Checkout HTML")
    )
    .catch((err) => console.error(err));

};

CreateStuff();

// changed manager info to match classes- is that right?
const generateHTML = ({
  managerName,
  managerEmail,
  empID,
  managerNumber,
  enginName,
  engineerEmail,
  engineerID,
  engineerGithub,
}) =>
  `<!DOCTYPE html>
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
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1>Our Team</h1>
      </div>
    </div>
      <div class="container">
        <div class="card">
        <div class="row text">
          <div class="col-sm-4">
            <div class="card-header">
            <h2>${Manager.getName}</h2>
            <p class="lead">Manager</p></div>
            <h3><span class="badge badge-secondary">Contact Info</span>
            </h3>
            <ul class="list-group">
              <li class="list-group-item">Email:         ${Manager.getEmail}</li>
              <li class="list-group-item">Employee ID:   ${Manager.getId}</li>
              <li class="list-group-item">Office Number: ${Manager.getOfficeNumber}</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="engineer">
    <div class="card">
    <div class="row text">
      <div class="col-sm-4">
        <div class="card-header">
        <h2>${enginName}</h2>
        <p class="lead">Engineer</p></div>
        <h3><span class="badge badge-secondary">Contact Info</span>
        </h3>
        <ul class="list-group">
          <li class="list-group-item">Email:         ${engineerEmail}</li>
          <li class="list-group-item">Employee ID:   ${engineerID}</li>
          <li class="list-group-item">GitHub Profile: <a href= "https://github.com/${engineerGithub}" target="_blank">${engineerGithub}</a></li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</div>
<!-- Intern card -->
<div class="container" id="intern">
  <div class="card">
  <div class="row text">
    <div class="col-sm-4">
      <div class="card-header">
      <h2>undefined</h2>
      <p class="lead">Intern</p></div>
      <h3><span class="badge badge-secondary">Contact Info</span>
      </h3>
      <ul class="list-group">
     
        <li class="list-group-item">Email:         ${internEmail}</li>
        <li class="list-group-item">Employee ID:   ${internID}</li>
        <li class="list-group-item">School:         ${internSchool}</li>
    </ul>
    </div>
    </div>
  </div>
</div>
</div>
  </body>
</html>`;