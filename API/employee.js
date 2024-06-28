const crypto = require("crypto");

class Employee {
  constructor(
    fullName,
    position,
    email,
    phone,
    leaveDays,
    dateOfAdmission,
    supervisor,
    image
  ) {
    this.id = crypto.randomUUID({ disableEntropyCache: true });
    this.fullName = fullName;
    this.position = position;
    this.email = email;
    this.phone = phone;
    this.leaveDays = leaveDays;
    this.dateOfAdmission = dateOfAdmission;
    this.supervisor = supervisor;
    this.image = image;
  }
}

module.exports = Employee;
