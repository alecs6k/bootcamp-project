function validateBody(req) {
  const body = req.body;
  const errors = [];
  if (!body.hasOwnProperty("fullName")) {
    errors.push("The fullName field is missing from the request body");
  } else {
    if (
      typeof body.fullName !== "string" ||
      body.fullName.length < 2 ||
      body.fullName.length > 50
    ) {
      errors.push(
        "The fullName field must be a string of at least 2 characters and a maximum of 50"
      );
    }
    if (!/^[a-zA-ZÀ-ÿ]+(\s+[a-zA-ZÀ-ÿ]+)*$/.test(body.fullName)) {
      errors.push("The fullName is only allowed to contain letters");
    }
  }
  if (!body.hasOwnProperty("position")) {
    errors.push("The position field is missing from the request body");
  } else {
    if (!(body.position.toUpperCase() in EnumPosition)) {
      errors.push(
        `The position does not belong to the list of [DEVELOPMENT, QA, MANAGER, ARCHITECT]`
      );
    }
  }

  if (!body.hasOwnProperty("email")) {
    errors.push("The email field is missing from the request body");
  } else {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        body.email
      )
    ) {
      errors.push("The email address is not valid");
    }
  }
  if (!body.hasOwnProperty("phone")) {
    errors.push("The phone field is missing from the request body");
  } else {
    if (typeof body.phone !== "number") {
      errors.push("The phone field must be a number");
    }
  }
  if (!body.hasOwnProperty("leaveDays")) {
    errors.push("The leaveDays field is missing from the request body");
  } else {
    if (typeof body.leaveDays !== "number") {
      errors.push("The leaveDays field must be a number");
    }
  }
  if (!body.hasOwnProperty("supervisor")) {
    errors.push("The supervisor field is missing from the request body");
  } else {
    if (typeof body.supervisor !== "string") {
      errors.push("The supervisor field must be a string");
    }
  }
  return errors;
}

const EnumPosition = Object.freeze({
  DEVELOPMENT: 0,
  MANAGER: 1,
  QA: 2,
  ARCHITECT: 3,
});

module.exports = {
  validateBody,
};
