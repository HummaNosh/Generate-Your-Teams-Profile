const inquirer = require("inquirer");
const fs = require("fs");

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
    {
      type: "list",
      name: "options",
      message: "Great! Which of the below would you like to do next?",
      choices: [
        {
          name: "Add an engineer to my team",
          value: engineerQuestions[0].engineerName,
        },
        {
          name: "Add an Intern to my team",
        },
        {
          name: "Create my HTML now",
        },
      ],
    },
  ]);
};

const engineerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
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
  ]);
};

const CreateStuff = () => {
  ManagerQuestions()
    .then((answers) => fs.writeFileSync("index.html", generateHTML(answers)))
    .then(() =>
      console.log("Yahoo! You have created a Team Profile! Checkout HTML")
    )
    .catch((err) => console.error(err));
};

CreateStuff();

const generateHTML = ({
  managerName,
  managerEmail,
  empID,
  managerNumber,
  engineerName,
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
            <h2>${managerName}</h2>
            <p class="lead">Manager</p></div>
            <h3><span class="badge badge-secondary">Contact Info</span>
            </h3>
            <ul class="list-group">
              <li class="list-group-item">Email:         ${managerEmail}</li>
              <li class="list-group-item">Employee ID:   ${empID}</li>
              <li class="list-group-item">Office Number: ${managerNumber}</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
    <div class="card">
    <div class="row text">
      <div class="col-sm-4">
        <div class="card-header">
        <h2>${engineerName}</h2>
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
  </body>
</html>`;
