interface User {
  name: string;
  id: number;
}

const user1: User = {
  name: "Guy",
  id: 0,
};
const user2: User = {
  name: "Lucy",
  id: 1,
};
const user3: User = {
  name: "Arnold",
  id: 2,
};

const users: User[] = [user1, user2, user3];

const getUserById = (id: number): User | null => {
  const user = users.filter(x => x.id === id)[0];

  return user || null;
}

console.log(getUserById(1)); // user2
console.log(getUserById(9)); // null
