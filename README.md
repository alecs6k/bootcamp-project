# ➡️Introduction

<p align="center">
  <img src="https://i.ibb.co/vqvqkQP/logo-top-sin-fondo.png">
</p>

Time Off Planner (TOP) is designed to facilitate the employee's day-to-day through an intuitive and easy-to-use interface.
Admin module: The administrator will be allowed to add new employees, search for an employee, view an employee's profile and also delete an employee's record.
Supervisor module: Approve or reject vacations of your supervised employees.
Employee module: See your profile, see vacations scheduled in the calendar, request new vacations from your supervisor.

---

# ➡️Members

📌Alex Choque Paquiri

📌Bruno Elias Ramirez Romero

📌Ruben Lupate Contreras

---

# ➡️Table of Contents

📌 Introduction

📌 Members

📌 Used Libraries

📌 Installation

📌 List of valid users to login

📌 Usage

📌 More information

---

# ➡️Used Libraries

| Name                                  | Description                                                                                                                                                                                                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| npm i -D html-loader                  | is used to import HTML files as JavaScript modules. This allows you to include HTML files in your JavaScript files and then process them with webpack                                                                                                                                      |
| npm i -D html-webpack-plugin          | It's a webpack plugin used to generate dynamic HTML files                                                                                                                                                                                                                                  |
| npm i -D mini-css-extract-plugin      | is a webpack plugin used to extract CSS files from your application and create separate CSS files for each of them. This can be useful if you have an application with multiple pages and want to ensure that each page has its own CSS file instead of having all of the CSS in one file. |
| npm i -D file-loader                  | It is used to include files such as images, audio files, fonts, etc. in your JavaScript project                                                                                                                                                                                            |
| npm i -D copy-webpack-plugin          | is a webpack plugin that allows you to copy files and folders from a specified location to the webpack output folder during project build.                                                                                                                                                 |
| npm i -D css-minimizer-webpack-plugin | is a webpack plugin used to minify and optimize CSS files during project build.                                                                                                                                                                                                            |
| npm i -D terser-webpack-plugin        | is a webpack plugin used to minify and optimize JavaScript files during project build.                                                                                                                                                                                                     |
| npm i -D babel-loader                 | is a file upload utility for webpack used to transform JavaScript files using Babel                                                                                                                                                                                                        |
| npm i -D @babel/core                  | is the main Babel module that provides the code transformation functions                                                                                                                                                                                                                   |
| npm i -D @babel/preset-env            | is a Babel preset that is used to automatically configure Babel transformations based on the JavaScript features you need to support in your targets (for example, browsers or specific Node.js versions).                                                                                 |
| npm i image-webpack-loader            | This loader uses image optimization tools like optipng and pngquant to reduce the size of images without sacrificing quality.                                                                                                                                                              |
| npm i -D axios                        | is a promise-based HTTP client library for making HTTP requests from JavaScript                                                                                                                                                                                                            |
| npm i -D css-loader                   | is a file upload utility for webpack used to upload and process CSS files                                                                                                                                                                                                                  |
| npm i -D node-sass                    | allows to compile Sass files into CSS                                                                                                                                                                                                                                                      |
| npm i express                         | With express, you can configure HTTP request handlers and routes to build web applications and APIs. It also provides features such as middleware and support for page rendering templates to facilitate the development of complete web applications.                                     |
| npm i cors                            | is a Node.js middleware used to enable Same Origin Policy (CORS) in web applications.                                                                                                                                                                                                      |

---

# ➡️Installation

You must first install the dependencies with the command:

> npm install

To build the project in development mode you must execute the following command:

> npm run build:dev

To build the project in production mode you must execute the following command:

> npm run build

To start the webpack server and open the project on port 4100

> npm start

To launch the API you must go to the directory with cd API and then execute the command:

> node index.js

To access the api endpoints, the following path must be followed:

📍 http://localhost:3000/employees GET EMPLOYEES

📍 http://localhost:3000/employees/id GET EMPLOYEE

📍 http://localhost:3000/employees POST EMPLOYEE

📍 http://localhost:3000/employees/id PUT EMPLOYEE

📍 http://localhost:3000/employees/id DELETE EMPLOYEE

```js
{
    "fullName": "Juanes Ramos",
    "position": "QA",
    "email": "juan@gmail.com",
    "phone": 78998724,
    "leaveDays": 10,
    "dateOfAdmission": "25/05/2020",
    "supervisor": "Ana Skals",
    "image":"data:base64"
}
```

---

# ➡️List of valid users to login

```js
{
    username: "admin1@gmail.com",
    password: "123456",
    role: "admin",
    firstName: "admin",
    lastName: "admin",
    nickName: "admin",
    birthday: new Date(),
    country: 'Bolivia',
    image: ''
  },
  {
    username: "admin2@gmail.com",
    password: "123456",
    role: "admin",
    firstName: "Pepe",
    lastName: "Rios",
    nickName: "Pepito",
    birthday: new Date(),
    country: 'Bolivia',
    image: ''
  },
  {
    username: "jk@gmail.com",
    password: "123456",
    role: "user",
    firstName: "Marcelo",
    lastName: "Perez",
    nickName: "Marce",
    birthday: new Date(),
    country: 'Bolivia',
    image: ''
  },
  {
    username: "oscar@gmail.com",
    password: "123456",
    role: "user",
    firstName: "Oscar",
    lastName: "Lopez",
    nickName: "Cardozo",
    birthday: new Date(),
    country: 'Peru',
    image: ''
  }

```

TOP works with a JSON file as a database which is located in the API directory

---

# ➡️Usage

Below is a guide for interaction with the application

**Login**

You must log in with the username "admin1@gmail.com" and the password "123456"

<p align="center">
  <img src="https://i.postimg.cc/g2rkJRfs/login.jpg">
</p>

If the user has **administrator** role then he will have access to the following options menu. Below is an explanation of each menu option

<p align="center">
  <img src="https://i.postimg.cc/K8mprDZ7/nuevo-menu.jpg">
</p>

**Add Employee**

To register an employee, you must upload a photo of the employee and the following information: full name, position (DEVELOPMENT, QA, ADMINISTRATION, ARCHITECT), email, phone, days of leave, date of admission and your supervisor in charge All data are required

<p align="center">
  <img src="https://i.postimg.cc/G2bHTXhC/add-employee.jpg">
</p>

**Employee List**

In employee list, the administrator will be able to view a list of all registered employees, and will also have three buttons that will allow you to view user information, update user information, and delete a user's record from the database.

<p align="center">
  <img src="https://i.postimg.cc/PqJf0yQX/employee-list.jpg">
</p>

**Details Employee**

When the administrator wishes to view the information of a user, he can do so by clicking on the following button 👁️ . Once pressed, all the information will be displayed, which contains the full name, email, days of leave, supervisor, position, phone, date of admission

<p align="center">
  <img src="https://i.postimg.cc/mrz0N4k3/details-employee.jpg  ">
</p>

**Update Employee**

By pressing the button ✏️, a view is displayed to update the information of a user, you can change all the user data, even update a new photograph

<p align="center">
  <img src="https://i.postimg.cc/0Q7T4KF5/Update-employee.jpg">
</p>

**Delete Employee**

By pressing the button 🗑️, a modal will be displayed to confirm the deletion of the user's record from the database

<p align="center">
  <img src="https://i.postimg.cc/LX1Sp6Q5/delete-employee.jpg">
</p>

Otherwise, if you have a **user** role, you will have access to the following options menu. Below is an explanation of each menu option.

<p align="center">
  <img src="https://i.postimg.cc/K8mprDZ7/nuevo-menu.jpg">
</p>

**Profile Information**

The following profile information menu option that displays the user's personal information: first name, last name, nickname, birthday and country will be allowed for both administrator and user roles

<p align="center">
  <img src="https://i.postimg.cc/VNgK3LvP/profile-information.jpg">
</p>

**Logout**

There is also an option in the menu that allows you to log out of the account and return to the login

<p align="center">
  <img src="https://i.postimg.cc/YSNS7TBH/logout.jpg">
</p>

---

# ➡️More information

For more information about the project you can find it in the following GITLAB repository _👉 [GIT LAB](http://190.104.11.22:8081/dharbortop/frontend/top-makup-js-html/-/tree/dev)_

DEMO _👉 [TOP-DH](https://strong-moxie-7b3851.netlify.app/#/login)_
