import LinkedList from "./list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

list.prepend("fish");
list.prepend("rabbit");
console.log(list.toString());

console.log(list.size());

console.log(list.head());
console.log(list.tail());

console.log(list.at(4));
console.log(list.at(9));

list.pop();
console.log(list.toString());

console.log(list.contains("parrot"));
console.log(list.contains("turtle"));

console.log(list.find("dog"));
console.log(list.find("horse"));
