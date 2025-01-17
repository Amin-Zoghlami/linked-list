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

console.log(list.size()); // 8

console.log(list.head());
console.log(list.tail());

console.log(list.at(4)); // Parrot
console.log(list.at(8)); // 8 is out of bounds (return null)

list.pop(); // Pop turtle
console.log(list.toString());

console.log(list.contains("parrot"));
console.log(list.contains("turtle")); // Turtle was popped earlier (return false)

console.log(list.find("dog"));
console.log(list.find("horse")); // Horse is not in the list (return null)

list.insertAt("turtle", 0);
list.insertAt("lizard", 5);
list.insertAt("horse", 9);
list.insertAt("duck", 11); // 10 is out of bounds (do nothing)
console.log(list.toString());

list.removeAt(0); // Remove turtle
list.removeAt(3); // Remove cat
list.removeAt(7); // Remove horse
list.removeAt(7); // 7 is out of bounds (do nothing);
console.log(list.toString());
