const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
};

// Fix the ternary operator to correctly reflect the user's employment status so that:
// if they are employed and a student they are not looking for work.

const employmentStatus = userObject.isEmployed
? userObject.isStudent ? "not looking for work" : "employed" : "unemployed";

console.log(`${userObject.firstName} ${userObject.lastName} is ${employmentStatus}`);
