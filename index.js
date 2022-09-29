function User(name) {
  (this.name = name), (this.isAdmin = false);
}
let newUser = new User("alex");
console.log(newUser);
