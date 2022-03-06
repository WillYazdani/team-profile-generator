const Intern = require("../lib/Intern")
const Engineer = require("../lib/Engineer")
const Manager = require("../lib/Manager")

const newIntern = employee => {
    return `
    <div class="card has-text-centered">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4"> ${employee.name}</p>
                  <p class="title is-5"> ${employee.getRole()}</p>
                  <p class="subtitle is-6">Email: ${employee.email}</p>
                  <p class="subtitle is-6">ID: ${employee.id}</p>
                  <p class="subtitle is-6">School: ${employee.school}</p>
                </div>
              </div>
            </div>
          </div>
    `;
};

const newEngineer = employee => {
    return `
    <div class="card has-text-centered">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4"> ${employee.name}</p>
                  <p class="title is-5"> ${employee.getRole()}</p>
                  <p class="subtitle is-6">Email: ${employee.email}</p>
                  <p class="subtitle is-6">ID: ${employee.id}</p>
                  <p class="subtitle is-6">Github: ${employee.github}</p>
                </div>
              </div>
            </div>
          </div>
    `;
};

const newManager = employee => {
    return `
    <div class="card has-text-centered">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4"> ${employee.name}</p>
                  <p class="title is-5"> ${employee.getRole()}</p>
                  <p class="subtitle is-6">Email: ${employee.email}</p>
                  <p class="subtitle is-6">ID: ${employee.id}</p>
                  <p class="subtitle is-6">Office: ${employee.office}</p>
                </div>
              </div>
            </div>
          </div>
    `;
};

const newTeam = (employees) => {
    let team ='';
    employees.forEach(employee => {
        if (employee instanceof Intern) {
            team += newIntern(employee);
        } else if (employee instanceof Engineer) {
            team += newEngineer(employee);
        } else if (employee instanceof Manager) {
            team += newManager(employee);
        };
    });
    return team
};

const createPage = (employees) => {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Team</title>
    <link rel="stylesheet" href="./styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
</head>

<body>
    <header class="has-text-centered mb-4 has-background-success">
        <h1 class="title has-text-white p-4">Our Team</h1>
    </header>

    <div class="container is-fluid is-flex is-justify-content-space-around">

        ${newTeam(employees)}

    </div>
    
</body>
</html>

    `;
}

module.exports = createPage;