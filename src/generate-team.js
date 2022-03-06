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
                  <p class="title is-4">${employee.name}</p>
                  <p class="title is-5">${employee.role}</p>
                  <p class="subtitle is-6">Email:${employee.email}</p>
                  <p class="subtitle is-6">ID:${employee.id}</p>
                  <p class="subtitle is-6">School:${employee.school}</p>
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
                  <p class="title is-4">${employee.name}</p>
                  <p class="title is-5">${employee.role}</p>
                  <p class="subtitle is-6">Email:${employee.email}</p>
                  <p class="subtitle is-6">ID:${employee.id}</p>
                  <p class="subtitle is-6">Github:${employee.github}</p>
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
                  <p class="title is-4">${employee.name}</p>
                  <p class="title is-5">${employee.role}</p>
                  <p class="subtitle is-6">Email:${employee.email}</p>
                  <p class="subtitle is-6">ID:${employee.id}</p>
                  <p class="subtitle is-6">Office:${employee.office}</p>
                </div>
              </div>
            </div>
          </div>
    `;
};