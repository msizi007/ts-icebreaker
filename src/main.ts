// TODO: CASE 11

// interface

interface User {
  id: number;
  skills: string;
  email: null | string;
  password: string | undefined // password?: string
}
const response = {
  id: 11,
  skills: "JavaScript", // n should be array
};

console.log(typeof response);
