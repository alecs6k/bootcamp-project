const express = require("express");
const cors = require("cors");
const employeeController = require("./employees");
const validator = require("./validators");
const app = express();
const EnumRol = require("./enumRol");
const { user } = require("./enumRol");

app.use(cors());
app.use(express.json());

const users = [
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
]

app.post("/auth", (req, res) => {
  const { username, password } = req.body;
  const result = users.find((user) => user.username === username && user.password === password);
  return result ? res.status(200).send(result)
    : res.status(400).send("Invalid credentials");
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = employeeController.getEmployeeById(id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send();
  }
});

app.get("/employees", (req, res) => {
  res.send(JSON.stringify(employeeController.getEmployees()));
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = employeeController.getEmployeeById(id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send();
  }
});

app.post("/employees", (req, res) => {
  const errors = validator.validateBody(req);
  if (errors.length === 0) {
    const {
      fullName,
      position,
      email,
      phone,
      leaveDays,
      dateOfAdmission,
      supervisor,
      image,
    } = req.body;
    const employee = employeeController.addEmployee(
      fullName,
      position,
      email,
      phone,
      leaveDays,
      dateOfAdmission,
      supervisor,
      image
    );
    res.status(201).json(employee);
  } else {
    res.status(400).send(errors);
  }
});

app.put("/employees/:id", (req, res) => {
  const errors = validator.validateBody(req);
  if (errors.length === 0) {
    const { id } = req.params;
    const {
      fullName,
      position,
      email,
      phone,
      leaveDays,
      dateOfAdmission,
      supervisor,
      image,
    } = req.body;
    const employee = employeeController.updateEmployee(
      id,
      fullName,
      position,
      email,
      phone,
      leaveDays,
      dateOfAdmission,
      supervisor,
      image
    );
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).send();
    }
  } else {
    res.status(400).send(errors);
  }
});

app.delete("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = employeeController.deleteEmployee(id);
  if (employee) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});

app.post("/auth1", (req, res) => {
  const { email, password } = req.body;
  if (email == 'admin1@gmail.com' && password == '123456') {
    return res.status(200).send({
      jwt: 'token',
      user: {
        id: 1,
        username: 'pepe rios ortega',
        email: email
      }
    });
  } else {
    return res.status(400).send("Invalid credentials");
  }
});