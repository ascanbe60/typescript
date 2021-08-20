var user1 = {
    name: "Guy",
    id: 0,
};
var user2 = {
    name: "Lucy",
    id: 1,
};
var user3 = {
    name: "Arnold",
    id: 2,
};
var users = [user1, user2, user3];
var getUserById = function (id) {
    var user = users.filter(function (x) { return x.id === id; })[0];
    return user || null;
};
console.log(getUserById(1)); // user2
console.log(getUserById(9)); // null
//# sourceMappingURL=index.js.map