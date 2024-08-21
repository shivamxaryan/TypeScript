let myObjects = {
  name: "Aryan",
  age: 22,
  email: "qBjXQ@example.com",
  isTall: true,
};

//this function shows that it is taking argument as an object and returning an object
function loginUser(): {} {
  return {};
}

function createUser(): { name: string; email: string; isActive: boolean } {
  return { name: "Aryan", email: "qBjXQ@example.com", isActive: true };
}

createUser();

function createCourse({ name: string, price: number }) {}
let newCourse = { name: "TypeScript", price: 10, isPaid: false }; //by this isPaid can be passed to this function
createCourse(newCourse);

export {};
